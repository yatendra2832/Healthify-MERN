const Razorpay = require('razorpay');
const User = require('../Models/user-model')

const crypto = require("crypto")
const Payment = require('../Models/payment-model')
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});
const checkout = async (req, res) => {
    try {
        const options = {
            amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
            currency: "INR",
        };
        const order = await instance.orders.create(options)

        res.status(200).json({
            success: true, order
        })
    } catch (error) {
        console.log(error.message)
    }

}

const paymentVerification = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_API_SECRET)
            .update(body.toString())
            .digest('hex')
        // console.log("Signature Received : ", razorpay_signature);
        // console.log("Signature Generated: ", expectedSignature);

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            await Payment.create({
                razorpay_order_id,
                razorpay_signature,
                razorpay_payment_id
            })
            // res.redirect(`http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`)
            res.status(200).send(razorpay_payment_id)
            console.log("Successful: ", razorpay_payment_id)
        } else {
            res.status(400).json({
                success: false,
                message: "Payment verification failed",
            });
        }
    } catch (error) {
        console.error("Error during payment verification:", error.message);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}

const getKey = async (req, res) => {
    try {
        res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
    } catch (error) {
        console.log(error);
    }
}

const addMoneyToWallet = async (req, res) => {
    try {
        const { userId, amount } = req.body;
        const options = {
            amount: Number(amount * 100),  // amount in the smallest currency unit
            currency: "INR",
        };

        const order = await instance.orders.create(options);

        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

const verifyWalletPayment = async (req, res) => {
    try {
        const { userId, razorpay_order_id, razorpay_payment_id, razorpay_signature, amount } = req.body;

        // Log the request body to debug
        // console.log("Received verifyWalletPayment request:", req.body);

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "User ID is required",
            });
        }

        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_API_SECRET)
            .update(body.toString())
            .digest('hex');

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            // console.log("UserId:", userId);
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                });
            }

            user.wallet += amount;
            await user.save();

            await Payment.create({
                razorpay_order_id,
                razorpay_signature,
                razorpay_payment_id,
            });

            res.status(200).json({
                success: true,
                message: "Payment verified and wallet updated",
                paymentId: razorpay_payment_id,
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Payment verification failed",
            });
        }
    } catch (error) {
        console.error("Error during payment verification:", error.message);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};


const getWalletBalance = async (req, res) => {
    try {
        const { userId } = req.params;
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "User ID is required",
            });
        }
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            wallet: user.wallet,
        });
    } catch (error) {
        console.error("Error fetching wallet balance:", error.message);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};


module.exports = { checkout, paymentVerification, getKey, addMoneyToWallet, getWalletBalance, verifyWalletPayment }
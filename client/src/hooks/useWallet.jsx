import { useState } from "react";
import { useAuth } from "../store/auth"; // Adjust the import path based on your project structure

const useWallet = () => {
  const { user, setUser } = useAuth(); // Ensure setUser is available from useAuth
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const userId = user._id;
  const addMoneyToWallet = async (amount, onSuccess) => {
    setLoading(true);
    setError(null);
    try {
      // Log user details to verify user object
      // console.log("User:", user);

      // Fetch the Razorpay key
      const keyResponse = await fetch(
        "http://localhost:5000/api/payment/getkey"
      );
      const keyData = await keyResponse.json();
      const key = keyData.key;

   

      // Create the Razorpay order
      const orderResponse = await fetch(
        "http://localhost:5000/api/payment/wallet/add-money",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: user._id, amount }),
        }
      );

      const orderData = await orderResponse.json();
      const order = orderData.order;

      // Define Razorpay options
      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Healthify",
        description: "Add money to wallet",
        image: "/images/homepage/logo2.svg",
        order_id: order.id,
        callback_url:
          "http://localhost:5000/api/payment/wallet/verify-payment",
        prefill: {
          name: user.username,
          email: user.email,
          contact: user.phone,
        },
        theme: {
          color: "#007bff",
        },
        handler: async function (response) {
          const paymentId = response.razorpay_payment_id;

        
          // Verify the payment
          try {
            const verificationResponse = await fetch(
              `http://localhost:5000/api/payment/wallet/verify-payment`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  userId: user._id,
                  razorpay_order_id: order.id,
                  razorpay_payment_id: paymentId,
                  razorpay_signature: response.razorpay_signature,
                  amount: order.amount,
                }),
              }
            );

            const verificationData = await verificationResponse.json();

            // Log verification response
            // console.log("Verification response:", verificationData);

            if (verificationData.success) {
              setUser((prevUser) => ({
                ...prevUser,
                wallet: prevUser.wallet + amount,
              }));
              if (onSuccess) onSuccess();
            } else {
              setError("Payment verification failed");
            }
          } catch (error) {
            setError("Error verifying payment");
            console.error("Error verifying payment:", error);
          }
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      setError("Error adding money to wallet");
      console.error("Error adding money to wallet:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const fetchWalletBalance = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/payment/wallet/balance/${userId}`
      );
      const data = await response.json();
      return (data.wallet/100);
    } catch (error) {
      console.error("Error fetching wallet balance:", error);
      return null;
    }
  };

  return {
    fetchWalletBalance,
    addMoneyToWallet,
    loading,
    error,
  };
};

export default useWallet;

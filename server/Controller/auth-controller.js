const User = require('../Models/user-model')
const bcrypt = require('bcrypt');
const signup = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User Already Exist" });
        }

        const userCreated = await User.create({ username, email, phone, password });

        res.status(200).json({
            message: "Registration Successfully",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        })

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error at Signup " })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }

        const user = userExist.matchPassword(password)
        if (user) {
            res.status(200).json({
                message: "Login Successfully ",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            })
        }

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error at Login" });
    }
}

module.exports = { signup, login }
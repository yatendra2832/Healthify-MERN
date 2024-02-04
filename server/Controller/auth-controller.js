const User = require('../Models/user-model')

// Registration Logic
const signup = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: 'Email Already Exist' })
        }

        const data = await User.create({ username, email, phone, password });
        res.status(200).json({ data });

    } catch (error) {
        res.status(500).send('Internal server Error at signup', error)
    }
}

module.exports = { signup }
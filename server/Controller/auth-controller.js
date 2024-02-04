const User = require('../Models/user-model')
const bcrypt = require('bcrypt');
// Registration Logic
const signup = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: 'Email Already Exist' })
        }
        // hash password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const data = await User.create({ username, email, phone, password });
        res.status(200).json({ data });

    } catch (error) {
        res.status(500).send('Internal server Error at signup', error)
    }
}

module.exports = { signup }
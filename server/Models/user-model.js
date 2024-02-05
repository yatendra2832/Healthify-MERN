const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

// secure the passoword with bcrypt
userSchema.pre('save', async function () {
    const user = this;

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound)
        user.password = hash_password

    } catch (error) {
        next(error)
    }

})

// Compare the password using bcrypt


// JWT token verification
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "30d" }
        )
    } catch (error) {
        console.error(error);
    }
}

userSchema.methods.matchPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        console.error(error)
    }
}

const User = new mongoose.model('User', userSchema);

module.exports = User;
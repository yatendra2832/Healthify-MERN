const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

// Secure password with the bcrypt
userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('passowrd')) {
        next();
    }

    try {
        const saltRound = 10;
        const hash_password = bcrypt.hash(user.password,saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error)
    }


})

const User = new mongoose.model('User', userSchema);

module.exports = User;
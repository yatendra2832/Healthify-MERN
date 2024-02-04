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

// Secure password with the bcrypt
userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('passowrd')) {
        next();
    }

    try {
        const saltRound = 10;
        const hash_password = bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error)
    }


})

/*JWT Token:->
1.Authentication : Verifying the identity of a user or client
2.Authorization : Determining what actions a user or client is allowed to perform
*/
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: '30d'
            }
        )
    } catch (error) {
        console.error(error)
    }
}

const User = new mongoose.model('User', userSchema);

module.exports = User;
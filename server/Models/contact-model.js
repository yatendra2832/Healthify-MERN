const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
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
    message: {
        type: String,
        require: true
    },
    reason: {
        type: String,
        require: true
    },
    attachments: {
        type: String,
        require: true
    }
})

const Contact = new model('Contact',contactSchema);

module.exports = Contact;
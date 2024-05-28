const mongoose = require('mongoose')

const supplementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    originalPrice: {
        type: String,
        required: true
    },
    offerAmount: {
        type: String,
        required: true
    }
})

const Supplement = mongoose.model('Supplementcard', supplementSchema);

module.exports = Supplement
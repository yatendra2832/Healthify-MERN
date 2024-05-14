const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    },
    altText: {
        type: String,
        required: true
    },
    linkHref: {
        type: String,
    }
})

const Test = mongoose.model('Test', testSchema)

module.exports = Test;
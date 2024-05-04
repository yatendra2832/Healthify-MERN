const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    imgSrc: {
        type: String,
        required: true
    },
    altText: {
        type: String,
        required: true
    },
    doctorName: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    officeLocation: {
        type: String,
        required: true
    },
    officeHours: {
        type: String,
        required: true
    },
    acceptsInsurance: {
        type: Boolean,
        required: true
    },
    paymentOptions: {
        type: String,
        required: true
    },
    languagesSpoken: {
        type: String,
        required: true
    },
    qualifications: {
        type: String,
        required: true
    },
    specialties: {
        type: String,
        required: true
    },
    nextAvailability: {
        type: String,
        required: true
    },
    consultationFees: {
        type: Number,
        required: true
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;

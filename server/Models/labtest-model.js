const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const labtestBookingSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', // 'User' is the name of  user model
        required: true
    },
    testId: {
        type: Schema.Types.ObjectId,
        ref: 'Labtestcard', //labtestcard is the name of labtests model
        required: true
    },
    testName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    houseNo: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    cityState: {
        type: String,
        required: true
    },
    addressType: {
        type: String,
        default: "Home"
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    appointmentTime: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    paymentId: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

// Create the model
const LabTest = mongoose.model('LabTestBooking', labtestBookingSchema);

module.exports = LabTest;

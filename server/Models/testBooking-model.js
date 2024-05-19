const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Add this line to import Schema

const testBookingSchema = new Schema({ // Use Schema instead of mongoose.Schema
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Assuming 'User' is the name of your user model
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    file: {
        type: String,
        required: true
    },
    testType: {
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

const TestBooking = mongoose.model('Testbooking', testBookingSchema);

module.exports = TestBooking;

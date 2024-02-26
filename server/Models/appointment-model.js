const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema({
    //    personalInformation
    fullName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    // contactInformation
    contactNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },

    // appointmentDetails
    reasonForAppointment: {
        type: String,
        required: true
    },
    preferredDate: {
        type: Date,
        required: true
    },
    preferredTime: {
        type: String,
        required: true
    },
    appointmentType: {
        type: String,
        required: true
    },
    preferredProvider: {
        type: String
    },
    // insuranceDetails
    insuranceProvider: {
        type: String
    },
    policyNumber: {
        type: String
    },
    medicalHistory: {
        type: String
    },
    currentMedications: {
        type: String
    },
    allergies: {
        type: String
    },
    chronicConditions: {
        type: String
    },
    pastSurgeries: {
        type: String
    },
    // emergencyContact
    name: {
        type: String
    },
    relationship: {
        type: String
    },
    phone: {
        type: String
    },
    cancellationPolicy: {
        type: Boolean,
        required: true,
    }

})



const Appointment = new model('Appointment', appointmentSchema);

module.exports = Appointment;
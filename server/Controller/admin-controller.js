const User = require('../Models/user-model')
const Contact = require('../Models/contact-model')
const Appointment = require('../Models/appointment-model')
// Users //
// getting all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select({ password: 0 });
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Users Found" })
        }
        return res.status(200).json({ users })
    } catch (error) {
        next(error);

    }
}

// Contacts
// Getting all the contacts
const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No Contacts Found" });
        }
        return res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}

// Appointments
// Getting all the appointments data
const getAllAppointments = async (req, res) => {
    try {
        const appointment = await Appointment.find();
        if (!appointment || appointment.length === 0) {
            return res.status(404).json({ message: "No Appointments Found" });
        }
        return res.status(200).json(appointment)
    } catch (error) {
        next(error)
    }
}


module.exports = { getAllUsers, getAllContacts, getAllAppointments }
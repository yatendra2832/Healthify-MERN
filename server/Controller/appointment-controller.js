const Appointment = require('../Models/appointment-model');

const appointmentForm = async (req, res) => {
    try {
        const response = req.body;
        await Appointment.create(response);
        res.status(200).json({ message: "Appointment Submitted" })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error at Appointment", error });
    }
}

module.exports = { appointmentForm }
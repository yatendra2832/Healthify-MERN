const Appointment = require('../Models/appointment-model');

const appointmentForm = async (req, res) => {
    try {
        const response = req.body;
       const newAppointment = await Appointment.create(response);
        res.status(200).json(newAppointment)
        // res.status(200).json({ message: "Appointment Submitted"})
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error at Appointment", error });
    }
}

const getAppointmentById = async (req, res) => {
    try {
        // Extract user ID from authenticated user's session or token
        const userId = req.user.id; // Assuming user ID is stored in the user object after authentication
        
        // Query appointments by user ID
        const appointments = await Appointment.find({ userId: userId });

        // Send the appointments as response
        res.status(200).json(appointments);
    } catch (error) {
        // Handle errors
        console.error('Error fetching appointments by user ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { appointmentForm,getAppointmentById }
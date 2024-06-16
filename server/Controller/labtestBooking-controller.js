const LabTest = require('../Models/labtest-model')

const testBooking = async (req, res) => {
    try {
        const response = req.body;
       const newLabTest = await LabTest.create(response);
        res.status(200).json({ message: "Lab Test Booking Form Submitted Successfully" ,data:newLabTest})
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error at TestBooking", error: error.message });
    }
}

const getTestBookingsById = async (req, res) => {
    try {
        // Extract user ID from authenticated user's session or token
        const userId = req.user.id; // Assuming user ID is stored in the user object after authentication

        // Query appointments by user ID
        const testBooking = await LabTest.find({ userId: userId });

        // Send the appointments as response
        res.status(200).json(testBooking);
    } catch (error) {
        // Handle errors
        console.error('Error fetching TestBooking by user ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { testBooking, getTestBookingsById }
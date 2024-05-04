const Doctor = require('../Models/doctors-model')

const doctors = async (req, res) => {
    try {

        const response = await Doctor.find();
        if (!response) {
            return res.status(404).json({ msg: "No Doctors Found" })
        }
        res.status(200).json(response)
    } catch (error) {
        console.log("Error at doctor Controller", error)
    }
}

module.exports = doctors;
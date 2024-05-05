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

// getting user by id 
const getDoctorById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Doctor.findOne({ _id: id })
        return res.status(200).json(data);
    } catch (error) {
        next(error)
    }
}

module.exports = {doctors,getDoctorById};
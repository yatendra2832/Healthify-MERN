const User = require('../Models/user-model')
const Contact = require('../Models/contact-model')
const Appointment = require('../Models/appointment-model')
const TestBooking = require('../Models/testBooking-model')
const LabTest = require('../Models/labtest-model')
// -------------------------------------------------------------------------------
// -----------------------------USERS---------------------------------------------
// getting all users
const getAllUsers = async (req, res,next) => {
    try {
        const users = await User.find().select({ password: 0,cart:0 });
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Users Found" })
        }
        return res.status(200).json({ users })
    } catch (error) {
        console.log(error.message);
        next(error);
    }
}

// getting user by id 
const getUserById = async (req, res,next) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 })
        return res.status(200).json(data);
    } catch (error) {
        next(error)
    }
}

// updating user by id
const updateUserById = async (req, res,next) => {
    try {
        const id = req.params.id;

        const updateData = await User.updateOne({ _id: id }, {
            $set: req.body
        })

        return res.status(200).json(updateData)

    } catch (error) {
        next(error)
    }
}
// deleteuserbyid
const deleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        return res.status(200).json({ message: "User Deleted Successfully" });

    } catch (error) {
        next(error)
    }
}


// --------------------------------------------------------------------------------
// ---------------------------------- CONTACTS-------------------------------------

// Getting all the contacts
const getAllContacts = async (req, res,next) => {
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

//Deleting a Particular contact
// deleteuContactbyid
const deleteContactById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id });
        return res.status(200).json({ message: "Contact Deleted Successfully" });

    } catch (error) {
        next(error)
    }
}

// ------------------------------------------------------------------------------------------
// ----------------------------------------APPOINTMENTS--------------------------------------

// Getting all the appointments data
const getAllAppointments = async (req, res,next) => {
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

// deleteuContactbyid
const deleteAppointmentById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Appointment.deleteOne({ _id: id });
        return res.status(200).json({ message: "Appointment Deleted Successfully" });

    } catch (error) {
        next(error)
    }
}

// Getting appointment by id 
const getAppointmentById = async (req, res,next) => {
    try {
        const id = req.params.id;
        const data = await Appointment.findOne({ _id: id })
        return res.status(200).json(data);
    } catch (error) {
        next(error)
    }
}

// ----------------------------------------------------------------------------------------------------------
// -------------------------------------------------Tests Controllers----------------------------------------
const getAllTests = async (req, res,next) => {
    try {
        const tests = await TestBooking.find();
        if (!tests || tests.length === 0) {
            return res.status(404).json({ message: "No Contacts Found" });
        }
        return res.status(200).json(tests)
    } catch (error) {
        next(error)
    }
}

//Deleting a Particular Test
// deleteuTestbyid
const deleteTestById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await TestBooking.deleteOne({ _id: id });
        return res.status(200).json({ message: "testBooking Deleted Successfully" });

    } catch (error) {
        next(error)
    }
}

// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------Lab Tests Controllers----------------------------------------
const getAllLabTests = async (req, res,next) => {
    try {
        const tests = await LabTest.find();
        if (!tests || tests.length === 0) {
            return res.status(404).json({ message: "No Contacts Found" });
        }
        return res.status(200).json(tests)
    } catch (error) {
        next(error)
    }
}

//Deleting a Particular LabTest
// deleteTestbyid
const deleteLabTestById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await LabTest.deleteOne({ _id: id });
        return res.status(200).json({ message: "testBooking Deleted Successfully" });
    } catch (error) {
        next(error)
    }
}
module.exports = { getAllUsers, getAllContacts, getAllAppointments, deleteUserById, deleteContactById, deleteAppointmentById, getUserById, updateUserById, getAppointmentById, getAllTests, deleteTestById, getAllLabTests, deleteLabTestById }
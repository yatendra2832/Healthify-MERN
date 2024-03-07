const express = require('express');
const router = express.Router();
const adminController = require('../Controller/admin-controller')
const authMiddleware = require("../Middleware/auth-middleware")
const adminMiddleware = require("../Middleware/admin-middleware");

//Users Routes 
// getting all users
router.route("/users").get(authMiddleware, adminMiddleware, adminController.getAllUsers);

//getting user by id 
router.route('/users/:id').get(authMiddleware,adminMiddleware,adminController.getUserById);


// Deleting a Particular user
router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteUserById)


// Contact Route
router.route('/contacts').get(authMiddleware, adminMiddleware, adminController.getAllContacts)
// Deleting a Particular user
router.route('/contacts/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteContactById)

// Appointments

router.route('/appointments').get(authMiddleware, adminMiddleware, adminController.getAllAppointments)
router.route('/appointments/delete/:id').delete(authMiddleware,adminMiddleware,adminController.deleteAppointmentById)
module.exports = router;
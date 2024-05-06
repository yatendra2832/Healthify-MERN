const express = require('express');
const router = express.Router();
const appointmentController = require('../Controller/appointment-controller');
const authMiddleware = require('../Middleware/auth-middleware');
router.route('/appointment').post(appointmentController.appointmentForm)
router.route('/appointment').get(authMiddleware,appointmentController.getAppointmentById)

module.exports = router;
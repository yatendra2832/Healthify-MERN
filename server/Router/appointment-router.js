const express = require('express');
const router = express.Router();
const appointmentController = require('../Controller/appointment-controller')
router.route('/appointment').post(appointmentController.appointmentForm)

module.exports = router;
const express = require('express')
const router = express.Router();
const doctorsController = require("../Controller/doctors-controller")

router.route('/doctorsData').get(doctorsController.doctors)
router.route('/doctorsData/:id').get(doctorsController.getDoctorById)

module.exports = router;

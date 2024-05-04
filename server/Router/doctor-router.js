const express = require('express')
const router = express.Router();
const doctors = require("../Controller/doctors-controller")

router.route('/doctorsData').get(doctors)

module.exports = router;

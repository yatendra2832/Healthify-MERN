const express = require('express');
const router = express.Router();
const authController = require('../Controller/auth-controller')

router.route('/signup').post(authController.signup)

module.exports = router;
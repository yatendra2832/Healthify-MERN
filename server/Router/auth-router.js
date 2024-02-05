const express = require('express');
const router = express.Router();
const authController = require('../Controller/auth-controller')

router.route('/signup').post(authController.signup)
router.route('/login').post(authController.login)

module.exports = router;
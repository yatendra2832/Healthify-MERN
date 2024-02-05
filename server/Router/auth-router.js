const express = require('express');
const router = express.Router();
const authController = require('../Controller/auth-controller')
const {signupSchema} = require('../validators/auth-validator')
const validate = require('../Middleware/validate-middleware')

router.route('/signup').post(validate(signupSchema), authController.signup)
router.route('/login').post(authController.login)

module.exports = router;
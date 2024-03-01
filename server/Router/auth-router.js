const express = require('express');
const router = express.Router();
const authController = require('../Controller/auth-controller')
const {signupSchema,loginSchema} = require('../validators/auth-validator')
const validate = require('../Middleware/validate-middleware')
const authMiddleware = require('../Middleware/auth-middleware')
router.route('/signup').post(validate(signupSchema), authController.signup)
router.route('/login').post(validate(loginSchema),authController.login)

router.route('/user').get(authMiddleware, authController.user);
module.exports = router;
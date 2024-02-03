const express = require('express');
const router = express.Router();
const signup = require('../Controller/auth-controller')
router.route('/signup').get(signup)

module.exports = router;
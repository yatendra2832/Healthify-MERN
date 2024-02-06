const express = require('express');
const router = express.Router();
const contactController = require('../Controller/contact-controller')

router.route('/contact').post(contactController.contactForm)

module.exports = router;
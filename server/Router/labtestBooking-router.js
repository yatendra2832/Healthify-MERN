const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/auth-middleware')
const labtestBookingController = require('../Controller/labtestBooking-controller')
router.route('/').post(labtestBookingController.testBooking)
router.route('/mytest').get(authMiddleware, labtestBookingController.getTestBookingsById)

module.exports = router;
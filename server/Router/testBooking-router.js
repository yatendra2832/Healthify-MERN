const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/auth-middleware')
const testbookingController = require('../Controller/testBooking-controller')
router.route('/booking').post(testbookingController.testBooking)
router.route('/mytest').get(authMiddleware, testbookingController.getTestBookingsById)

module.exports = router;
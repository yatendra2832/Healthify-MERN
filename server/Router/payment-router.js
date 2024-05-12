const express = require('express')
const router = express.Router()
const paymentController = require('../Controller/payment-controller')

router.route('/checkout').post(paymentController.checkout)
router.route('/paymentverification').post(paymentController.paymentVerification)
router.route('/getkey').get(paymentController.getKey)

module.exports = router;
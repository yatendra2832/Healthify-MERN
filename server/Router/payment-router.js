const express = require('express')
const router = express.Router()
const paymentController = require('../Controller/payment-controller')

router.route('/checkout').post(paymentController.checkout)
router.route('/paymentverification').post(paymentController.paymentVerification)
router.route('/getkey').get(paymentController.getKey)

router.route('/wallet/add-money').post(paymentController.addMoneyToWallet);
router.route('/wallet/verify-payment').post(paymentController.verifyWalletPayment);
router.route('/wallet/balance/:userId').get(paymentController.getWalletBalance);

module.exports = router;
const express = require('express')
const router = express.Router()
const supplementController = require('../Controller/supplement-controller')
router.route('/').get(supplementController.gettingAllSupplements)
router.route('/:id').get(supplementController.gettingSupplementById)
module.exports = router;
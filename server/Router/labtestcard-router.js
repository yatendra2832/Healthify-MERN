const express = require('express')
const router = express.Router();
const LabtestcardController = require("../Controller/labtestcard-controller")

router.route('/').get(LabtestcardController.labtestcards)
router.route('/:id').get(LabtestcardController.labtestcardById)

module.exports = router;
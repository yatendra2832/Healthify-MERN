const express = require('express');
const router = express.Router();
const testsController = require('../Controller/test-controller')

router.route('/').get(testsController.testsData)

module.exports = router
const express = require('express');
const router = express.Router();
const testsController = require('../Controller/test-controller')

router.route('/').get(testsController.testsData)
router.route('/:id').get(testsController.getTestById)

module.exports = router
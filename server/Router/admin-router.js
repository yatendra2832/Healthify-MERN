const express = require('express');
const router = express.Router();
const adminController = require('../Controller/admin-controller')
const authMiddleware = require("../Middleware/auth-middleware")
const adminMiddleware = require("../Middleware/admin-middleware");
router.route("/users").get(authMiddleware, adminMiddleware, adminController.getAllUsers);


router.route('/contacts').get(authMiddleware, adminMiddleware, adminController.getAllContacts)


router.route('/appointments').get(authMiddleware, adminMiddleware, adminController.getAllAppointments)

module.exports = router;
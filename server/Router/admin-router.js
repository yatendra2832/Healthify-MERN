const express =require('express');
const router = express.Router();
const adminController = require('../Controller/admin-controller')
const authMiddleware = require("../Middleware/auth-middleware")

router.route("/users").get(authMiddleware,adminController.getAllUsers);


router.route('/contacts').get(authMiddleware,adminController.getAllContacts)


router.route('/appointments').get(authMiddleware,adminController.getAllAppointments)

module.exports= router;
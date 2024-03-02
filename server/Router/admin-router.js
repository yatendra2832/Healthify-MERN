const express =require('express');
const router = express.Router();
const adminController = require('../Controller/admin-controller')

router.route("/users").get(adminController.getAllUsers);


router.route('/contacts').get(adminController.getAllContacts)


router.route('/appointments').get(adminController.getAllAppointments)

module.exports= router;
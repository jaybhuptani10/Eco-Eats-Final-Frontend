const express = require('express');
const { login, register, getAllUsers, createDonation } = require('../controllers/auth');
const authenticationMiddleware = require('../middleware/auth');
const router = express.Router();



router.route("/login").post(login);
router.route("/register").post(register);
router.route("/donor").get();
router.route("/Dashboard").get(authenticationMiddleware);
router.route("/user").get(getAllUsers);
router.route("/donation").post(createDonation);

module.exports =  router;
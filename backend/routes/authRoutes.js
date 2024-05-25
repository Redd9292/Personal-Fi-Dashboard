const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
//add OAuth routes as needed

module.exports = router;

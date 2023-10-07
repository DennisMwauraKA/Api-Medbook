const express = require("express");
const { User } = require("../models/UserModel");
const { registerUSer } = require("../controllers/userController");
const router = express.Router();
router.post("/register", registerUSer);
module.exports = router;

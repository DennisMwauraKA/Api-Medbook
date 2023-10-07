const { User } = require("../models/UserModel");
const express =require("express")
const registerUSer = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if user email is already existing
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already existing" });
    }
    //create new user
    const user = new User({ email, password });
    await user.save();
    res.status(200).json({ message: "User registered " });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to register" });
  }
};
module.exports = {
  registerUSer,
};

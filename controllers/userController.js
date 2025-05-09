const User = require("../models/User");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

const register = async (req, res) => {
  try {
    const { name, email, phoneNumber, password } = req.body;

    // hashing the password
    const hashPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, phoneNumber, password: hashPassword });
    await user.save();
    return res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // checking whether user is registered with provied email or not
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Password is incorrect" });

    // auth token (jwt)
    const token = jwt.sign({ id: user._id }, process.env.jwt_secret_key, {
      expiresIn: "1h",
    });

    return res
      .status(200)
      .json({ message: "User loggedIn successfully", token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login };

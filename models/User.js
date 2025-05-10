const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false, // Default to regular user
  },
});

module.exports = mongoose.model("User", userModel);

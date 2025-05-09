const User = require("../models/User");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const Activity = require("../models/Activity");
dotenv.config();

const allActivities = async (req, res) => {
  try {
    // to list all the activities
    const activities = await Activity.find();
    if (activities.length === 0) {
      return res.status(400).json({ message: "There are no activties" });
    }

    return res.json(activities);
  } catch (error) {}
};

module.exports = allActivities;

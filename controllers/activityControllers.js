const User = require("../models/User");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const Activity = require("../models/Activity");
dotenv.config();

const addActivity = async (req, res) => {
  try {
    // Assuming the request body is an array of activities
    const activities = req.body; // this should be an array of activities

    // Insert multiple activities at once using insertMany
    await Activity.insertMany(activities);

    return res.status(200).json("Activities added successfully");
  } catch (error) {}
  console.log(error);
  return res.status(500).json({ message: error.message });
};

const allActivities = async (req, res) => {
  try {
    // to list all the activities
    const activities = await Activity.find();
    if (activities.length === 0) {
      return res.status(200).json({ message: "There are no activties" });
    }

    return res.json(activities);
  } catch (error) {}
};

module.exports = { addActivity, allActivities };

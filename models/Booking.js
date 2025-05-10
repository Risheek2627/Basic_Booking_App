const mongoose = require("mongoose");
const Activity = require("./Activity");
const User = require("./User");

const bookingModel = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Activity",
    required: true,
  },
});

module.exports = mongoose.model("Booking", bookingModel);

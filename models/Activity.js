const mongoose = require("mongoose");

const activityModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  datetime: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Activity", activityModel);

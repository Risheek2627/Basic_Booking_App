const User = require("../models/User");
const Activity = require("../models/Activity");
const Booking = require("../models/Booking");
const dotenv = require("dotenv");
dotenv.config();

// to book an activity
const bookingActivity = async (req, res) => {
  try {
    const { activityId } = req.body;

    // to check whether the activity is present with given ID
    const activity = await Activity.findOne({ activityId });
    if (!activity) {
      return res
        .status(404)
        .json({ message: `No activity found with id ${activityId}` });
    }

    // booking an activity
    const booking = new Booking({ user: req.user.id, activityId });

    await booking.save();

    return res.status(201).json({ message: "Activity booked successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

// to list the booked activites by loggedIn User

const getMyBookings = async (req, res) => {
  try {
    const booking = await Booking.find({ user: req.user.id }).populate(
      "activity"
    );
    if (booking.length === 0) {
      return res.json({ message: "No bookings found " });
    }
    return res.json(booking);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { bookingActivity, getMyBookings };

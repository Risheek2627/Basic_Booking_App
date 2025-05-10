const User = require("../models/User");
const Activity = require("../models/Activity");
const Booking = require("../models/Booking");
const dotenv = require("dotenv");
dotenv.config();

// to book an activity
const bookActivity = async (req, res) => {
  try {
    const { activityId } = req.body;

    // to check whether the activity is present with given ID
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res
        .status(404)
        .json({ message: `No activity found with id ${activityId}` });
    }

    const existingBooking = await Booking.findOne({
      user: req.user.id,
      activity: activityId,
    });
    if (existingBooking) {
      return res.status(400).json({ error: "Already booked this activity" });
    }

    // booking an activity
    const booking = new Booking({ user: req.user.id, activity: activityId });

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
      "activity",
      "title  description location"
    );
    if (booking.length === 0) {
      return res.status(200).json({ message: "No bookings found " });
    }
    return res.json(booking);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { bookActivity, getMyBookings };

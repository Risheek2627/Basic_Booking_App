const {
  bookActivity,
  getMyBookings,
} = require("../controllers/bookingControlller");
const auth = require("../middleware/authMiddleware");
const express = require("express");
const routes = express.Router();

// to book an activity
routes.post("/bookActivity", auth, bookActivity);

// to get bookings list
routes.get("/getBookings", auth, getMyBookings);

module.exports = routes;

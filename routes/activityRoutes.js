const {
  addActivity,
  allActivities,
} = require("../controllers/activityControllers");
const express = require("express");
const isAdmin = require("../middleware/isAdmin");
const auth = require("../middleware/authMiddleware");
const routes = express.Router();

// add Activity only by Admin
routes.post("/addActivity", auth, isAdmin, addActivity);

// to list all the activities

routes.get("/listActivities", allActivities);

module.exports = routes;

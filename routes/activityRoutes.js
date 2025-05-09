const { allActivities } = require("../controllers/activityControllers");
const express = require("express");
const routes = express.Router();

// to list all the activities

routes.get("/listActivities", allActivities);

module.exports = routes;

const { register, login } = require("../controllers/userController");
const express = require("express");
const routes = express.Router();

// to register
routes.post("/register", register);

//to login
routes.post("/login", login);

module.exports = routes;

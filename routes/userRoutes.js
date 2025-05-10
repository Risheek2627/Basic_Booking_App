const { register, login } = require("../controllers/userController");
const express = require("express");
const routes = express.Router();
const handleValidationError = require("../validation/handelingValidation");
const {
  registerValidation,
  loginValidation,
} = require("../validation/validator");
// to register
routes.post("/register", registerValidation, handleValidationError, register);

//to login
routes.post("/login", loginValidation, handleValidationError, login);

module.exports = routes;

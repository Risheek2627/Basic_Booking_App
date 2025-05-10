const { body } = require("express-validator");

const registerValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("phoneNumber")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone number must be 10 digits"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

const loginValidation = [
  body("email").isEmail().withMessage("Valid email is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

module.exports = { registerValidation, loginValidation };

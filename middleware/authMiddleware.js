const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
  const token = req.headers["authorization"]?.replace("Bearer ", "");
  if (!token) {
    return res.status(404).json({ message: "Token is required" });
  }

  try {
    const decode = jwt.verify(token, process.env.jwt_secret_key);
    const user = await User.findById(decode.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = user; // Assign the user object to req.user
    console.log("User role : ", user.isAdmin);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Token invalid" });
  }
};

module.exports = auth;

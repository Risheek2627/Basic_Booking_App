const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.header["Authorization"]?.replace("Bearer", "");
  if (!token) {
    return res.status(404).json({ message: "Token is required" });
  }

  try {
    const decode = jwt.verify(token, process.env.jwt_secret_key);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Token invalid" });
  }
};

module.exports = auth;

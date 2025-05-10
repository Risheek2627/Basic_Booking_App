const User = require("../models/User");

const isAdmin = async (req, res, next) => {
  try {
    console.log("UserID : ", req.user);
    const user = await User.findById(req.user.id);
    console.log("User", user);

    console.log(user.isAdmin);
    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = isAdmin;

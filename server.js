const express = require("express");
const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const activityRoutes = require("./routes/activityRoutes");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

connectDB();

// user routes
app.use("/api/user", userRoutes);

// activity routes
app.use("/api/activity", activityRoutes);

// booking routes
app.use("/api/booking", bookingRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});

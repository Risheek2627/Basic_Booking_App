const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function connectDB() {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    console.error(error);
    process.exit(1);
  }
}

module.exports = connectDB;

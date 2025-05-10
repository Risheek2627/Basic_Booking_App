const Activity = require("../models/Activity");

const activities = [
  {
    title: "Cricket Match",
    description: "Weekend cricket tournament",
    location: "Central Park, Mumbai",
    datetime: new Date("2024-06-15T10:00:00"),
  },
  {
    title: "Movie Night",
    description: "Avengers Endgame screening",
    location: "PVR Cinemas, Bangalore",
    datetime: new Date("2024-06-20T18:30:00"),
  },
  {
    title: "Football Match",
    description: "Local football match between city teams",
    location: "Football Stadium, Delhi",
    datetime: new Date("2024-07-05T16:00:00"),
  },
  {
    title: "Yoga Class",
    description: "Morning yoga class for beginners",
    location: "Yoga Center, Pune",
    datetime: new Date("2024-06-25T07:00:00"),
  },
  {
    title: "Music Concert",
    description: "Live music concert featuring local artists",
    location: "Open Air Amphitheater, Bangalore",
    datetime: new Date("2024-06-30T19:00:00"),
  },
  {
    title: "Art Exhibition",
    description: "Gallery exhibition showcasing contemporary art",
    location: "National Gallery, New Delhi",
    datetime: new Date("2024-07-10T12:00:00"),
  },
];

async function addData() {
  try {
    await Activity.insertMany(activities);
    console.log("Data added successfully");
  } catch (error) {
    console.log(error);
  }
}

addData();

const mongoose = require("mongoose");
import "dotenv/config";

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string, {});

    console.log("Connection to MongoDB Successful ✅🦋✅");
  } catch (error) {
    console.log("Connection to MongoDB Failed 🥴", error);
  }
};

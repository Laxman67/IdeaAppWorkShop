/*
This willl hold the scehma for user
*/

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 10,
      lowercase: true,
    },
    userType: {
      type: String,
      required: true,
      default: "CUSTOMER",
      enum: ["CUSTOMER", "ADMIN"],
    },
  },
  { timestamps: true }
);

// Define the Collection

module.exports = mongoose.model("User", userSchema);

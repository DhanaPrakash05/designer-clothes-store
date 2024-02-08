const mongoose = require("mongoose");
const { isEmail } = require("validator");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username cannot be empty"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email cannot be empty"],
    unique: true,
    validate: [isEmail, "Email is not valid"],
  },
  mobileNumber: {
    type: Number,
    required: [true, "Mobile number cannot be empty"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password cannot be empty"],
    minlength: [8, "Password length must be more than 8"],
  },
  specializedSkills: {
    type: [String],
    default: [],
  },
  profileImage: {
    type: String, // URL or path to the profile image
  },
  bio: {
    type: String, // Brief description or bio
  },
  ratings: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Assuming you have a User model for the users giving ratings
      },
      rating: {
        type: Number,
        required: true,
      },
      review: {
        type: String,
      },
    },
  ],
});

const Tailor = mongoose.model("tailors", schema);

module.exports = Tailor;

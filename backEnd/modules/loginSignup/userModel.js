const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const schema = new mongoose.Schema({
  username: {
    type: String,
    reqired: [true, "username cannot be empty"],
    unique: true,
  },
  email: {
    type: String,
    reqired: [true, "email cannot be empty"],
    unique: true,
    validate: [isEmail, "email is not valid"],
  },
  mobileNumber: {
    type: Number,
    reqired: [true, "mobile number cannot be empty"],
    unique: true,
  },
  password: {
    type: String,
    reqired: [true, "password cannot be empty"],
    minlength: [8, "password length must be more than 8"],
  },
});

schema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

schema.statics.loginUser = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }

    throw Error("Wrong password");
  }

  throw Error("Email dosen't exist");
};

const User = new mongoose.model("user", schema);

module.exports = User;

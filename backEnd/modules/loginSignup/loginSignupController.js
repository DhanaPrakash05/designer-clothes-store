const authController = require("./authController");
const User = require("./userModel");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
  let errors = { username: "", email: "", mobileNumber: "", password: "" };
  if(err.message === "Wrong password"){
    errors.password="wrong password";
  }
  if(err.message === "Email dosen't exist"){
    errors.email="Email dosen't exist"
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  if (err.code === 11000 && err.keyPattern.username) {
    errors.username = "username is already registered";
  }
  if (err.code === 11000 && err.keyPattern.email) {
    errors.email = "Email is already registered";
  }
  if (err.code === 11000 && err.keyPattern.mobileNumber) {
    errors.mobileNumber = "Mobile number is already registered";
  }
  return errors;
};

const signup = async (req, res) => {
  try {
    const { username, email, mobileNumber, password } = req.body;
    const user = new User({
      username,
      email,
      mobileNumber,
      password,
    });
    await user.save();
    const token = authController.createToken(user.username);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 60 * 60 * 1000 });
    res.status(201).json(user.username);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400);
    res.send(errors);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.loginUser(email, password);
    const token = authController.createToken(user.username);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 60 * 60 * 1000 });
    res.status(200).json(user.username);
  } catch (err) {
    
    const errors = handleErrors(err);
    res.status(400);
    res.send(errors);
  }
};

const logout=(req,res)=>{
  try{
  res.cookie("jwt", "", { httpOnly: true, maxAge: 1});
  }
  catch(err){
    console.log(err);
  }
}

module.exports = { signup, login ,logout};

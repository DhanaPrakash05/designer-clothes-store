const express=require('express');
const router =express.Router();
const loginSignupController=require('../modules/loginSignup/loginSignupController')


router.post("/signup",loginSignupController.signup);
router.post("/login",loginSignupController.login);

module.exports=router;
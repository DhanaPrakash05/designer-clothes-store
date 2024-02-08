const express=require('express');
const router =express.Router();
const loginSignupController=require('../modules/loginSignup/loginSignupController')
const authController=require('../modules/loginSignup/authController')

router.post("/signup",loginSignupController.signup);
router.post("/login",loginSignupController.login);
router.post("/logout",authController.requireAuth,loginSignupController.logout);

module.exports=router;
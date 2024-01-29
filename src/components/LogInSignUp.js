import React, { useState, useEffect } from "react";
import css from "../css/LoginSignUp.module.css";
import axios from "axios";

const LogInSignUp = (props) => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [animationType, setAnimationType] = useState("slideDown");

  useEffect(() => {
    setAnimationType("slideDown");
    if (props.props === "signUp") {
      setIsSignUpVisible(true);
      setIsLoginVisible(false);
    } else if (props.props === "login") {
      setIsLoginVisible(true);
      setIsSignUpVisible(false);
    }
  }, [props.props]);

  const showLogin = () => {
    setIsLoginVisible(true);
    setIsSignUpVisible(false);
  };

  const showSignUp = () => {
    setIsSignUpVisible(true);
    setIsLoginVisible(false);
  };

  const hide = () => {
    setIsLoginVisible(false);
    setIsSignUpVisible(false);
    setAnimationType("slideDown");
    if (props.Hide) {
      props.Hide();
    }
  };

  const goToSignUp = () => {
    setAnimationType("fromLeft");
    showSignUp();
  };

  const goToLogin = () => {
    setAnimationType("fromRight");
    showLogin();
  };

  const [username, setUsername] = useState("");
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [password, setPassword] = useState("");
  const [isPwdFocused, setIsPwdFocused] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [isMobileNumberFocused, setIsMobileNumberFocused] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] =
    useState(false);
  const [emailError, setEmailError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [submitLoginError, setLoginSubmitError] = useState("");
  const [submitSignUpError, setSignUpSubmitError] = useState("");

  const handlePwdFocus = () => {
    setIsPwdFocused(true);
  };

  const handlePwdBlur = () => {
    setIsPwdFocused(false);
  };

  const handleNameFocus = () => {
    setIsNameFocused(true);
  };

  const handleNameBlur = () => {
    setIsNameFocused(false);
  };

  const handlePwdChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleNameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    validateUsername(newUsername);
  };
  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handleMobileNumberFocus = () => {
    setIsMobileNumberFocused(true);
  };

  const handleMobileNumberBlur = () => {
    setIsMobileNumberFocused(false);
  };

  const handleMobileNumberChange = (e) => {
    const newMobileNumber = e.target.value;
    setMobileNumber(newMobileNumber);
    validateMobileNumber(newMobileNumber);
  };

  const handleConfirmPasswordFocus = () => {
    setIsConfirmPasswordFocused(true);
  };

  const handleConfirmPasswordBlur = () => {
    setIsConfirmPasswordFocused(false);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    validateConfirmPassword(newConfirmPassword);
  };
  const shouldApplyRedBorder = (isFocused, input, caller) => {
    if (caller === "username") {
      return isFocused && usernameError !== "";
    } else if (caller === "password") {
      return isFocused && passwordError !== "";
    } else if (caller === "mobileNumber") {
      return isFocused && mobileNumberError !== "";
    } else if (caller === "email") {
      return isFocused && emailError !== "";
    } else if (caller === "confirmPassword") {
      return isFocused && confirmPasswordError !== "";
    }
  };
  const validateUsername = (input) => {
    let error = "";
    if (isNameFocused) {
      if (input.trim() === "") {
        error = "Username should not be empty";
      } else if (/^\d/.test(input) || /^_/.test(input)) {
        error = "Username should not start with a number or _";
      } else if (/[\s]/.test(input)) {
        error = "Username should not contain white spaces";
      } else if (input.length < 8) {
        error = "Username should be at least 8 characters long";
      }
    }
    setUsernameError(error);
  };

  const validatePassword = (input) => {
    let error = "";
    if (isPwdFocused) {
      if (input.trim() === "") {
        error = "Password should not be empty";
      } else if (input.length < 8) {
        error = "Password should be at least 8 characters long";
      } else if (!/[^\w\d\s]/.test(input)) {
        error = "Password should contain at least one special character";
      } else if (!/\d/.test(input)) {
        error = "Password should contain at least one number";
      }
    }
    setPasswordError(error);
  };
  const validateEmail = (input) => {
    let error = "";
    if (isEmailFocused) {
      if (input.trim() === "") {
        error = "Email should not be empty";
      } else if (/^[^a-zA-Z0-9]/.test(input)) {
        error = "Email should not start with special characters";
      } else if (/\s/.test(input)) {
        error = "Email should not contain white spaces";
      } else if (!/^[^\s]+@[^\s]+\.[^\s]+$/.test(input)) {
        error = "Invalid email format";
      }
    }
    setEmailError(error);
  };

  const validateMobileNumber = (input) => {
    let error = "";
    if (isMobileNumberFocused) {
      if (input.trim() === "") {
        error = "Mobile Number should not be empty";
      } else if (/[\s]/.test(input)) {
        error = "Mobile number can't have white spaces";
      } else if (/[a-zA-Z]/.test(input)) {
        error = "Mobile Number should only contain numbers";
      } else if (input.length !== 10) {
        error = "Mobile Number should be exactly 10 digits";
      } else if (!/^\d{10}$/.test(input)) {
        error = "Invalid mobile number format";
      }
    }
    setMobileNumberError(error);
  };

  const validateConfirmPassword = (input) => {
    let error = "";
    if (isConfirmPasswordFocused) {
      if (input.trim() === "") {
        error = "Confirm Password should not be empty";
      } else if (input !== password) {
        error = "Passwords do not match";
      }
    }
    setConfirmPasswordError(error);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (emailError || passwordError) {
      setLoginSubmitError("Invalid details. Please check your input.");
      return;
    } else if (email === "" || password === "") {
      setLoginSubmitError("Fill all the fields");
      return;
    } else {
      setLoginSubmitError("");
    }
  };
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (
      usernameError ||
      passwordError ||
      emailError ||
      confirmPasswordError ||
      mobileNumberError
    ) {
      setSignUpSubmitError("Invalid details. Please check your input.");
      return;
    } else if (
      username === "" ||
      password === "" ||
      email === "" ||
      confirmPassword === "" ||
      mobileNumber === ""
    ) {
      setSignUpSubmitError("Fill all the fields");
      return;
    } else {
      setSignUpSubmitError("");
      try {
        const response = await axios.post("http://localhost:3500/signup", {
          username,
          email,
          mobileNumber,
          password,
        });
        console.log("Server response:", response.data);
      } catch (error) {
        console.error("Error during signup:", error);
        setSignUpSubmitError("Error during signup. Please try again.");
      }
    }
  };

  return (
    <div className={css.container}>
      {isLoginVisible && (
        <div className={`${css.Login} ${css[animationType]}`}>
          <button onClick={hide}>
            <span className={css.close}>&times;</span>
          </button>

          <form>
            <h3>LOGIN</h3>
            <input
              type="email"
              autoComplete={false}
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              className={
                shouldApplyRedBorder(isEmailFocused, email, "email")
                  ? css.redBorder
                  : ""
              }
            />
            {emailError && <div className={css.error}>{emailError}</div>}

            <input
              type="password"
              id="pwd"
              placeholder="Password"
              value={password}
              onChange={handlePwdChange}
              onFocus={handlePwdFocus}
              onBlur={handlePwdBlur}
              className={
                shouldApplyRedBorder(isPwdFocused, password, "password")
                  ? css.redBorder
                  : ""
              }
            />
            {passwordError && <div className={css.error}>{passwordError}</div>}
            <input
              type="submit"
              value="Submit"
              onClick={handleLoginSubmit}
              className={css.submitBtn}
            />
            {submitLoginError && (
              <div className={css.error}>{submitLoginError}</div>
            )}
            <div class={css.toggle}>
              <h4>Don't have an account?</h4>
              <button onClick={goToSignUp}>Go to signup</button>
            </div>
          </form>
        </div>
      )}

      {isSignUpVisible && (
        <div className={`${css.SignUp} ${css[animationType]}`}>
          <button onClick={hide}>
            <span className={css.close}>&times;</span>
          </button>
          <form>
            <h3>SignUp</h3>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={handleNameChange}
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
              className={
                shouldApplyRedBorder(isNameFocused, username, "username")
                  ? css.redBorder
                  : ""
              }
            />

            {usernameError && <div className={css.error}>{usernameError}</div>}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              className={
                shouldApplyRedBorder(isEmailFocused, email, "email")
                  ? css.redBorder
                  : ""
              }
            />
            {emailError && <div className={css.error}>{emailError}</div>}
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              onFocus={handleMobileNumberFocus}
              onBlur={handleMobileNumberBlur}
              className={
                shouldApplyRedBorder(
                  isMobileNumberFocused,
                  mobileNumber,
                  "mobileNumber"
                )
                  ? css.redBorder
                  : ""
              }
            />
            {mobileNumberError && (
              <div className={css.error}>{mobileNumberError}</div>
            )}
            <input
              type="password"
              id="pwd"
              placeholder="Password"
              value={password}
              onChange={handlePwdChange}
              onFocus={handlePwdFocus}
              onBlur={handlePwdBlur}
              className={
                shouldApplyRedBorder(isPwdFocused, password, "password")
                  ? css.redBorder
                  : ""
              }
            />
            {passwordError && <div className={css.error}>{passwordError}</div>}
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onFocus={handleConfirmPasswordFocus}
              onBlur={handleConfirmPasswordBlur}
              className={
                shouldApplyRedBorder(
                  isConfirmPasswordFocused,
                  confirmPassword,
                  "confirmPassword"
                )
                  ? css.redBorder
                  : ""
              }
            />
            {confirmPasswordError && (
              <div className={css.error}>{confirmPasswordError}</div>
            )}
            <input
              type="submit"
              value="Submit"
              className={css.submitBtn}
              onClick={handleSignUpSubmit}
            />
            {submitSignUpError && (
              <div className={css.error}>{submitSignUpError}</div>
            )}
            <div class={css.toggle}>
              <h4>Already have an account?</h4>
              <button onClick={goToLogin}>Go to Login</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LogInSignUp;

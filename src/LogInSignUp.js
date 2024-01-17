import React, { useState, useEffect } from "react";
import css from "./css/LoginSignUp.module.css";

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

  return (
    <div className={css.container}>
      {isLoginVisible && (
        <div className={`${css.Login} ${css[animationType]}`}>
          <button onClick={hide}>
            <span className={css.close}>&times;</span>
          </button>

          <form>
            <h3>LOGIN</h3>
            <input type="text" placeholder="Username or Email" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Submit" />
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
            <input type="text" placeholder="Username"  />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Mobile Number" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="submit" value="Submit" />
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

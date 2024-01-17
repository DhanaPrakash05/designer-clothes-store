import React from "react";
import user_icon from "./images/user-icon.jpg";
import crown from "./images/crown.svg";
import css from "./css/Header.module.css";
import LogInSignUp from "./LogInSignUp";
import { useState,useEffect } from "react";

const Header = (pro) => {
  const [value, setValue] = useState(null);
  const chooseValue = (val) => {
    setValue(val);
  };
  return (
    <div className={css.headContainer}>
      {value && <LogInSignUp props={value} Hide={() => setValue(null)}  />}
      <div className={css.header}>
        <div>
          <img src={crown} alt="crown" />
        </div>
        <div id={css.title}>IMPERIUM</div>
        <div className={css.create_account}>
          <img id={css.icon} src={user_icon} alt="icon" />
          <div className={css.dropdown}>
            <ul>
              <li onClick={() => chooseValue("signUp")}>Sign Up</li>
              <li onClick={() => chooseValue("login")}>Log In</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={css.navBar}>
        <div>
          <a>About</a>
        </div>
        <div>
          <a>Trending</a>
        </div>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Designers</a>
        </div>
      </div>
    </div>
  );
};
export default Header;

import React from "react";
import user_icon from "./images/user-icon.jpg";
import crown from "./images/crown.svg";
import css from "./css/Home.module.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require("./images/slideshow1.jpg"),
    require("./images/slideshow3.jpg"),
    require("./images/slideshow2.jpg"),
    require("./images/slideshow4.jpg"),
  ];

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(slideshowInterval);
  }, [currentImageIndex, images.length]);

  return (
    <div
      className={css.background}
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className={css.header}>
        <div>
          <img src={crown} alt="crown" />
        </div>
        <div id={css.title}>IMPERIUM</div>
        <div className={css.create_account}>
          <img id={css.icon} src={user_icon} alt="icon" />
          <div className={css.dropdown}>
            <ul>
              <li>Sign Up</li>
              <li>Log In</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={css.navBar}>
        <div><a>About</a></div>
        <div><a>Trending</a></div>
        <div><a>Profile</a></div>
        <div><a>Designers</a></div>
      </div>

      <div className={css.dummy1}>
      </div>
      <div className={css.dummy2}>
      </div>
    </div>
  );
};
export default Home;

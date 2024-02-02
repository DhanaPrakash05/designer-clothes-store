import React from "react";
import css from "../css/UtilityBar.module.css";
import cart from "../images/cart.png";
import profile from "../images/profile.png";
import heart from "../images/heart.png";
import search from '../images/search.png'
const UtilityBar = () => {
  return (
    <div className={css.container}>
      <input
        className={css.searchBar}
        type="text"
        placeholder="   Search for clothes & more "
      ></input>
      <button  className={css.searchBtn}><img src={search}></img></button>
      <div className={css.icons}>
        <img src={cart} />
        <img src={heart} />
        <img src={profile} />
      </div>
    </div>
  );
};
export default UtilityBar;

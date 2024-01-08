import React from "react";
import user_icon from "./images/user-icon.svg";
import crown from "./images/crown.svg";
import css from "./css/Header.module.css";

const Heading=()=>{
    return(
       
    <div className={css.header}>
        <div><img src={crown} alt="crown"></img></div>
        <div  id={css.title}>IMPERIUM</div>
        <div className={css.create_account}>
        <img src={user_icon} alt="icon"></img>
        <div class={css.dropdown}>
            <ul>
                <li>Sign Up</li>
                <li>Log In</li>
            </ul>
        </div>
        </div>
   </div>
    );
    
}
export default Heading;
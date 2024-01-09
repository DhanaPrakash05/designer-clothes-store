import React from "react";
import Header from './Header.js';
import css from './css/Home.module.css';
const Home=()=>{
    return(
        <div class={css.background}>
        <Header />
            <div class={css.container}>
                <div class={css.loginBox}>
                </div>
            </div>
        </div>
    );
}
export default Home;
import React from "react";
import css from "./css/footer.module.css";
import insta from "./images/insta.svg";
import fb from "./images/facebook.svg";
import linkedin from "./images/linkedin.svg";
const Footer = () => {
  return (
    <div>
      <div className={css.footerContainer}>
        <div className={css.help}>
          <h3>NEED HELP?</h3>
          <a>Order Status</a>
          <a>Delivery</a>
          <a>Returns</a>
          <a>FAQs</a>
          <a>Shipping Policy</a>
          <a>Return And Cancellation Policy</a>
          <a>Contact Us</a>
        </div>
        <div className={css.about}>
          <h3>ABOUT US</h3>
          <a>Fashion & Retail Ltd</a>
          <a>Find A Store</a>
          <a>Allen Solly Blogs</a>
          <a>Bulk Order </a>
          <a> Membership Program</a>
        </div>
        <div className={css.socialMedia}>
          <h3>Find us on</h3>
          <div>
            <img src={insta}></img>
            <img src={fb}></img>
            <img src={linkedin}></img>
          </div>
          <h3>More From us</h3>
          <a>Gift Vouchers</a>
          <a>Coupons</a>
        </div>
      </div>
      <div className={css.end}>
        <span>Privacy policy</span>
        <span>|</span>
        <span>Terms & conditions</span>
        <span>|</span>
        <span>&copy; All rights reserved</span>
      </div>
    </div>
  );
};
export default Footer;

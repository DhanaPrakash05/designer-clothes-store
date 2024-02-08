import React from "react";
import css from "../css/Menu.module.css";
import UtilityBar from "./UtilityBar";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import star from "../images/star.png";
import img1 from "../images/stylefeed1.jpg";
import img2 from "../images/stylefeed2.jpg";
import img5 from "../images/stylefeed5.jpg";
import img6 from "../images/stylefeed6.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import LogInSignUp from "./LogInSignUp";

const Categories = () => {
  const navigate = useNavigate();
  function goToTailorCategories() {
    navigate("/components/TailorCategories");
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [menDressData, setMenDressData] = useState([]);
  const [womenDressData, setWomenDressData] = useState([]);
  const [kidsDressData, setKidsDressData] = useState([]);
  useEffect(() => {
    const fetchAllImageMetadata = async () => {
      try {
        const responseForMen = await axios.get(
          `http://localhost:3001/all/metaData/Men`
        );
        setMenDressData(responseForMen.data);
        const responseForWomen = await axios.get(
          `http://localhost:3001/all/metaData/Women`
        );
        setWomenDressData(responseForWomen.data);
        const responseForKids = await axios.get(
          `http://localhost:3001/all/metaData/Kids`
        );
        setKidsDressData(responseForKids.data);
      } catch (error) {
        console.error("Error retrieving all Men metadata:", error);
      }
    };

    fetchAllImageMetadata();
  }, []);
  const [value, setValue] = useState(null);
  const chooseValue = (val) => {
    setValue(val);
  };
  return (
    <div className={css.body}>
      <UtilityBar />
      <li onClick={() => chooseValue("signUp")}>Sign Up</li>
      <li onClick={() => chooseValue("login")}>Log In</li>
      {value && <LogInSignUp props={value} Hide={() => setValue(null)} />}
      {/* sticky toggler */}
      <div className={css.option}>
        <div>Custom</div>
        <div onClick={goToTailorCategories}>Tailored</div>
      </div>

      {/* categories */}
      <div className={css.category}>Women's</div>
      <div className={css.cauroselContainer}>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1900}
          // arrows={null}
        >
          {womenDressData.map((womenDress) => (
            <div className={css.elements} key={womenDress.name}>
              <img
                src={`http://localhost:3001/image/${womenDress.name}`}
                alt={womenDress.name}
                style={{ maxWidth: "100%" }}
              />
              <div className={css.rating}>
                <span>
                  4<img src={star}></img>
                </span>
                <span>7k</span>
              </div>

              <div className={css.title}>{womenDress.name}</div>
              <div className={css.desc}>{womenDress.description}</div>
              <div className={css.price}>
                &#x20B9;{womenDress.price}
                <span className={css.strike}>
                  &#x20B9;<strike>1999</strike>
                </span>
                <span className={css.offer}>50% off</span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className={css.category}>Men's</div>
      <div className={css.cauroselContainer}>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1900}
          arrows={null}
        >
          {menDressData.map((menDress) => (
            <div className={css.elements} key={menDress.name}>
              <img
                src={`http://localhost:3001/image/${menDress.name}`}
                alt={menDress.name}
                style={{ maxWidth: "100%" }}
              />
              <div className={css.rating}>
                <span>
                  4<img src={star}></img>
                </span>
                <span>7k</span>
              </div>

              <div className={css.title}>{menDress.name}</div>
              <div className={css.desc}>{menDress.description}</div>
              <div className={css.price}>
                &#x20B9;{menDress.price}
                <span className={css.strike}>
                  &#x20B9;<strike>1999</strike>
                </span>
                <span className={css.offer}>50% off</span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className={css.category}>Kid's</div>
      <div className={css.cauroselContainer}>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1900}
          arrows={null}
        >
          {kidsDressData.map((kidsDress) => (
            <div className={css.elements} key={kidsDress.name}>
              <img
                src={`http://localhost:3001/image/${kidsDress.name}`}
                alt={kidsDress.name}
                style={{ maxWidth: "100%" }}
              />
              <div className={css.rating}>
                <span>
                  4<img src={star}></img>
                </span>
                <span>7k</span>
              </div>

              <div className={css.title}>{kidsDress.name}</div>
              <div className={css.desc}>{kidsDress.description}</div>
              <div className={css.price}>
                &#x20B9;{kidsDress.price}
                <span className={css.strike}>
                  &#x20B9;<strike>1999</strike>
                </span>
                <span className={css.offer}>50% off</span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Categories;

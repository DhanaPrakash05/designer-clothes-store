import React from "react";
import css from "./css/Home.module.css";
import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "./images/stylefeed1.jpg";
import img2 from "./images/stylefeed2.jpg";
import img3 from "./images/stylefeed3.jpg";
import img4 from "./images/stylefeed4.jpg";
import img5 from "./images/stylefeed5.jpg";
import img6 from "./images/stylefeed6.jpg";
import img7 from "./images/stylefeed7.jpg";
import img8 from "./images/stylefeed8.jpg";
import crown from "./images/crown2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const Home = () => {
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require("./images/slideshow1.jpg"),
    require("./images/slideshow3.jpg"),
    require("./images/slideshow2.jpg"),
    require("./images/slideshow4.jpg"),
    require("./images/slideshow5.jpg"),
  ];

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(slideshowInterval);
  }, [currentImageIndex, images.length]);
  useEffect(() => {
    const focusSearchInput = () => {
      const searchInput = document.querySelector(`.${css.input}`);
      if (searchInput) {
        searchInput.focus();
      }
    };
    const focusTimeout = setTimeout(focusSearchInput, 1000);
    return () => clearTimeout(focusTimeout);
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);

  const holdPosition = () => {
    setIsExpanded(false);
  };
  console.log(isExpanded);
  return (
    <div>
      <div
        className={css.background}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <Header />
        <div className={css.quote}>
          <p>Wear it only if it's exclusive!</p>
        </div>

        <div className={css.searchbar} onLoad={holdPosition} >
          <input
            className={css.input}
            type="text"
            placeholder="Seach  something"
            aria-label="search"
          />

          <button className={css.searchSymbol} >
            <FontAwesomeIcon icon={faSearch} aria-label="searchSymbol" />
          </button>
        </div>
      </div>

      <div className={css.styleFeedContainer}>
        <div>
          <p>Style Feed</p>
          <p>Outfit ideas, editors pick, trending</p>
        </div>
        <div className={css.styleFeed}>
          <Carousel responsive={responsive} infinite={true} autoPlay={true}>
            <div className={css.elements}>
              <img src={img1}></img>
              <p>Tour picks</p>
              <p> Explore around the world with us...</p>
            </div>
            <div className={css.elements}>
              <img src={img5}></img>
              <p>Formal Fashion</p>
              <p>Shine among your colleagues</p>
            </div>
            <div className={css.elements}>
              <img src={img2}></img>
              <p>Stay cosy</p>
              <p>Be comfortable with your company</p>
            </div>
            <div className={css.elements}>
              <img src={img6}></img>
              <p>Formal fits</p>
              <p>Impose yor presence in workspace</p>
            </div>
            <div className={css.elements}>
              <img src={img3}></img>
              <p>Feel Pretty</p>
              <p>Unique attire might be what you are looking for!</p>
            </div>
            <div className={css.elements}>
              <img src={img7}></img>
              <p>Model fits</p>
              <p>Makes u feel better than a model</p>
            </div>
            <div className={css.elements}>
              <img src={img4}></img>
              <p>Designers</p>
              <p>Sculpt ur own by blending those</p>
            </div>
            <div className={css.elements}>
              <img src={img8}></img>
              <p>Style:Spotlight</p>
              <p>Nothing makes u confident enough than a suit</p>
            </div>
          </Carousel>
        </div>
        <div>View All</div>
      </div>
      <div className={css.app}>
        <div>
          <p>The Imperium App</p>
          <img src={crown} />
        </div>
        <div>Download now</div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;

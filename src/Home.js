import React from "react";
import css from "./css/Home.module.css";
import { useState, useEffect } from "react";
import Header from "./Header";


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
    <div>
    <div className={css.background} style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
     <Header/>
     <div className={css.quote}>
      <p>Wear it only if it's exclusive!</p>
     </div>
    </div>
     <div className={css.styleFeed}>

     </div>
     </div>
  );
};
export default Home;

import React from "react";
import css from "../css/TailorCategories.module.css";
import UtilityBar from "./UtilityBar";
import { useNavigate } from "react-router-dom";
const TailorCategories = () => {
    const navigate=useNavigate();
    function goToCategories(){
        navigate('/components/Categories');
    }

  return (
    <div className={css.body}>
      <UtilityBar />
      <div className={css.option}>
        <div onClick={goToCategories}>Custom</div>
        <div>Tailored</div>
        </div>
    </div>
  );
};
export default TailorCategories;

import React from "react";
import UtilityBar from "./UtilityBar";
import css from '../css/Tailors.module.css';
const Tailors=()=>{

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
      
    

return(
    <div className={css.body}>
    <UtilityBar/>
    <div className={css.container}>
        <div className={css.card}>

        </div>
        <div className={css.card}>

        </div>
        <div className={css.card}>

        </div>
    </div>
    </div>
)

}

export default Tailors;
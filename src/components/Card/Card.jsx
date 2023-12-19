import React, { useState } from "react";
import car from "../../assets/pictures/car_example.jpg";
import heart from "../../assets/icons/heart.svg";
import dots from "../../assets/icons/dots.svg";
import styles from "../Card/Card.module.scss";
import DetailsModal from "../DetailsModal/DetailsModal";
import SelectionModal from "../SelectionModal/SelectionModal";

const Card = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  function handleIsActive() {
    setIsActive(!isActive);
  }
  function handleIsSelect() {
    setIsSelect(!isSelect);
  }
  return (
    <>
      <div className={styles.cardContainer}>
        <img src={car} alt="" className={styles.cardImage} />
        <h3 className={styles.title} onClick={handleIsActive}>
          BMW M4 Coupe: A Two-Door
        </h3>
        <h4 className={styles.price}>23 000 $</h4>
        <div className={styles.likes}>
          <div className={styles.likesBlock}>
            <img src={heart} alt="" />
            <span>100</span>
          </div>

          <img src={dots} alt="" onClick={handleIsSelect} />
        </div>
        {isSelect ? <SelectionModal handleIsSelect={handleIsSelect} /> : null}
      </div>
      {isActive ? <DetailsModal handleIsActive={handleIsActive} /> : null}
    </>
  );
};

export default Card;

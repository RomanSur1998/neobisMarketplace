import React from "react";
import car from "../../assets/pictures/car_example.jpg";
import styles from "../Card/Card.module.scss";

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <img src={car} alt="" className={styles.cardImage} />
      <h3>BMW M4 Coupe: A Two-Door</h3>
      <h4>23 000 $</h4>
      <div></div>
    </div>
  );
};

export default Card;

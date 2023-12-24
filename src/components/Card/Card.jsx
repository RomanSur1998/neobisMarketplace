import React, { useState } from "react";
import heart from "../../assets/icons/heart.svg";
import heartGray from "../../assets/icons/heart_gray.svg";
import dots from "../../assets/icons/dots.svg";
import styles from "../Card/Card.module.scss";
import DetailsModal from "../DetailsModal/DetailsModal";
import SelectionModal from "../SelectionModal/SelectionModal";

const Card = ({ pathname, elem }) => {
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
        <img
          src={elem?.files[0]}
          alt="card block"
          className={styles.cardImage}
          width={142}
          height={85}
        />
        <h3 className={styles.title} onClick={handleIsActive}>
          {elem?.name}
        </h3>
        <h4 className={styles.price}>{elem?.price} $</h4>
        <div className={styles.likes}>
          <div className={styles.likesBlock}>
            <img
              src={elem?.isFavor ? heart : heartGray}
              alt=""
              className={styles.reiting}
            />
            <span>{elem?.reiting}</span>
          </div>

          {pathname ? <img src={dots} alt="" onClick={handleIsSelect} /> : null}
        </div>
        {isSelect ? <SelectionModal handleIsSelect={handleIsSelect} /> : null}
      </div>
      {isActive ? (
        <DetailsModal handleIsActive={handleIsActive} elem={elem} />
      ) : null}
    </>
  );
};

export default Card;

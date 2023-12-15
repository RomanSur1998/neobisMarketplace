import React from "react";
import styles from "../ModalButton/ModalButton.module.scss";

const ModalButton = ({ text, button }) => {
  return (
    <button className={!button ? styles.button : styles.btnGray}>{text}</button>
  );
};

export default ModalButton;

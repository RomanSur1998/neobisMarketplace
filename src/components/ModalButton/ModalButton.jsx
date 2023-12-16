import React from "react";
import styles from "../ModalButton/ModalButton.module.scss";

const ModalButton = ({ text, formik }) => {
  return (
    <button className={formik.isValid ? styles.button : styles.btnGray}>
      {text}
    </button>
  );
};

export default ModalButton;

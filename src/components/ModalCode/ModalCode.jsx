import React from "react";
import contact from "../../assets/icons/contact.svg";
import styles from "../ModalCode/ModalCode.module.scss";

const ModalCode = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Изменить номер телефона</h2>
        <img src={contact} alt="" />
        <h3>Введите код из СМС</h3>
        <input type="text" name="" id="" placeholder="0 0 0 0 " />
        <span>Повторный запрос</span>
      </div>
    </div>
  );
};

export default ModalCode;

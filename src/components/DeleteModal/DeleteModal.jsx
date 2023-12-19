import React from "react";
import trash from "../../assets/icons/trash.svg";
import styles from "../DeleteModal/DeleteModal.module.scss";

const DeleteModal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <img src={trash} alt="" />
        <h3>Вы действительно хотите удалить данный товар?</h3>
        <button className={styles.buttonOut}>Удалить</button>
        <button className={styles.buttonCancel}>Отмена</button>
      </div>
    </div>
  );
};

export default DeleteModal;

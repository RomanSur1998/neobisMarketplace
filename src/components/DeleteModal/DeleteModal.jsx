import React from "react";
import trash from "../../assets/icons/trash.svg";
import styles from "../DeleteModal/DeleteModal.module.scss";

const DeleteModal = ({ setIsActive, isActive }) => {
  return (
    <div
      className={styles.modal}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={trash} alt="" />
        <h3>Вы действительно хотите удалить данный товар?</h3>
        <button className={styles.buttonOut}>Удалить</button>
        <button
          className={styles.buttonCancel}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          Отмена
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;

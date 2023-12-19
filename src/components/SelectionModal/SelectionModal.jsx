import React from "react";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";
import styles from "../SelectionModal/SelectionModal.module.scss";

const SelectionModal = ({ handleIsActive }) => {
  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <div className={styles.elemContainer}>
        <img src={editIcon} alt="" />
        <span>Изменить</span>
      </div>
      <div className={styles.elemContainer}>
        <img src={deleteIcon} alt="" />
        <span>Удалить</span>
      </div>
    </div>
  );
};

export default SelectionModal;

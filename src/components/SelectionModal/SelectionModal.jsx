import React from "react";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";
import styles from "../SelectionModal/SelectionModal.module.scss";

const SelectionModal = () => {
  return (
    <div>
      <img src={editIcon} alt="" />
      <img src={deleteIcon} alt="" />
    </div>
  );
};

export default SelectionModal;

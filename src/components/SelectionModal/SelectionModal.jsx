import React, { useState } from "react";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";
import styles from "../SelectionModal/SelectionModal.module.scss";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";

const SelectionModal = ({ handleIsSelect, elem }) => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveEdit, setIsActiveEdit] = useState(false);
  function haddleActive() {
    setIsActive(!isActive);
  }
  function handleEditActive() {
    setIsActiveEdit(!isActiveEdit);
  }

  return (
    <>
      <div
        className={styles.containerSelect}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.elemContainer} onClick={handleEditActive}>
          <img src={editIcon} alt="" />
          <span>Изменить</span>
        </div>
        <div className={styles.elemContainer} onClick={haddleActive}>
          <img src={deleteIcon} alt="" />
          <span>Удалить</span>
        </div>
      </div>
      {isActive ? (
        <DeleteModal
          setIsActive={setIsActive}
          isActive={isActive}
          elem={elem}
        />
      ) : null}

      {isActiveEdit ? (
        <EditModal handleEditActive={handleEditActive} elem={elem} />
      ) : null}
    </>
  );
};

export default SelectionModal;

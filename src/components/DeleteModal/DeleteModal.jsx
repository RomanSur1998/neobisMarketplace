import React from "react";
import trash from "../../assets/icons/trash.svg";
import styles from "../DeleteModal/DeleteModal.module.scss";
import { useDispatch } from "react-redux";
import {
  setMyProductDelete,
  setProductDelete,
} from "../../redux/slices/ProductsSlice";

const DeleteModal = ({ setIsActive, isActive, elem }) => {
  const dispatch = useDispatch();
  function handleDelete(product) {
    dispatch(setProductDelete(product));
    dispatch(setMyProductDelete(product));
  }
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
        <button
          className={styles.buttonOut}
          onClick={() => {
            handleDelete(elem);
          }}
        >
          Удалить
        </button>
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

import React from "react";
import styles from "../OutModal/OutModal.module.scss";

const OutModal = ({ isActive, handleActive, children }) => {
  return (
    <div className={styles.modal} onClick={handleActive}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default OutModal;

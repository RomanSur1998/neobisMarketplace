import React from "react";
import styles from "../../components/Field/Field.module.scss";

export function getLabel(placeholder, isLabelShow, isPassword) {
  if (!isPassword) {
    return isLabelShow ? (
      <label className={styles.label} htmlFor="name">
        {placeholder}
      </label>
    ) : null;
  }
  return null;
}

import React, { useState } from "react";
import styles from "../Field/Field.module.scss";
import close from "../../assets/icons/is-show-pass.svg";
import open from "../../assets/icons/is-unshow-pass.svg";

const Field = ({ name, type, formik, placeholder }) => {
  const [isShowPass, setIsShowPass] = useState(false);
  const [isLabelShow, setIsLabelShow] = useState(false);

  return (
    <>
      <div>
        <div className={styles.labelContainer}>
          {isLabelShow ? (
            <label className={styles.label} htmlFor="name">
              {placeholder}
            </label>
          ) : null}
        </div>
        <div className={styles.showPass}>
          <input
            className="input field"
            type={isShowPass ? "text" : type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => {
              setIsLabelShow(true);
            }}
          />
          {type === "password" ? (
            isShowPass ? (
              <img
                src={open}
                alt=""
                className={styles.position}
                onClick={() => {
                  setIsShowPass(!isShowPass);
                }}
              />
            ) : (
              <img
                className={styles.position}
                src={close}
                alt=""
                onClick={() => {
                  setIsShowPass(!isShowPass);
                }}
              />
            )
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Field;

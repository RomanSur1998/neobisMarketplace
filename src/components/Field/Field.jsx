import React, { useState } from "react";
import styles from "../Field/Field.module.scss";
import close from "../../assets/icons/is-show-pass.svg";
import open from "../../assets/icons/is-unshow-pass.svg";
import { getLabel } from "../../helpers/fieldHelpers/getLabel";
import { useDispatch, useSelector } from "react-redux";
import { setShowPass } from "../../redux/slices/UserSlice";

const Field = ({ name, type, formik, placeholder, isPassword }) => {
  const [isLabelShow, setIsLabelShow] = useState(false);
  const { isShowPass } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        {getLabel(placeholder, isLabelShow, isPassword)}
        <div className={styles.labelContainer}></div>
        <div className={styles.showPass}>
          <input
            className={!isPassword ? "input field " : "input password"}
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
          {type === "password" && !isPassword ? (
            isShowPass ? (
              <img
                src={open}
                alt=""
                className={styles.position}
                onClick={() => dispatch(setShowPass(!isShowPass))}
              />
            ) : (
              <img
                className={styles.position}
                src={close}
                alt=""
                onClick={() => dispatch(setShowPass(!isShowPass))}
              />
            )
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Field;

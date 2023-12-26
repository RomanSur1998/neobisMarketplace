import React from "react";
import arrow from "../../assets/icons/arrow.svg";
import open from "../../assets/icons/is-show-pass.svg";
import styles from "../Navbar/Navbar.module.scss";
import { useNavigate } from "react-router";

const Navbar = ({ title, path }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.flex}>
      <div className={styles.arrow}>
        <img
          src={arrow}
          alt=""
          onClick={() => {
            navigate(path);
          }}
        />
        <span>Назад</span>
      </div>
      <span>{title} </span>
      <div className={styles.open}>
        <img src={open} alt="" />
      </div>
    </div>
  );
};

export default Navbar;

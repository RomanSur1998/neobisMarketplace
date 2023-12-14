import React from "react";
import mainLogo from "../../assets/icons/main_logo.svg";
import profileIcon from "../../assets/icons/profile-icon.svg";
import styles from "../MainPage/MainPage.module.scss";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <nav className={styles.headers}>
          {" "}
          <img src={mainLogo} alt="" />
          <div className={styles.headersRight}>
            <button className="button purple margin">Подать объявление</button>
            <div className={styles.headersRight}>
              <div className={styles.block}>
                <h3>Roman</h3>
                <h4>roman@gmail.com</h4>
              </div>
              <img
                src={profileIcon}
                alt=""
                onClick={() => navigate("/profile")}
              />
            </div>
          </div>
        </nav>
        <section className={styles.mainContent}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </section>
    </>
  );
};

export default MainPage;

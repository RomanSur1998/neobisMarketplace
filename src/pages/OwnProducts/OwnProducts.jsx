import React from "react";
import ProfileLayouts from "../../layouts/ProfileLayout/ProfileLayouts";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../OwnProducts/OwnProducts.module.scss";
import Card from "../../components/Card/Card";

const OwnProducts = () => {
  return (
    <ProfileLayouts>
      <Navbar title={"Мои товары"} path={"/favorites"} />
      <div className={styles.favoritesContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </ProfileLayouts>
  );
};

export default OwnProducts;

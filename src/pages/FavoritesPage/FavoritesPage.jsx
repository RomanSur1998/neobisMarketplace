import React from "react";
import ProfileLayouts from "../../layouts/ProfileLayout/ProfileLayouts";
import styles from "../FavoritesPage/FavoritesPage.module.scss";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";

const FavoritesPage = () => {
  return (
    <ProfileLayouts>
      <Navbar title={"Понравившиеся"} path={"/profile"} />
      <div className={styles.favoritesContainer}>
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
      </div>
    </ProfileLayouts>
  );
};

export default FavoritesPage;

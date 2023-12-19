import React from "react";
import ProfileLayouts from "../../layouts/ProfileLayout/ProfileLayouts";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../OwnProducts/OwnProducts.module.scss";
import Card from "../../components/Card/Card";
import EditModal from "../../components/EditModal/EditModal";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

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
        {/* <EditModal /> */}
        <DeleteModal />
      </div>
    </ProfileLayouts>
  );
};

export default OwnProducts;

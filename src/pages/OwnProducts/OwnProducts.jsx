import React from "react";
import ProfileLayouts from "../../layouts/ProfileLayout/ProfileLayouts";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../OwnProducts/OwnProducts.module.scss";
import Card from "../../components/Card/Card";

import { useLocation } from "react-router";

const OwnProducts = () => {
  const location = useLocation();

  console.log(location, "params");
  return (
    <ProfileLayouts>
      <Navbar title={"Мои товары"} path={"/favorites"} />
      <div className={styles.favoritesContainer}>
        <Card pathname={"own"} />
        <Card pathname={"own"} />
        <Card pathname={"own"} />
        <Card pathname={"own"} />
        <Card pathname={"own"} />
        {/* <EditModal /> */}
        {/* <DeleteModal /> */}
      </div>
    </ProfileLayouts>
  );
};

export default OwnProducts;

import React from "react";
import ProfileLayouts from "../../layouts/ProfileLayout/ProfileLayouts";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../OwnProducts/OwnProducts.module.scss";
import Card from "../../components/Card/Card";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

const OwnProducts = () => {
  const { myProduct } = useSelector((state) => state.product);

  return (
    <ProfileLayouts>
      <Navbar title={"Мои товары"} path={"/main"} />
      <div className={styles.favoritesContainer}>
        {myProduct?.map((elem) => {
          return <Card pathname={"own"} elem={elem} key={elem.id} />;
        })}
      </div>
    </ProfileLayouts>
  );
};

export default OwnProducts;

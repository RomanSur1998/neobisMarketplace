import React from "react";
import ProfileLayouts from "../../layouts/ProfileLayout/ProfileLayouts";
import styles from "../FavoritesPage/FavoritesPage.module.scss";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";

const FavoritesPage = () => {
  const { favoritesProduct } = useSelector((state) => state.product);
  // console.log("favorites product ", favoritesProduct);
  return (
    <ProfileLayouts>
      <Navbar title={"Понравившиеся"} path={"/profile"} />
      <div className={styles.favoritesContainer}>
        {favoritesProduct?.map((elem) => {
          return <Card elem={elem} key={elem.id} />;
        })}
      </div>
    </ProfileLayouts>
  );
};

export default FavoritesPage;

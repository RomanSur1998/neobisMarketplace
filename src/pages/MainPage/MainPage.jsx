import React from "react";
import mainLogo from "../../assets/icons/main_logo.svg";
import profileIcon from "../../assets/icons/profile-icon.svg";
import styles from "../MainPage/MainPage.module.scss";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router";
import { useState } from "react";
import AddProduct from "../../components/AddProduct/AddProduct";
import { useSelector } from "react-redux";

const MainPage = () => {
  const [isActiveAdd, setIsActiceAdd] = useState(false);
  function handleActiveAddProduct() {
    setIsActiceAdd(!isActiveAdd);
  }
  const navigate = useNavigate();
  const { product } = useSelector((state) => state.product);

  return (
    <>
      <section>
        <nav className={styles.headers}>
          {" "}
          <img src={mainLogo} alt="" />
          <div className={styles.headersRight}>
            <button
              className="button purple margin"
              onClick={handleActiveAddProduct}
            >
              Подать объявление
            </button>
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
          {product
            ? product?.map((elem) => {
                return <Card elem={elem} key={elem.id} />;
              })
            : null}
        </section>
      </section>
      {isActiveAdd ? (
        <AddProduct handleActiveAddProduct={handleActiveAddProduct} />
      ) : null}
    </>
  );
};

export default MainPage;

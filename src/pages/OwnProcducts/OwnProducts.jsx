import React from "react";
import ProfileLayouts from "../../layouts/ProfileLayout/ProfileLayouts";
import Navbar from "../../components/Navbar/Navbar";

const OwnProducts = () => {
  return (
    <ProfileLayouts>
      <Navbar title={"Мои товары"} path={"/favorutes"} />
      <div>OwnProducts</div>;
    </ProfileLayouts>
  );
};

export default OwnProducts;

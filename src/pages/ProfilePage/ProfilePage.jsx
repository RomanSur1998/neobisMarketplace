import React from "react";
import ProfileLayouts from "../../layouts/ProfileLayout/ProfileLayouts";
import Navbar from "../../components/Navbar/Navbar";

const ProfilePage = () => {
  return (
    <ProfileLayouts>
      <Navbar title={"Профиль"} path={"/main"} />
      <div>ProfilePage</div>
    </ProfileLayouts>
  );
};

export default ProfilePage;

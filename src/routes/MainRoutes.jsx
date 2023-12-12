import React from "react";
import RegistrationPage from "../pages/RegistrPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PasswordPage from "../pages/PasswordPage/PasswordPage";
import { Route, Routes } from "react-router";

const MainRoutes = () => {
  const PRIVATE_ROUT_COLLECTION = {};
  const BASE_ROTES_COLLECTION = [
    {
      link: "/",
      element: <LoginPage />,
      id: 1,
    },
    {
      link: "/registr",
      element: <RegistrationPage />,
      id: 2,
    },
    {
      link: "/pass",
      element: <PasswordPage />,
      id: 3,
    },
  ];

  return (
    <Routes>
      {BASE_ROTES_COLLECTION.map((elem) => {
        return <Route path={elem.link} element={elem.element} key={elem.id} />;
      })}
    </Routes>
  );
};

export default MainRoutes;

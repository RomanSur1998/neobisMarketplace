import React from "react";
import RegistrationPage from "../pages/RegistrPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PasswordPage from "../pages/PasswordPage/PasswordPage";
import { Route, Routes } from "react-router";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import OwnProducts from "../pages/OwnProducts/OwnProducts";
import MainPage from "../pages/MainPage/MainPage";

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
    {
      link: "/profile",
      element: <ProfilePage />,
      id: 4,
    },
    {
      link: "/favorites",
      element: <FavoritesPage />,
      id: 5,
    },
    {
      link: "/own",
      element: <OwnProducts />,
      id: 6,
    },
    {
      link: "/main",
      element: <MainPage />,
      id: 7,
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

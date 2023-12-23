import React, { useEffect } from "react";
import RegistrationPage from "../pages/RegistrPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PasswordPage from "../pages/PasswordPage/PasswordPage";
import { Route, Routes } from "react-router";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import OwnProducts from "../pages/OwnProducts/OwnProducts";
import MainPage from "../pages/MainPage/MainPage";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../helpers/getToken";
import { setToken } from "../redux/slices/UserSlice";

const MainRoutes = () => {
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    getToken(dispatch, setToken);
  }, []);
  const PRIVATE_ROUT_COLLECTION = [
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

      {token
        ? PRIVATE_ROUT_COLLECTION.map((elem) => {
            return (
              <Route path={elem.link} element={elem.element} key={elem.id} />
            );
          })
        : null}
    </Routes>
  );
};

export default MainRoutes;

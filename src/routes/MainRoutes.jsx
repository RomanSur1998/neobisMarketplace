import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../helpers/getToken";
import { setToken } from "../redux/slices/UserSlice";
import { PRIVATE_ROUT_COLLECTION } from "../helpers/privateRouters";
import { BASE_ROTES_COLLECTION } from "../helpers/baseRoutes";

const MainRoutes = () => {
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    getToken(dispatch, setToken);
  }, []);

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

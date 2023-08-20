// modules
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
// components
import Header from "../components/Routes/header/Header";
import TopCryptoScreen from "../components/Routes/topCrypto/components/top10crypto";
import PrivateRoute from "../components/privateRoute";
// screens
import MainPageComponent from "../screens/mainPage/MainPage";
import TopCrypto from "../screens/topCrypto/topCrypto";
import Category from "../screens/category/category";
import Search from "../screens/search/search";
import FavoriteScreen from "../screens/favorite/FavoriteScreen";
import SignIn from "../screens/signIn";
import SignUp from "../screens/signUp";
import Profile from "../screens/profile/Profile";
// store
import AuthStore from "../store/auth";
//constants
import { RoutePath } from "../constants/RoutePath";

const RouteScreen = observer(() => {
  const { user, sessionUser, checkUser } = AuthStore;
  const navigate = useNavigate();

  useEffect(() => {
    checkUser().catch((e) => console.warn(e));
  }, [user]);

  return (
    <>
      <Routes>
        <Route
          path={RoutePath.MainPage}
          element={<Header navigate={navigate} user={user || sessionUser} />}
        >
          <Route index element={<MainPageComponent />} />
          <Route path={RoutePath.TopCryptos.Crypto} element={<TopCrypto />}>
            <Route
              path={RoutePath.TopCryptos.Top10Crypto}
              element={<TopCryptoScreen page={10} />}
            />
            <Route
              path={RoutePath.TopCryptos.Top50Crypto}
              element={<TopCryptoScreen page={61} />}
            />
            <Route
              path={RoutePath.TopCryptos.Top100Crypto}
              element={<TopCryptoScreen page={138} />}
            />
          </Route>
          <Route path={RoutePath.Category} element={<Category />} />
          <Route path={RoutePath.Search} element={<Search />} />
          <Route
            path={RoutePath.PrivateRoute.Favorite}
            element={
              <PrivateRoute user={user || sessionUser} navigate={"/signIn"}>
                <FavoriteScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={RoutePath.PrivateRoute.Profile}
            element={
              <PrivateRoute user={user || sessionUser} navigate={"/"}>
                <Profile navigate={navigate} />
              </PrivateRoute>
            }
          />
          <Route
            path={RoutePath.Auth.SignIn}
            element={<SignIn navigate={navigate} />}
          />
          <Route
            path={RoutePath.Auth.SignUp}
            element={<SignUp navigate={navigate} />}
          />
        </Route>
      </Routes>
    </>
  );
});

export default RouteScreen;

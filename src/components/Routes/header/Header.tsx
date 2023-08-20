// modules
import React from "react";
import { Link, Outlet } from "react-router-dom";
// components
import Button from "../../button";
// types
import { HeaderBtnI } from "../../../interface/HeaderBtnInterface";
//assets
import UserIcon from "../../../assets/svg/userIcon";
import Logo from "../../../assets/svg/logo";
// constants
import { HeaderBtn } from "../../../constants/MockData";
// types
import AuthStore from "../../../store/auth";
//styles
import { HeaderStyle } from "./style";
import styles from "./style.module.css";

const Header = (props) => {
  const { navigate, user } = props;
  const login = AuthStore.user?.email.split("@").slice(0, 1).join("");

  return (
    <>
      <HeaderStyle>
        <div className={styles.leftContainer}>
          <div>
            <Link to={"/"}>
              <Logo width={50} height={50} color={"#F2994A"} />
            </Link>
          </div>
          <div className={styles.headerBtnContainer}>
            {HeaderBtn.map((item: HeaderBtnI, index) => {
              return (
                <Link to={item.path} key={index}>
                  <button className={styles.headerBtn}>{item.name}</button>
                </Link>
              );
            })}
          </div>
        </div>
        {user ? (
          <div
            className={styles.registeredBox}
            onClick={() => navigate("profile")}
          >
            <UserIcon className={styles.registeredIcon} />
            <span className={styles.registeredText}>{login}</span>
          </div>
        ) : (
          <div className={styles.signContainer}>
            <Link to={"signIn"}>
              <Button text={"sign in"} />
            </Link>
            <Link to={"signUp"}>
              <Button text={"sign up"} orange />
            </Link>
          </div>
        )}
      </HeaderStyle>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;

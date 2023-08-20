// modules
import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
//styles
import styles from "../../components/Routes/topCrypto/components/style.module.css";
import { TopCryptos } from "../../components/Routes/topCrypto/components/style";
import "../../components/FAQS/DropDown/styles.css";

function TopCrypto() {
  const { pathname } = useLocation();

  return (
    <>
      <TopCryptos>
        <div className={styles.btnNav}>
          <nav>
            <button className={styles.top10Btn}>
              <NavLink
                to={"top10"}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.top10Btn
                }
              >
                top 10
              </NavLink>
            </button>
            <button className={styles.top10Btn}>
              <NavLink
                to={"top50"}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.top10Btn
                }
              >
                top 50
              </NavLink>
            </button>
            <button className={styles.top10Btn}>
              <NavLink
                to={"top100"}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.top10Btn
                }
              >
                top 100
              </NavLink>
            </button>
          </nav>
        </div>
      </TopCryptos>
      <Outlet />
    </>
  );
}
export default TopCrypto;

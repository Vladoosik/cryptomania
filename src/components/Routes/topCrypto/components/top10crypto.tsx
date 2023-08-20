// modules
import React, { useEffect } from "react";
import { observer } from "mobx-react";
// components
import EventsFaqsContainer from "../../../FAQS/events-faqs-container";
// store
import AuthStore from "../../../../store/auth";
import GetAPI from "../../../../store/getAPI";
//types
import { CryptoType } from "../../../../types/CryptoType";
// styles
import { TopCryptos } from "./style";
import styles from "./style.module.css";

const TopCryptoScreen = observer(({ page }) => {
  const {
    topCrypto,
    getCrypto,
    favorites,
    setFavorite,
    getFavoritesFromDatabase,
  } = GetAPI;
  const { user } = AuthStore;

  useEffect(() => {
    getCrypto(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=138&page=1&sparkline=false`
    );
    if (user) {
      getFavoritesFromDatabase();
    }
  }, []);

  const sliced =
    page > 50 && page < 100
      ? topCrypto.slice(10, 61)
      : page > 100
      ? topCrypto.slice(61)
      : page < 11
      ? topCrypto.slice(0, 10)
      : topCrypto;

  return (
    <TopCryptos>
      <div className={styles.cryptoDesc}>
        <span>Name</span>
        <span className={styles.priceDesc}>Current Price</span>
        <span className={styles.pricePercent}>Price change %</span>
      </div>
      <div className={styles.todoContainer}>
        {sliced.map((item: CryptoType, index: number) => {
          return (
            <>
              <div className={styles.infoContainer} key={index}>
                <EventsFaqsContainer
                  favorite={user ? favorites : null}
                  item={item}
                  index={index}
                  onStarClick={() => setFavorite(item)}
                />
              </div>
            </>
          );
        })}
      </div>
    </TopCryptos>
  );
});
export default TopCryptoScreen;

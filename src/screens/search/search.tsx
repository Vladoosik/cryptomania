// modules
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
//store
import GetAPI from "../../store/getAPI";
import AuthStore from "../../store/auth";
// assets
import SearchSvg from "../../assets/svg/searchSvg";
// components
import InfoCard from "../../components/infoCard/infoCard";
// types
import { CryptoType } from "../../types/CryptoType";
// styles
import { Searches } from "./style";
import styles from "./style.module.css";

const Search = observer(() => {
  const {
    topCrypto,
    getCrypto,
    setFavorite,
    favorites,
    getFavoritesFromDatabase,
  } = GetAPI;
  const { user } = AuthStore;
  const [value, setValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    getCrypto(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    if (user) {
      getFavoritesFromDatabase();
    }
  }, []);

  const filteredCrypto = topCrypto.filter((crypto) => {
    return crypto.id.toLowerCase().includes(value.toLowerCase());
  });

  const itemClickHandler = (e) => {
    setValue(e.target.textContent);
    setIsOpen(!isOpen);
  };

  const inputClickHandler = () => {
    setIsOpen(true);
  };

  const handleSetFavorites = async (item) => {
    if (user) {
      setFavorite(item).catch((e) => console.log(e));
    }
  };

  return (
    <Searches>
      <div className={styles.searchContainer}>
        <span className={styles.searchTitle}>Search</span>
        <p className={styles.searchText}>What do you want to found ?</p>
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <input
              type="search"
              className={styles.search}
              placeholder={"search..."}
              onChange={(event) => setValue(event.target.value)}
              value={value}
              onClick={inputClickHandler}
            />
            <SearchSvg
              width={25}
              height={25}
              color={"white"}
              className={styles.searchSvg}
            />
          </div>
          <ul className={styles.autoComplete}>
            {value && isOpen
              ? filteredCrypto.map((result, index) => {
                  return (
                    <li
                      className={styles.searchItem}
                      onClick={itemClickHandler}
                      key={index}
                    >
                      {result.id}
                    </li>
                  );
                })
              : null}
          </ul>
        </form>
      </div>
      {value && !isOpen
        ? filteredCrypto.map((item: CryptoType, index: number) => {
            return (
              <InfoCard
                item={item}
                favorite={favorites}
                key={index}
                onStarPress={() => handleSetFavorites(item)}
              />
            );
          })
        : null}
    </Searches>
  );
});

export default Search;

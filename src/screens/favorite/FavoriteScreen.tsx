// modules
import React, { useEffect } from "react";
import { observer } from "mobx-react";
//components
import Loader from "../../components/loader/Loader";
//styles
import InfoCard from "../../components/infoCard/infoCard";
import styles from "./style.module.css";
//store
import getAPI from "../../store/getAPI";
import AuthStore from "../../store/auth";

import { CryptoType } from "../../types/CryptoType";

const FavoriteScreen = observer(() => {
  const {
    favorites,
    loading,
    dataLoaded,
    getFavoritesFromDatabase,
    setFavorite,
  } = getAPI;

  const { user } = AuthStore;

  useEffect(() => {
    getFavoritesFromDatabase().catch((e) => console.warn(e));
  }, [user]);

  const handleDeleteFavorite = (item) => {
    setFavorite(item);
  };

  return (
    <div className={styles.container}>
      {favorites.length > 0 ? (
        <>
          {favorites.map((item: CryptoType, index) => {
            return (
              <InfoCard
                item={item}
                favorite={favorites}
                key={index}
                onStarPress={() => handleDeleteFavorite(item)}
              />
            );
          })}
        </>
      ) : !loading && dataLoaded ? (
        <div className={styles.listContainer}>
          <span className={styles.emptyText}>Your favorite list is empty</span>
        </div>
      ) : (
        <div className={styles.loaderContainer}>
          <Loader white />
        </div>
      )}
    </div>
  );
});

export default FavoriteScreen;

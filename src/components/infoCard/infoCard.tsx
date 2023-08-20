// modules
import React, { useEffect, useState } from "react";
// types
import { CryptoType } from "../../types/CryptoType";
//styles
import TitleSearch from "../titleSearch/titleSearch";
import styles from "../../screens/search/style.module.css";

interface InfoCardProps {
  item: CryptoType;
  favorite: CryptoType[] | null;
  onStarPress?: () => void;
}

function InfoCard(props: InfoCardProps) {
  const { item, favorite, onStarPress } = props;
  const [included, setIncluded] = useState<boolean>(false);

  const priceChange = Math.floor(item.price_change_percentage_24h * 100) / 100;
  const percentColor = priceChange?.toString().includes("-") ? "red" : "green";
  const athChange = Math.floor(item.ath_change_percentage * 100) / 100;
  const atlChange = Math.floor(item.atl_change_percentage * 100) / 100;
  const atlDate = item.atl_date.slice(0, 10);
  const athDate = item.ath_date.slice(0, 10);

  useEffect(() => {
    const isIncluded = favorite?.some((fav) => fav.id === item.id);
    setIncluded(isIncluded);
  }, [favorite, item.id]);

  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoCard}>
        <TitleSearch
          className={styles.starSvg}
          height={included ? 25 : 20}
          width={included ? 25 : 20}
          color={included ? "yellow" : "white"}
          onclick={onStarPress}
          img={item.image}
          title={item.id}
          symbol={item.symbol}
        />
        <div className={styles.priceCrypto}>
          <p>Cost: </p>
          <p>{item.current_price}$</p>
        </div>
        <div className={styles.priceCrypto}>
          <p>Price Change: </p>
          <p style={{ color: percentColor }}>{priceChange}%</p>
        </div>
        <div className={styles.priceCrypto}>
          <p>ATH: </p>
          <p>{item.ath}$</p>
        </div>
        <div className={styles.priceCrypto}>
          <p>ATH Change: </p>
          <p>{athChange}%</p>
        </div>
        <div className={styles.priceCrypto}>
          <p>ATH Date: </p>
          <p>{athDate}</p>
        </div>
        <div className={styles.priceCrypto}>
          <p>ATl</p>
          <p>{item.atl}</p>
        </div>
        <div className={styles.priceCrypto}>
          <p>ATl Change</p>
          <p>{atlChange}%</p>
        </div>
        <div className={styles.priceCrypto}>
          <p>ATL Date: </p>
          <p>{atlDate}</p>
        </div>
        <div className={styles.supplyCrypto}>
          <p>Supply IRL: </p>
          <p>{item.total_supply}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;

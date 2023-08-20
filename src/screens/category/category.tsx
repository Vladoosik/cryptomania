// modules
import React, { useEffect } from "react";
import { observer } from "mobx-react";
//components
import EventsFaqsContainer from "../../components/FAQS/events-faqs-container";
// store
import GetAPI from "../../store/getAPI";
// styles
import { Categories } from "./style";
import styles from "./style.module.css";

const Category = observer(() => {
  const { categories, getCategories } = GetAPI;

  useEffect(() => {
    getCategories("https://api.coingecko.com/api/v3/coins/categories");
  }, []);

  return (
    <Categories>
      <div className={styles.Categories}>
        <span className={styles.cryptoName}>Name</span>
        <span className={styles.priceDesc}>MarketCap change %</span>
        <span className={styles.pricePercent}>MarketCap price</span>
      </div>
      <div className={styles.contentContainer}>
        {categories.map((item: any, index: number) => {
          return <EventsFaqsContainer index={index} item={item} category />;
        })}
      </div>
    </Categories>
  );
});

export default Category;

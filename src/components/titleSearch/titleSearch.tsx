// modules
import React from "react";
// assets
import StarSvg from "../../assets/svg/starSvg";
// styles
import styles from "../../screens/search/style.module.css";

function TitleSearch(props) {
  const { className, width, height, color, onclick, img, title, symbol } =
    props;

  return (
    <div className={styles.titleContainer}>
      <img src={img} alt="cryptoImg" className={styles.cryptoImg} />
      <span className={styles.cryptoTitle}>{title}</span>
      <span className={styles.cryptoTitle2}>({symbol})</span>
      <div className={styles.starContainer}>
        <StarSvg
          className={className}
          width={width}
          height={height}
          color={color}
          onclick={onclick}
        />
      </div>
    </div>
  );
}
export default TitleSearch;

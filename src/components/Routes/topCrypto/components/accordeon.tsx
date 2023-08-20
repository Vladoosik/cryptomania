// modules
import React from "react";
//styles
import styles from "./style.module.css";
// assets
import StarSvg from "../../../../assets/svg/starSvg";

function Accordion(props) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.accordion}>
        <div className={styles.textContainer}>
          <div>
            <p className={styles.accordionSpan}>{props.allTimeHigh}</p>
          </div>
          <div>
            <p className={styles.accordionInfo}>{props.ath}</p>
          </div>
        </div>
        <div className={styles.textContainer}>
          <div>
            <p className={styles.accordionSpan}>{props.total_Supply}</p>
          </div>
          <div>
            <p className={styles.accordionInfo}>{props.totalSupply}</p>
          </div>
        </div>
        <div className={styles.textContainer}>
          <div>
            <p className={styles.accordionSpan}>{props.total_Volume}</p>
          </div>
          <div className={styles.accContainer}>
            <p className={styles.accordionInfo}>{props.totalVolume}</p>
          </div>
        </div>
        <div className={styles.textContainer}>
          <div>
            <p className={styles.accordionSpan}>{props.athChangePercentage}</p>
          </div>
          <div>
            <p className={styles.accordionInfo}>{props.athChange}</p>
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.contentName}>{props.nameContent}</p>
        <p className={styles.contentText}>{props.content}</p>
        {props.favorite && (
          <div className={styles.favorite}>
            <span className={styles.favoriteText}>
              {props.active ? "remove from favorite" : "add to favorite"}
            </span>
            <StarSvg
              className={styles.star}
              width={props.active ? 30 : 25}
              height={props.active ? 30 : 25}
              onclick={props.onClick}
              color={props.active ? "yellow" : "white"}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;

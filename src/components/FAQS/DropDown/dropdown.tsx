// modules
import React, { memo, useState } from "react";
import { CSSTransition } from "react-transition-group";
// components
import Flex from "../StyledComponents/dropDownStyles";
import Accordion from "../../Routes/topCrypto/components/accordeon";
// style
import styles from "../../../components/Routes/topCrypto/components/style.module.css";
import "./styles.css";

function DropDown(props) {
  const {
    active,
    onClick,
    nameContent,
    content,
    athChangePercentage,
    total_Volume,
    total_Supply,
    allTimeHigh,
    priseSymbol,
    currentSymbol,
    ath,
    athChange,
    title,
    index,
    crypto,
    cryptoChange,
    cryptoImg,
    marketCupRank,
    totalSupply,
    totalVolume,
    favorite,
    category,
  } = props;
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Flex className="dd-wrapper" index={index} open={open}>
      <div className="dd-header" onClick={toggle} role="button" tabIndex={0}>
        <div className={styles.cryptoCard}>
          <div className={styles.nameContainer}>
            <span className={styles.cryptoNum}>{marketCupRank}</span>
            <img src={cryptoImg} alt="pics" className={styles.cryptoImg} />
            <span className={styles.cryptoName}>{title}</span>
          </div>
          <div className={styles.priceContainer}>
            <span className={styles.cryptoPrice}>
              {crypto} {priseSymbol}
            </span>
          </div>
          <div className={styles.changeContainer}>
            <span className={styles.cryptoChange}>
              {cryptoChange} {currentSymbol}
            </span>
          </div>
        </div>
      </div>
      {content !== null && category ? (
        <CSSTransition
          in={open}
          timeout={400}
          classNames={{
            enterActive: "dropdown-show",
            exitActive: "dropdown-done",
          }}
          mountOnEnter
          unmountOnExit
        >
          <Accordion content={content} nameContent={nameContent} />
        </CSSTransition>
      ) : (
        !category && (
          <CSSTransition
            in={open}
            timeout={400}
            classNames={{
              enterActive: "dropdown-show",
              exitActive: "dropdown-done",
            }}
            mountOnEnter
            unmountOnExit
          >
            <Accordion
              favorite={favorite}
              active={active}
              onClick={onClick}
              total_Supply={total_Supply}
              allTimeHigh={allTimeHigh}
              ath={ath}
              totalSupply={totalSupply}
              athChange={athChange}
              totalVolume={totalVolume}
              total_Volume={total_Volume}
              athChangePercentage={athChangePercentage}
              content={content}
            />
          </CSSTransition>
        )
      )}
    </Flex>
  );
}

export default memo(DropDown);

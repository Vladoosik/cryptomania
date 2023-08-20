// modules
import React from "react";
//constants
import { MainText, MainTitle } from "../../constants/MockData";
//components
import Cover from "../../components/cover/cover";
//assets
import MainRunner from "../../assets/svg/MainRunner";
import MobxSvg from "../../assets/svg/mobxSvg";
import ReactSvg from "../../assets/svg/reactSvg";
import GithubSvg from "../../assets/svg/githubSvg";
import TypescriptSvg from "../../assets/svg/typescriptSvg";
import EthereumSvg from "../../assets/svg/etheriumSvg";
//styles
import "./style";
import { MainPage } from "./style";
import styles from "./style.module.css";

function MainPageComponent() {
  return (
    <MainPage>
      <div className={styles.mainContent}>
        <div className={styles.mainDesc}>
          <div className={styles.textContainer}>
            <span className={styles.mainTitle}>{MainTitle}</span>
            <p className={styles.mainText}>{MainText}</p>
          </div>
          <div className={styles.mainBtn}>
            <button className={styles.learnBtn}>learn More</button>
            <button className={styles.demoBtn}>Demo</button>
          </div>
        </div>
        <div className={styles.runnerContainer}>
          <MainRunner />
        </div>
      </div>
      <div className={styles.mainClients}>
        <MobxSvg width={150} height={100} color={"gray"} />
        <ReactSvg width={150} height={100} color={"gray"} />
        <GithubSvg width={150} height={100} color={"gray"} />
        <TypescriptSvg width={150} height={100} color={"gray"} />
        <EthereumSvg width={200} height={100} color={"gray"} />
      </div>
      <Cover />
    </MainPage>
  );
}

export default MainPageComponent;

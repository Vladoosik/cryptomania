//modules
import React from "react";
//styles
import styles from "./styles.module.css";

interface BtnProps {
  text: string;
  orange?: boolean;
  onClick?: () => void;
}
const Button = (props: BtnProps) => {
  const { text, orange, onClick } = props;
  return (
    <button
      className={orange ? styles.orangeBtn : styles.transparentBtn}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

// modules
import React from "react";
//styles
import "./style.css";

const Loader = (props) => {
  const { white } = props;
  return white ? (
    <div className="whiteLoader" />
  ) : (
    <div className="lds-dual-ring" />
  );
};

export default Loader;

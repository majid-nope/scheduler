import React from "react";
import style from "./Landing.module.scss";

const Landing = ({ children }) => {
  return <div className={style.home}>{children}</div>;
};

export default Landing;

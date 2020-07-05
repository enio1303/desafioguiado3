import React from "react";
import css from "./card.module.css";

export default function Card({children}) {
  const classes = `card ${css.card}`
  return <div className={classes}>{children}</div>;
}

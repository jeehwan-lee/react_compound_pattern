import React from "react";
import styles from "./Card.module.css";

export const CardHeaderPrice = ({ price }) => {
  return <div class={styles.headerPrice}>{price}원</div>;
};

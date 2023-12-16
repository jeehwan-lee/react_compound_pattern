import React from "react";
import styles from "./Card.module.css";

export const CardButton = ({ soldOut }) => {
  if (soldOut === "N") {
    return <button class={styles.button}>Add to Cart</button>;
  } else {
    return <button class={styles.button}>Sold Out</button>;
  }
};

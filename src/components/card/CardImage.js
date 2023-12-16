import React from "react";
import styles from "./Card.module.css";

export const CardImage = ({ url }) => {
  return (
    <div class={styles.imgContainer}>
      <img src={url} class={styles.img} alt="" />
    </div>
  );
};

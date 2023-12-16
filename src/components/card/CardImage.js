import React from "react";
import styles from "./Card.module.css";

export const CardImage = () => {
  return (
    <div class={styles.imgContainer}>
      <img src="/img/americano.png" class={styles.img} alt="" />
    </div>
  );
};

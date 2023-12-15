import React from "react";
import styles from "./Card.module.css";

const CardContainer = ({ children }) => {
  return <div class={styles.container}>{children}</div>;
};

const CardImage = () => {
  return (
    <div class={styles.imgContainer}>
      <img src="/img/americano.png" class={styles.img} />
    </div>
  );
};

const CardHeader = ({ children }) => {
  return <div class={styles.header}>{children}</div>;
};

const CardHeaderTitle = () => {
  return <div class={styles.headerTitle}>Americano</div>;
};

const CardHeaderPrice = () => {
  return <div class={styles.headerPrice}>3000원</div>;
};

export const Card = Object.assign(CardContainer, {
  Image: CardImage,
  Header: CardHeader,
  HeaderTitle: CardHeaderTitle,
  headerPrice: CardHeaderPrice,
});

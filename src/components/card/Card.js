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

const CardContent = () => {
  return (
    <div class={styles.content}>
      이곳은 커피에 대한 정보를 담는곳으로 아주 긴 문장이 올 수도 있고
      그렇습니다. 기네요
    </div>
  );
};

const CardFooter = ({ children }) => {
  return <div class={styles.footer}>{children}</div>;
};

const CardButton = () => {
  return <button class={styles.button}>Add to Cart</button>;
};

export const Card = Object.assign(CardContainer, {
  Image: CardImage,
  Header: CardHeader,
  HeaderTitle: CardHeaderTitle,
  HeaderPrice: CardHeaderPrice,
  Content: CardContent,
  Footer: CardFooter,
  Button: CardButton,
});

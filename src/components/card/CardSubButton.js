import React from "react";
import styles from "./Card.module.css";

export const CardSubButton = ({ content }) => {
  const handleClick = () => {
    if (content.soldOut === "N") {
      alert("장바구니에 추가되었습니다.");
    } else {
      alert("품절된 상품입니다.");
    }
  };
  return (
    <div class={styles.subButton}>
      <div>{content.name}</div>
      <div onClick={handleClick}>
        {content.soldOut === "N" ? content.price + "원" : "Sold Out"}
      </div>
    </div>
  );
};

import React from "react";
import styles from "./Card.module.css";

export const CardButton = ({ soldOut }) => {
  const handleClick = () => {
    if (soldOut === "N") {
      alert("장바구니에 추가되었습니다");
    } else {
      alert("품절된 상품입니다.");
    }
  };

  return (
    <>
      <button class={styles.button} onClick={handleClick}>
        {soldOut === "Y" ? "Sold Out" : "Add To Cart"}
      </button>
    </>
  );
};

import React, { useEffect, useRef } from "react";
import styles from "./Card.module.css";

export const CardSubButton = ({ content, setOpenSubContent }) => {
  const handleClick = () => {
    if (content.soldOut === "N") {
      alert("장바구니에 추가되었습니다.");
    } else {
      alert("품절된 상품입니다.");
    }
    setOpenSubContent(false);
  };

  return (
    <div class={styles.subButton} onClick={handleClick}>
      <div>{content.name}</div>
      <div>{content.soldOut === "Y" ? "Sold Out" : content.price + "원"}</div>
    </div>
  );
};

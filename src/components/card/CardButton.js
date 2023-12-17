import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";

export const CardButton = ({ soldOut, render }) => {
  const [openSubContent, setOpenSubContent] = useState(false);

  const handleClick = () => {
    if (!soldOut) {
      // subContent(HOT,COLD) 데이터가 있을 경우 : soldOut = null
      setOpenSubContent(!openSubContent);
      return;
    }

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
      {openSubContent && render(setOpenSubContent)}
    </>
  );
};

import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";

export const CardButton = ({ soldOut, render }) => {
  const [openSubContent, setOpenSubContent] = useState(false);

  const handleClick = () => {
    setOpenSubContent(!openSubContent);
  };

  return (
    <>
      <button class={styles.button} onClick={handleClick}>
        {soldOut === "N" ? "Add To Cart" : "Sold Out"}
      </button>
      {openSubContent && render()}
    </>
  );
};

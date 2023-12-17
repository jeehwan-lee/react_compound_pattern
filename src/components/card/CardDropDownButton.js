import React, { useEffect, useRef, useState } from "react";
import styles from "./Card.module.css";

export const CardDropDownButton = ({ render }) => {
  const [openSubContent, setOpenSubContent] = useState(false);

  const handleClick = () => {
    setOpenSubContent(!openSubContent);
    return;
  };

  return (
    <>
      <button class={styles.button} onClick={handleClick}>
        Hot or Cold?
      </button>
      {openSubContent && render(setOpenSubContent)}
    </>
  );
};

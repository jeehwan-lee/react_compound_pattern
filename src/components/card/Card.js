import React from "react";
import styles from "./Card.module.css";
import { CardImage } from "./CardImage";
import { CardHeader } from "./CardHeader";
import { CardHeaderTitle } from "./CardHeaderTitle";
import { CardContent } from "./CardContent";
import { CardFooter } from "./CardFooter";
import { CardButton } from "./CardButton";
import { CardSubContent } from "./CardSubContent";
import { CardHeaderPrice } from "./CardHeaderPrice";
import { CardSubButton } from "./CardSubButton";

const CardContainer = ({ children }) => {
  return <div class={styles.container}>{children}</div>;
};

export const Card = Object.assign(CardContainer, {
  Image: CardImage,
  Header: CardHeader,
  HeaderTitle: CardHeaderTitle,
  HeaderPrice: CardHeaderPrice,
  Content: CardContent,
  Footer: CardFooter,
  Button: CardButton,
  SubContent: CardSubContent,
  SubButton: CardSubButton,
});

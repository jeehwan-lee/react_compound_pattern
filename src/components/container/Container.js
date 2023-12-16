import React from "react";
import styles from "./Container.module.css";
import { ContainerHeader } from "./ContainerHeader";
import { Containerbody } from "./ContainerBody";

const ContainerMain = ({ children }) => {
  return <div class={styles.container}>{children}</div>;
};

export const Container = Object.assign(ContainerMain, {
  Header: ContainerHeader,
  Body: Containerbody,
});

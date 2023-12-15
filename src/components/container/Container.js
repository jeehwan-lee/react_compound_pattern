import React from "react";
import "./Container.css";

const ContainerMain = ({ children }) => {
  return <div class="container">{children}</div>;
};

const ContainerHeader = () => {
  return <div class="header">Coffee</div>;
};

const Containerbody = () => {
  return (
    <div class="body">
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </div>
  );
};

export const Container = Object.assign(ContainerMain, {
  header: ContainerHeader,
  body: Containerbody,
});

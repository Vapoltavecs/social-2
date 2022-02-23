import React, { FC } from "react";
import classes from "./style.module.scss";

interface ICard {
  width?: string;
  height?: string;
  padding?: string;
}

const Card: FC<ICard> = ({ width, height, padding, children }) => {
  return (
    <div style={{ width, height, padding }} className={classes.card}>
      {children}
    </div>
  );
};

export { Card };

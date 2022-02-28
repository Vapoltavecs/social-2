import React, { FC } from "react";
import classes from './style.module.scss'

const Container: FC = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export { Container };

import React, { FC } from "react";
import { IComment } from "../../../models/Comment";
import User from "../user";
import classes from "./style.module.scss";

const Comment: FC<IComment> = ({ title, owner, date }) => {
  return (
    <div className={classes.comment}>
      <div className={classes.comment__text}>{title}</div>
      <div className={classes.comment__user}>
        <User {...owner} />
      </div>
    </div>
  );
};

export { Comment };

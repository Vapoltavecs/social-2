import React, { FC } from "react";
import { IComment } from "../../../models/Comment";
import Comment from "../../simple/comment";
import classes from "./style.module.scss";
interface IComments {
  comments: IComment[];
}

const Comments: FC<IComments> = ({ comments }) => {
  return (
    <div className={classes.comments}>
      {comments.map((el) => (
        <Comment {...el} key={el.id} />
      ))}
    </div>
  );
};

export { Comments };

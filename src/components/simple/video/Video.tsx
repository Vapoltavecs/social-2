import React from "react";
import { IVideo } from "../../../models/VideoModels";
import Card from "../card";
import classes from "./style.module.scss";

const Video = ({
  owner,
  description,
  likes,
  dislikes,
  link,
  id,
}: IVideo) => {
  return (
    <Card padding="0px 0px">
      <div className={classes.card}>
        <img src={link} alt="video" className={classes.card__image} />
        <div className={classes.card__content}>
          <div className={classes.card__header}>
            <div className={classes.card__title}>{description.substring(0, 100)}...</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export { Video };

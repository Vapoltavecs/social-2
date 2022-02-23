import React from "react";
import { NavLink } from "react-router-dom";
import { IVideo } from "../../../models/VideoModels";
import Card from "../card";
import classes from "./style.module.scss";

const Video = ({
  owner,
  description,
  created_at,
  likes,
  dislikes,
  comments,
  video,
  id,
}: IVideo) => {
  return (
    <Card padding="0px 0px">
      <NavLink to={`/video/${id}`} className={classes.card__link}>
        <div className={classes.card}>
          <img src={video} alt="video" className={classes.card__image} />
          <div className={classes.card__content}>
            <div className={classes.card__header}>
              <div className={classes.card__title}>{description}</div>
              <div className={classes.card__raiting}>
                <div className={classes.card__raiting_item}>likes: {likes}</div>
                <div className={classes.card__raiting_item}>
                  dislikes: {dislikes}
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </Card>
  );
};

export { Video };

import React, { FC } from "react";
import { IVideo } from "../../../models/VideoModels";
import User from "../../simple/user";
import Comments from "../comments";
import classes from "./style.module.scss";
import like from "../../../assets/images/icons/like.png";

interface IVideoProp {
  video?: IVideo;
}

const VideoDetail: FC<IVideoProp> = ({ video }) => {
  return video ? (
    <div className={classes.video}>
      <div className={classes.video__container}>
        <img src={video.link} alt="preview" className={classes.video__image} />
        <div className={classes.video__content}>
          <div className={classes.video__content_header}>
            <div className={classes.video__title}>{video.description}</div>
            <div className={classes.video__raiting}>
              <div className={classes.video__raiting_item}>
                <img
                  src={like}
                  alt="like"
                  className={classes.video__raiting_img}
                />
                {video.likes}
              </div>
              <div className={classes.video__raiting_item}>
                <img
                  src={like}
                  alt="dislike"
                  className={classes.video__raiting_img}
                  style={{ transform: "rotate(180deg)" }}
                />
                {video.dislikes}
              </div>
            </div>
          </div>
          <div className={classes.video__author}>
            {<User {...video.owner} />}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>"video not found...."</div>
  );
};

export { VideoDetail };

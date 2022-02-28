import React from "react";
import { IVideo } from "../../../models/VideoModels";
import Video from "../../simple/video";
import Container from "../../ui/container";
import classes from "./style.module.scss";

interface Props {
  videos: IVideo[];
}

const Videos = ({ videos }: Props) => {
  return (
    <Container>
      {videos.length > 0 ? (
        <div className={classes.videos}>
          {videos.map((el) => (
            <Video {...el} key={el.id} />
          ))}
        </div>
      ) : (
        <div>Посты не найдены</div>
      
      )}
    </Container>
  );
};

export { Videos };

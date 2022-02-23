import React from "react";
import { useParams } from "react-router-dom";
import Video from "../../containers/video";
import VideoService from "../../services/VideoService";

const VideoDetail = () => {
  const videoId = useParams();

  const getVideo = async () => VideoService.getVideo(parseInt(videoId.id!));

  return <Video getVideo={getVideo} />;
};

export { VideoDetail };

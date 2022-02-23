import { AxiosResponse } from "axios";
import React, { FC, useState, useEffect } from "react";
import VideoDetail from "../../components/ordinary/VideoDetail";
import Spinner from "../../components/simple/spinner";
import { IVideo } from "../../models/VideoModels";

interface IVideoProp {
  getVideo: () => Promise<AxiosResponse<IVideo>>;
}

const Video: FC<IVideoProp> = ({ getVideo }) => {
  const [video, setVideo] = useState<IVideo>();
  const [isLoading, setloading] = useState(false);
  useEffect(() => {
    const getVideoData = async () => {
      setloading(true);
      try {
        const videoData = await getVideo();
        setVideo(videoData.data);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };
    getVideoData();
  }, []);

 

  return isLoading ? <Spinner /> : <VideoDetail video={video} />;
};

export { Video };

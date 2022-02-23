import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import Videos from "../../components/ordinary/videos";
import Spinner from "../../components/simple/spinner";
import { IVideo } from "../../models/VideoModels";

interface IProps {
  getVideos: () => Promise<AxiosResponse<IVideo[]>>;
}

const Tape = ({ getVideos }: IProps) => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [isLoading, setLoading] = useState<boolean>();
  useEffect(() => {
    setLoading(true);
    const getAllVideos = async () => {
      try {
        const videos = await getVideos();
        setVideos(videos.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getAllVideos();
    
  }, [getVideos]);


  return isLoading ? <Spinner /> : <Videos videos={videos!} />;
};

export { Tape };

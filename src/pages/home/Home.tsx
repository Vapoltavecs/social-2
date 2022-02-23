import React from "react";
import Tape from "../../containers/Tape";
import VideosService from "../../services/VideosService";

const Home = () => {
  const getVideos = async () => VideosService.getVideos();
  return (
    <div>
      <Tape getVideos={getVideos}/>
    </div>
  );
};

export { Home };

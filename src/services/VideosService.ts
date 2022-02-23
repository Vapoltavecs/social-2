import { IVideo } from "./../models/VideoModels";
import { AxiosResponse } from "axios";
import { $api } from "../api";

class VideosService {
   async getVideos(): Promise<AxiosResponse<IVideo[]>> {
    return $api.get<IVideo[]>("/api/posts");
  }
}

export default new VideosService();

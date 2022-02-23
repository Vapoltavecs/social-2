import { IVideo } from "./../models/VideoModels";
import { AxiosResponse } from "axios";
import { $api } from "../api";

class VideoService {
  async getVideo(id: number): Promise<AxiosResponse<IVideo>> {
    return $api.get(`/api/video/${id}`);
  }
}

export default new VideoService();

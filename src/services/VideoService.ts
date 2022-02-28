import { IForm } from './../containers/createPost/createPost';
import { IVideo } from "./../models/VideoModels";
import { AxiosResponse } from "axios";
import { $api } from "../api";

class VideoService {
  async getVideo(id: number): Promise<AxiosResponse<IVideo>> {
    return $api.get(`/api/video/${id}`);
  }
  async createPost(data: IForm): Promise<void> {
    return $api.post("/api/videos/create/", data);
  }
}

export default new VideoService();

import { IUser } from "./../models/User";
import { AxiosResponse } from "axios";
import { $api } from "../api";

class FollowServise {
  async getFollows(): Promise<AxiosResponse<IUser[]>> {
    return $api.get("/users/");
  }
}

export default new FollowServise();

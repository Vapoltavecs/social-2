import { IUser } from "./../models/User";
import { AxiosResponse } from "axios";
import { $api } from "../api";

export interface IFollows {
  followers: IUser[]
}

class FollowServise {
  async getFollows(): Promise<AxiosResponse<IFollows>> {
    return $api.get("api/user/follows/");
  }
}

export default new FollowServise();

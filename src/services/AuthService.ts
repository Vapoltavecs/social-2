import { IToken } from "./../models/AuthModels";
import { AxiosResponse } from "axios";
import { $api } from "../api";

class AuthServise {
  async login(email: string, password: string): Promise<AxiosResponse<IToken>> {
    return $api.post<IToken>("/api/user/token-create/", { email, password });
  }
  async reigstration(
    email: string,
    password: string
  ): Promise<AxiosResponse<IToken>> {
    return $api.post<IToken>("/api/auth/users/", { username: email, password, email });
  }
}

export default new AuthServise();

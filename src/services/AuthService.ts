import { IToken } from "./../models/AuthModels";
import { AxiosResponse } from "axios";
import { $api } from "../api";

class AuthServise {
  async login(email: string, password: string): Promise<AxiosResponse<IToken>> {
    return $api.post<IToken>("/api/auth/authorization", { email, password });
  }
  async reigstration(
    email: string,
    password: string
  ): Promise<AxiosResponse<IToken>> {
    return $api.post<IToken>("/api/auth/registration", { email, password });
  }
}

export default new AuthServise();

import { IUser } from "./User";
export interface IComment {
  id: number;
  video: string;
  title: string;
  date: Date;
  owner: IUser;
}

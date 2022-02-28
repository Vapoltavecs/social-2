import { IComment } from "./Comment";
import { IUser } from "./User";
export interface IVideo {
  id: number;
  description: string;

  owner: IUser;
  likes: number;
  dislikes: number;

  link: string;
}

import { IComment } from "./Comment";
import { IUser } from "./User";
export interface IVideo {
  id: number;
  description: string;
  created_at: Date;
  owner: IUser;
  likes: number;
  dislikes: number;
  comments: IComment[];
  video: string
}

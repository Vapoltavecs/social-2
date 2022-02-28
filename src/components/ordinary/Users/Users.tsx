import { FC } from "react";
import { IUser } from "../../../models/User";
import User from "../../simple/user";
import classes from "./style.module.scss";

interface IUsers {
  users: IUser[];
}

const Users: FC<IUsers> = ({ users }) => {
  return users.length > 0 ? (
    <>
      {users.map((el) => (
        <div className={classes.user}>
          <User {...el} key={el.id} />
        </div>
      ))}
    </>
  ) : (
    <div className={classes.empty}>Пользователей не найдено</div>
  );
};

export { Users };

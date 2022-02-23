import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IUser } from "../../../models/User";
import classes from "./style.module.scss";

const User: FC<IUser> = ({ user_id, username, avatar }) => {
  return (
    <NavLink to={`/user/${user_id}`} className={classes.user__link}>
      <div className={classes.user}>
        <img className={classes.user__avatar} alt="avatar" src={avatar} />
        <div className={classes.user__name}>{username}</div>
      </div>
    </NavLink>
  );
};

export { User };

import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IUser } from "../../../models/User";
import classes from "./style.module.scss";

const User: FC<IUser> = ({ id, username, avatar }) => {
  return (
    <NavLink to={`/user/${id}`} className={classes.user__link}>
      <div className={classes.user}>
        <img
          className={classes.user__avatar}
          alt="avatar"
          src={
            avatar ??
            "https://st3.depositphotos.com/26729766/33190/v/600/depositphotos_331909046-stock-illustration-user-icon-avatar-men-contact.jpg"
          }
        />
        <div className={classes.user__name}>{username}</div>
      </div>
    </NavLink>
  );
};

export { User };

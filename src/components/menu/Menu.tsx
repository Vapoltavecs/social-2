import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./style.module.scss";
import logo from "../../assets/images/logo.svg";
import FollowsServise from "../../services/FollowsServise";
import Users from "../../containers/Users";

const Menu = () => {
  const getUsers = async () => FollowsServise.getFollows();
  return (
    <div className={classes.menu}>
      <img src={logo} alt="logo" className={classes.menu__logo} />
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? `${classes.active} ${classes.menu__item}`
            : classes.menu__item
        }
      >
        Главная
      </NavLink>
      <NavLink
        to={"/follows"}
        className={({ isActive }) =>
          isActive
            ? `${classes.active} ${classes.menu__item}`
            : classes.menu__item
        }
      >
        Подписки
      </NavLink>
      <NavLink
        to={"/auth/registration"}
        className={({ isActive }) =>
          isActive
            ? `${classes.active} ${classes.menu__item}`
            : classes.menu__item
        }
      >
        Зарегестрироваться
      </NavLink>
      <NavLink
        to={"/auth/authorization"}
        className={({ isActive }) =>
          isActive
            ? `${classes.active} ${classes.menu__item}`
            : classes.menu__item
        }
      >
        Авторизоваться
      </NavLink>
      <div className={classes.menu__users}>
        <div className={classes.menu__users_title}>Ваши подписки:</div>
        <div className={classes.menu__users_users}>
          <Users getUsers={getUsers} />
        </div>
      </div>
    </div>
  );
};

export { Menu };

import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./style.module.scss";
import logo from "../../assets/images/logo.svg";

const Menu = () => {
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className={classes.menu}>
      <NavLink to={"/"}>
        <img src={logo} alt="logo" className={classes.menu__logo} />
      </NavLink>
      <nav className={classes.menu__nav}>
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

        {localStorage.getItem("token") ? (
          <>
            <NavLink
              to={"/follows"}
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes.menu__item}`
                  : classes.menu__item
              }
            >
              Подписчики
            </NavLink>
            <NavLink
              to={"/post/create"}
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes.menu__item}`
                  : classes.menu__item
              }
            >
              Создать пост
            </NavLink>
            <NavLink to={"/"} className={classes.menu__item} onClick={logOut}>
              Выйти
            </NavLink>
          </>
        ) : (
          <>
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
          </>
        )}
      </nav>
    </div>
  );
};

export { Menu };

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../components/menu";
import AuthorizationPage from "../pages/Authorization";
import Home from "../pages/home";
import RegistrationPage from "../pages/Registration";
import VideoDetail from "../pages/videoDetail";
import classes from "./style.module.scss";

const RoutesComponent = () => {
  return (
    <div className={classes.routes}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<VideoDetail />} path="/video/:id" />
          <Route element={<AuthorizationPage />} path="/auth/authorization" />
          <Route element={<RegistrationPage />} path="/auth/registration" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { RoutesComponent };

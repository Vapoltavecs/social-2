import React from "react";

import classes from "./style.module.scss";
import FormContainer from "../../containers/Form";
import AuthService from "../../services/AuthService";
import { IFormData } from "../../containers/Form/Form";
import { useNavigate } from "react-router-dom";

const AuthorizationPage = () => {
  const navigate = useNavigate()
  const onSubmit = async (data: IFormData) => {
    try {
      const token = await AuthService.login(data.email, data.password);
      localStorage.setItem("token", token.data.token);
      navigate('/')
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.form}>
      <FormContainer title="Авторизация" sendData={onSubmit} />
    </div>
  );
};

export { AuthorizationPage };

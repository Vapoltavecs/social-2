import React from "react";

import classes from "./style.module.scss";
import FormContainer from "../../containers/Form";
import AuthService from "../../services/AuthService";
import { IFormData } from "../../containers/Form/Form";

const AuthorizationPage = () => {
  const onSubmit = async (data: IFormData) => {
    try {
      const token = await AuthService.login(data.email, data.password);
      localStorage.setItem("token", token.data.token);
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

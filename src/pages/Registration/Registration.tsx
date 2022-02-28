import React from "react";

import classes from "./style.module.scss";
import FormContainer from "../../containers/Form";
import AuthService from "../../services/AuthService";
import { IFormData } from "../../containers/Form/Form";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const onSubmit = async (data: IFormData) => {
    try {
      await AuthService.reigstration(data.email, data.password);
      navigate("/auth/authorization");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.form}>
      <FormContainer title="Регистрация" sendData={onSubmit} />
    </div>
  );
};

export { RegistrationPage };

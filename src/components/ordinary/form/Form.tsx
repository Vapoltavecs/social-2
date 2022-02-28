import React, { FC, FormEvent } from "react";
import { IFormData } from "../../../containers/Form/Form";
import classes from "./style.module.scss";

interface IForm {
  onSubmit: (e: FormEvent) => void;
}

const Form: FC<IForm> = ({ onSubmit, children }) => {
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export { Form };

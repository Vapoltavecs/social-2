import React, { FC, FormEvent } from "react";
import { IFormData } from "../../../containers/Form/Form";
import classes from "./style.module.scss";

interface IForm {
  onSubmit: (e: FormEvent) => void;
  title: string;
  form: IFormData;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Form: FC<IForm> = ({ onSubmit, title, form, onChange }) => {
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <div className={classes.form__title}>{title}</div>
      <input
        type="text"
        name="email"
        className={classes.form__input}
        value={form.email}
        onChange={onChange}
        placeholder="email"
      />
      <input
        type="text"
        name="password"
        className={classes.form__input}
        value={form.password}
        onChange={onChange}
        placeholder="password"
      />
      <button className={classes.form__button}>{title}</button>
    </form>
  );
};

export { Form };

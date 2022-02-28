import React, { FC, FormEvent, useState } from "react";
import FormOrdinary from "../../components/ordinary/form";
import Spinner from "../../components/simple/spinnerSubmit";
import classes from "./style.module.scss";

interface IForm {
  sendData: (data: IFormData) => Promise<void>;
  title: string;
}

export interface IFormData {
  email: string;
  password: string;
}

const Form: FC<IForm> = ({ sendData, title }) => {
  const [form, setForm] = useState<IFormData>({
    email: "",
    password: "",
  });

  const [isLoading, setLoading] = useState<boolean>(false);

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const sendUserData = async () => {
      try {
        setLoading(true);
        await sendData(form);
        setForm({ email: "", password: "" });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    sendUserData();
  };
  return (
    <>
      {isLoading && <Spinner />}
      <FormOrdinary onSubmit={onSubmit}>
        <div className={classes.form}>
          <div className={classes.form__title}>{title}</div>
          <input
            type="text"
            name="email"
            className={classes.form__input}
            value={form.email}
            onChange={onChange}
            placeholder="E-mail"
          />
          <input
            type="text"
            name="password"
            className={classes.form__input}
            value={form.password}
            onChange={onChange}
            placeholder="Password"
          />
          <button className={classes.form__button}>{title}</button>
        </div>
      </FormOrdinary>
    </>
  );
};

export { Form };

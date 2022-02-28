import React, { FC, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/ordinary/form";
import Spinner from "../../components/simple/spinnerSubmit";
import classes from "./style.module.scss";

interface ISubmit {
  sendData: (data: IForm) => Promise<void>;
}

export interface IForm {
  description: string;
  link: string;
}

const CreatePost: FC<ISubmit> = ({ sendData }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<IForm>({
    description: "",
    link: "",
  });
  const navigate = useNavigate()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const submitForm = async () => {
      try {
        setLoading(true)
        await sendData(form);
        navigate('/')
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    submitForm();
  };

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  useEffect(() => {
    return () => setForm({ description: "", link: "" });
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <div className={classes.form__wrap}>
        <Form onSubmit={onSubmit}>
          <div className={classes.form}>
            <div className={classes.form__title}>Создание поста</div>
            <input
              type="text"
              name="description"
              className={classes.form__input}
              value={form.description}
              onChange={onChange}
              placeholder="Описание поста"
              required
            />
            
            <input
              type="text"
              name="link"
              className={classes.form__input}
              value={form.link}
              onChange={onChange}
              placeholder="Ссылка на картинку для поста(обязательно)"
              required
            />
            <button className={classes.form__button}>Создать пост</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export { CreatePost };

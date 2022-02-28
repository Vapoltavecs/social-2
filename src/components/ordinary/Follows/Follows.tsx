import React, { FC } from "react";
import { IUser } from "../../../models/User";
import User from "../../simple/user";
import Container from "../../ui/container";
import classes from "./style.module.scss";

interface IProps {
  follows: IUser[];
}

const Follows: FC<IProps> = ({ follows }) => {
  return (
    <Container>
      {follows.length > 0 ? (
        <div>
          {follows.map((el) => (
            <User {...el} key={el.id} />
          ))}
        </div>
      ) : (
        <div>На вас пока никто не подписан</div>
      )}
    </Container>
  );
};

export { Follows };

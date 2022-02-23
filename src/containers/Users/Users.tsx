import React, { FC, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { IUser } from "../../models/User";
import UsersOrdinary from "../../components/ordinary/Users";
import Spinner from "../../components/simple/spinner";

interface IUsers {
  getUsers: () => Promise<AxiosResponse<IUser[]>>;
}

const Users: FC<IUsers> = ({ getUsers }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getAllUsers = async () => {
      setLoading(true);
      try {
        const users = await getUsers();
        setUsers(users.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getAllUsers();
  }, []);

  

  return isLoading ? <Spinner /> : <UsersOrdinary users={users} />;
};

export { Users };

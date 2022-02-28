import { AxiosResponse } from "axios";
import React, { FC, useEffect, useState } from "react";
import Spinner from "../../components/simple/spinner";
import { IUser } from "../../models/User";
import { IFollows } from "../../services/FollowsServise";
import FollowsOrdinary from '../../components/ordinary/Follows'

interface IProps {
  getFollows: () => Promise<AxiosResponse<IFollows>>;
}

const Follows: FC<IProps> = ({ getFollows }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getFollowsArr = async () => {
      try {
        setLoading(true);
        const users = await getFollows();
        setUsers(users.data.followers);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getFollowsArr();
  }, []);

  

  return isLoading ? <Spinner /> : <FollowsOrdinary follows={users} />;
};


export {Follows}
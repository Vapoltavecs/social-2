import React from "react";
import CreatePostContainer from "../../containers/createPost";
import { IForm } from "../../containers/createPost/createPost";
import VideoService from "../../services/VideoService";

const CreatePost = () => {
  const onSubmit = (data: IForm) => VideoService.createPost(data);
  return <CreatePostContainer sendData={onSubmit} />;
};

export { CreatePost };

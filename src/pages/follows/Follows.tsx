import React from "react";
import FollowsContainer from "../../containers/follows";
import FollowsServise from "../../services/FollowsServise";

const Follows = () => {
  const getFollows = async () => FollowsServise.getFollows();
  return <FollowsContainer getFollows={getFollows} />;
};

export {Follows}
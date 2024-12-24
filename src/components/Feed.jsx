import React from "react";
import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
const Feed = () => {
  const open = useSelector((store) => store.app.open);
  return (
    <div className={`ml-5 mr-5 ${open ? "w-[80%]" : "w-[90%]"}`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default Feed;

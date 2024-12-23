import React from "react";
import Sidebar from './Sidebar'
import Feed from './Feed'

const Body = () => {
  return (
    <div className="flex mt-20">
      <Sidebar />
      <Feed />
    </div>
  );
};

export default Body;

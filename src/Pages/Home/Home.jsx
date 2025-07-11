import React from "react";
import SideBar from "../SideBar/SideBar";
import Content from "./Content";

const Home = () => {
  return (
    <div className="lg:flex hidden">
      <div>
        <SideBar />
      </div>
      <div className="lg:ml-[300px]">
        <Content />
      </div>
    </div>
  );
};

export default Home;
{
  /*Mp3 audio file */
}

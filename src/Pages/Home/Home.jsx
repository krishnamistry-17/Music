import React from "react";
import SideBar from "../SideBar/SideBar";
import Content from "./Content";
import HomeSideBar from "./HomeSideBar";
import SmallFooter from "../Footer/SmallFooter";
import WeeklyTop from "./WeeklyTop";
import NewRelease from "../Discover/NewRelease";
import PopArtist from "../Discover/PopArtist";
import VideoMusic from "./VideoMusic";
import AlbumsTop from "./AlbumsTop";
import MoodPlay from "../Discover/MoodPlay";
import Billie from "./Billie";

const Home = () => {
  return (
    <div>
      <div className="lg:flex hidden">
        <div>
          <SideBar />
        </div>
        <div className="lg:ml-[300px]">
          <Content />
        </div>
      </div>
      <div className="lg:hidden">
        <div>
          <HomeSideBar />
        </div>
        <div className="pt-[28px] pl-[24px]">
          <WeeklyTop />
        </div>
        <div className="pt-[28px] pl-[24px]">
          <NewRelease />
        </div>
        <div className="pt-[28px] pl-[24px]">
          <PopArtist />
        </div>
        <div className="pt-[28px] pl-[24px]">
          <VideoMusic />
        </div>
        <div className="pt-[28px] ">
          <Billie />
        </div>
        <div className="pt-[28px] pl-[24px]">
          <AlbumsTop />
        </div>
        <div className="pt-[28px] pl-[24px]">
          <MoodPlay />
        </div>
        <div className="sticky bottom-0 z-50">
          <SmallFooter />
        </div>
      </div>
    </div>
  );
};

export default Home;
{
  /*Mp3 audio file */
}

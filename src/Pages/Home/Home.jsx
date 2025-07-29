import React, { useState } from "react";
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
import search from "../../assets/svgs/bsearch.svg";
import Menu from "../SideBar/Menu";
import { useAuth } from "../Context/AuthContext";
import AudioMusic from "./AudioMusic";

const Home = () => {
  const { isLoggedIn, isGoogleLogin } = useAuth();
  return (
    <>
      <div>
        <div className="lg:block hidden">
          <Content />
        </div>
      </div>

      <div className="lg:hidden">
        <div className=" flex justify-between items-center px-4 py-2  sticky top-0 z-50 bg-blackbg">
          <img
            src={search}
            alt="back"
            className=" text-bluearrow w-[35px] h-[35px]"
          />
          <h2 className="text-[32px] font-Vazirmatn-800 text-darkpink">
            Home <span className="text-blue">page</span>
          </h2>
          <div>
            <Menu />
          </div>
        </div>
        <div style={{ height: "calc(100vh - 220px)", scrollbarWidth: "none" }}>
          <div className="pt-[28px] pl-[24px]">
            <WeeklyTop />
          </div>
          <div className="pt-[28px] pl-[24px]">
            <NewRelease />
            {(isLoggedIn || isGoogleLogin) && (
              <div className="fixed bottom-24 left-0 right-0 z-auto   bg-[#252525] rounded-md  border-t border-gray-700 lg:hidden">
                <AudioMusic />
              </div>
            )}
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
          <div className="sticky bottom-0 z-auto">
            <SmallFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
{
  /*Mp3 audio file */
}

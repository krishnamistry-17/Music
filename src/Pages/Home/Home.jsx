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
import { toast } from "react-toastify";
import AudioMusic from "./AudioMusic";
import { useAuth } from "../Context/AuthContext";

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);
  const { isLoggedIn, isGoogleLogin } = useAuth();
  const handleClick = (id) => {
    setSelectedId(id === selectedId ? null : id);
    toast.success("Item selected..");
  };

  return (
    <>
      <div className=" relative ">
        {/*Main */}
        <div className="lg:flex hidden">
          {/* Sidebar (Fixed left) */}
          <div className=" fixed top-0 bottom-0 bg-gray-900 z-40">
            <SideBar
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              handleClick={handleClick}
            />
          </div>

          {/* Content Area */}
          <div className="ml-[300px] w-full pb-[80px]">
            {" "}
            {/* bottom padding for audio bar */}
            <Content
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              handleClick={handleClick}
            />
          </div>
        </div>

        {/* Full-Width Fixed Audio Player */}
        {(isLoggedIn || isGoogleLogin) && (
          <div className="fixed bottom-0 left-0 right-0 h-[80px] bg-[#181818] z-50 border-t border-gray-700 lg:block hidden">
            <AudioMusic />
          </div>
        )}
      </div>
      <div className="lg:hidden">
        <div className="sticky top-0 z-[5000]">
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
    </>
  );
};

export default Home;
{
  /*Mp3 audio file */
}

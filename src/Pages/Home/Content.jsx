import React, { useRef, useState } from "react";
import Bg from "./Bg";
import WeeklyTop from "./WeeklyTop";
import NewRelease from "../Discover/NewRelease";
import PopArtist from "../Discover/PopArtist";
import VideoMusic from "./VideoMusic";
import AlbumsTop from "./AlbumsTop";
import MoodPlay from "../Discover/MoodPlay";
import TrendingSong from "./TrendingSong";
import Platform from "./Platform";

const Content = () => {
  const tabsectionRef = useRef(null);

  const [activeTab, setActiveTab] = useState("signup");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("isLoggedIn :", isLoggedIn);

  const handleSucess = () => {
    setIsLoggedIn(true);
  };

  const scrollToTabs = () => {
    tabsectionRef.current?.scrollIntoView({
      behaviour: "smooth",
      block: "end",
    });
  };

  return (
    <div>
      <div>
        <Bg
          tabsectionRef={tabsectionRef}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          scrollToTabs={scrollToTabs}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      </div>
      <div className="pt-[64px] pl-[44px] pr-[64px]">
        <WeeklyTop />
      </div>
      <div className="pt-[64px] pl-[44px] pr-[64px]">
        <NewRelease />
      </div>
      <div className="pt-[64px] pl-[44px] pr-[64px]">
        <TrendingSong />
      </div>
      <div className="pt-[64px] pl-[44px] pr-[64px]">
        <PopArtist />
      </div>
      <div className="pt-[64px] pl-[44px] pr-[64px]">
        <VideoMusic />
      </div>
      <div className="pt-[64px] pl-[44px] pr-[64px]">
        <AlbumsTop />
      </div>
      <div className="pt-[64px] pl-[44px] pr-[64px]">
        <MoodPlay />
      </div>
      <div className="pt-[64px] pl-[37px] pr-[65px]">
        <Platform
          scrollToTabs={scrollToTabs}
          tabsectionRef={tabsectionRef}
          onLoginSuccess={handleSucess}
        />
      </div>
    </div>
  );
};

export default Content;

import React, { useEffect, useRef, useState } from "react";
import Bg from "./Bg";
import WeeklyTop from "./WeeklyTop";
import NewRelease from "../Discover/NewRelease";
import PopArtist from "../Discover/PopArtist";
import VideoMusic from "./VideoMusic";
import AlbumsTop from "./AlbumsTop";
import MoodPlay from "../Discover/MoodPlay";
import TrendingSong from "./TrendingSong";
import Platform from "./Platform";
import { useAuth } from "../Context/AuthContext";
import SearchList from "../Search/SearchList";
import SearchResults from "../Search/SearchResult";

const Content = () => {
  const tabsectionRef = useRef(null);
  const playRef = useRef(null);
  const songRef = useRef(null);
  const { setIsLoggedIn } = useAuth();

  const [activeTab, setActiveTab] = useState("signup");

  const handleSucess = () => {
    setIsLoggedIn(true);
  };

  const scrollToTabs = () => {
    tabsectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const scrollToBottom = () => {
    playRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const scrollToSongs = () => {
    songRef?.current?.scrollIntoView({
      behavior: "smooth",
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
          scrollToBottom={scrollToBottom}
          scrollToSongs={scrollToSongs}
          playRef={playRef}
          songRef={songRef}
        />
      </div>

      <div className="pt-[64px] pl-[44px] pr-[64px]">
        <WeeklyTop />
      </div>
      <div className="pt-[64px] pl-[44px] pr-[64px]">
        <NewRelease />
      </div>

      <div className="pt-[64px] pl-[44px] pr-[64px]">
        <TrendingSong songRef={songRef} />
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
        <MoodPlay playRef={playRef} />
      </div>
      <div className="pt-[64px] pl-[37px] pr-[65px]">
        <Platform
          scrollToTabs={scrollToTabs}
          tabsectionRef={tabsectionRef}
          onLoginSuccess={handleSucess}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
};

export default Content;

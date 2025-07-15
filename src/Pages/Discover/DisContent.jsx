import React, { useRef, useState } from "react";
import Search from "./Search";
import MusicGeners from "./MusicGeners";
import MoodPlay from "./MoodPlay";
import PopArtist from "./PopArtist";
import MusicVideo from "./MusicVideo";
import NewRelease from "./NewRelease";
import TopAlbums from "./TopAlbums";
import HomeNav from "../Home/HomeNav";

const DisContent = () => {
  const [inputvalue, setInputValue] = useState("");
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
      <div className="pt-[64px] pl-[50px] pr-[89px]">
        <div>
          <HomeNav
            tabsectionRef={tabsectionRef}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            scrollToTabs={scrollToTabs}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        </div>
      </div>
      <div className="pt-[23px] pl-[12px] pr-[64px]">
        <MusicGeners searchQuery={inputvalue} />
      </div>
      <div className="pt-[17px] pl-[34px] pr-[64px]">
        <MoodPlay searchQuery={inputvalue} />
      </div>
      <div className="pt-[17px] pl-[34px] pr-[64px]">
        <PopArtist searchQuery={inputvalue} />
      </div>
      <div className="pt-[17px] pl-[34px] pr-[64px]">
        <MusicVideo searchQuery={inputvalue} />
      </div>
      <div className="pt-[17px] pl-[34px] pr-[64px]">
        <NewRelease searchQuery={inputvalue} />
      </div>
      <div className="pt-[17px] pl-[34px] pr-[64px]">
        <TopAlbums searchQuery={inputvalue} />
      </div>
    </div>
  );
};

export default DisContent;

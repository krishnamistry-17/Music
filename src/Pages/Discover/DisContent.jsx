import React, { useState } from "react";
import Search from "./Search";
import MusicGeners from "./MusicGeners";
import MoodPlay from "./MoodPlay";
import PopArtist from "./PopArtist";
import MusicVideo from "./MusicVideo";
import NewRelease from "./NewRelease";
import TopAlbums from "./TopAlbums";

const DisContent = () => {
  const [inputvalue, setInputValue] = useState("");

  return (
    <div>
      <div className="pt-[64px] pl-[50px] pr-[89px]">
        <Search inputvalue={inputvalue} setInputValue={setInputValue} />
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

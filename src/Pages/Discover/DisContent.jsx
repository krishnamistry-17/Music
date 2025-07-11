import React from "react";
import Search from "./Search";
import MusicGeners from "./MusicGeners";
import MoodPlay from "./MoodPlay";
import PopArtist from "./PopArtist";

const DisContent = () => {
  return (
    <div>
      <div className="pt-[64px] pl-[50px] pr-[89px]">
        <Search />
      </div>
      <div className="pt-[23px] pl-[12px] pr-[64px]">
        <MusicGeners />
      </div>
      <div className="pt-[17px] pl-[34px] pr-[64px]">
        <MoodPlay />
      </div>
      <div className="pt-[17px] pl-[34px] pr-[64px]">
        <PopArtist />
      </div>
    </div>
  );
};

export default DisContent;

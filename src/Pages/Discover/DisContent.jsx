import React, { useRef, useState } from "react";
import Search from "../Search/Search";
import MusicGeners from "./MusicGeners";
import MoodPlay from "./MoodPlay";
import PopArtist from "./PopArtist";
import MusicVideo from "./MusicVideo";
import NewRelease from "./NewRelease";
import TopAlbums from "./TopAlbums";
import HomeNav from "../Home/HomeNav";
import AlbumsTop from "../Home/AlbumsTop";
import VideoMusic from "../Home/VideoMusic";

const DisContent = () => {
  return (
    <div>
      <div className="pt-[23px] pl-[12px] pr-[64px]">
        <MusicGeners />
      </div>
      <div className="pt-[17px] pl-[34px] pr-[64px]">
        <MoodPlay />
      </div>
      <div className="pt-[17px] pl-[34px] pr-[64px]">
        <PopArtist />
      </div>
      <div className="pt-[17px] pl-[34px] pr-[64px]">
        <VideoMusic />
      </div>
      <div className="pt-[17px] pl-[34px] pr-[64px]">
        <NewRelease />
      </div>
      <div className="pt-[17px] pl-[34px] pr-[64px]">
        <AlbumsTop />
      </div>
    </div>
  );
};

export default DisContent;

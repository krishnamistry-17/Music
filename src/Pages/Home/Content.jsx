import React from "react";
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
  return (
    <div>
      <div>
        <Bg />
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
        <Platform />
      </div>
    </div>
  );
};

export default Content;

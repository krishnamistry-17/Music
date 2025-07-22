import React from "react";
import SideBar from "../SideBar/SideBar";
import DisContent from "./DisContent";
import SmallSide from "../SideBar/SmallSide";
import MusicGeners from "./MusicGeners";
import MoodPlay from "./MoodPlay";
import PopArtist from "./PopArtist";
import MusicVideo from "./MusicVideo";
import NewRelease from "./NewRelease";
import TopAlbums from "./TopAlbums";
import SmallFooter from "../Footer/SmallFooter";

const Discover = () => {
  return (
    <div>
      <div className="lg:flex hidden">
        <div>
          <SideBar />
        </div>
        <div>
          <DisContent />
        </div>
      </div>

      <div className="lg:hidden">
        <div className="sticky top-0 z-[5000]">
          <SmallSide />
        </div>
        <div className="pt-[28px] pl-[24px]">
          <MusicGeners />
        </div>
        <div className="pt-[28px] pl-[24px]">
          <MoodPlay />
        </div>
        <div className="pt-[28px] pl-[24px]">
          <NewRelease />
        </div>
        <div className="pt-[28px] pl-[24px]">
          <PopArtist />
        </div>
        <div className="pt-[28px] pl-[24px]">
          <MusicVideo />
        </div>
        <div className="pt-[28px] pl-[24px]">
          <TopAlbums />
        </div>
        <div className="sticky bottom-0 z-50">
          <SmallFooter />
        </div>
      </div>
    </div>
  );
};

export default Discover;

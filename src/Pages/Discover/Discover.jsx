import React from "react";
import SideBar from "../SideBar/SideBar";
import DisContent from "./DisContent";
import SmallSide from "../SideBar/SmallSide";
import MusicGeners from "./MusicGeners";
import MoodPlay from "./MoodPlay";
import PopArtist from "./PopArtist";

const Discover = () => {
  return (
    <div>
      <div className="lg:flex hidden">
        <div>
          <SideBar />
        </div>
        <div className="lg:ml-[300px]">
          <DisContent />
        </div>
      </div>
      <div className="lg:hidden">
        <div>
          <SmallSide />
        </div>
        <div className="pt-[28px] pl-[24px]">
          <MusicGeners />
        </div>
        <div className="pt-[28px] pl-[24px]">
          <MoodPlay />
        </div>
        <div className="pt-[28px] pl-[24px]">
          <PopArtist />
        </div>
      </div>
    </div>
  );
};

export default Discover;

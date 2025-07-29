import React, { useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import DisContent from "./DisContent";
import MusicGeners from "./MusicGeners";
import MoodPlay from "./MoodPlay";
import PopArtist from "./PopArtist";
import MusicVideo from "./MusicVideo";
import NewRelease from "./NewRelease";
import TopAlbums from "./TopAlbums";
import SmallFooter from "../Footer/SmallFooter";
import DisPlay from "./DisPlay";
import { useAuth } from "../Context/AuthContext";
import search from "../../assets/svgs/bsearch.svg";
import Menu from "../SideBar/Menu";

const Discover = () => {
  const { isLoggedIn, isGoogleLogin } = useAuth();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="lg:block hidden">
        <div>
          <DisContent />
        </div>
      </div>

      <div className="lg:hidden">
        <div className=" flex justify-between items-center px-4 py-2 sticky top-0 z-50  bg-blackbg">
          <img
            src={search}
            alt="back"
            className=" text-bluearrow w-[35px] h-[35px]"
          />
          <h2 className="text-[32px] font-Vazirmatn-800 text-darkpink">
            Dis<span className="text-blue">cover</span>
          </h2>
          <div>
            <Menu />
          </div>
        </div>
        <div style={{ height: "calc(100vh - 220px)", scrollbarWidth: "none" }}>
          <div className="pt-[28px] pl-[24px]">
            <MusicGeners />
            {(isLoggedIn || isGoogleLogin) && (
              <div className="fixed bottom-24 left-0 right-0 z-50   bg-[#252525] rounded-md  border-t border-gray-700 lg:hidden">
                <DisPlay />
              </div>
            )}
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
          <div className=" sticky bottom-0 z-auto">
            <SmallFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;

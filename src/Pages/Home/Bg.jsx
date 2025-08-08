import React, { useEffect, useState } from "react";
import homebg from "../../assets/images/homebg.png";
import HomeNav from "./HomeNav";

const Bg = ({
  tabsectionRef,
  activeTab,
  setActiveTab,
  scrollToTabs,
  playRef,
  scrollToBottom,
  signupRef,
  loginRef,
  songRef,
  scrollToSongs,
}) => {
  const handleClick = () => {
    scrollToSongs();
  };

  useEffect(() => {
    window.scroll({ behavior: "smooth", top: 0 });
  }, []);

  return (
    <div>
      <div className=" relative rounded-[25px] xl:pr-[64px] xl:pl-[25px] px-[25px]">
        <img src={homebg} alt="bg" className=" w-full h-[595px]" />
        <div className=" absolute top-[24px] px-[25px] pb-[113px]">
          <div>
            <HomeNav
              tabsectionRef={tabsectionRef}
              loginRef={loginRef}
              signupRef={signupRef}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              scrollToTabs={scrollToTabs}
            />
          </div>
          <div className="pt-[114px]">
            <p className="text-[40px] text-white font-Vazirmatn-800">
              All the <span className="text-darkpink">Best Songs</span>
              <br />
              in One Place
            </p>
            <p className="text-white text-[12px] font-Vazirmatn-300 text-justify w-[332px] pt-[16px]">
              On our website, you can access an amazing collection of popular
              and new songs. Stream your favorite tracks in high quality and
              enjoy without interruptions. Whatever your taste in music, we have
              it all for you!
            </p>
            <div className="pt-[16px] flex gap-[24px] px-[14.5px]">
              <div ref={songRef}>
                <button
                  className="text-white text-[16px] font-Vazirmatn-500 text-center py-[8px] px-[24px] bg-darkpink rounded-[4px]"
                  onClick={handleClick}
                >
                  Discover Now
                </button>
              </div>
              <div ref={playRef}>
                <button
                  onClick={() => scrollToBottom()}
                  className="text-bluearrow text-[16px] font-Vazirmatn-500 text-center py-[8px] px-[24px] rounded-[4px] border-[1px] border-bluearrow"
                >
                  Create Playlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bg;

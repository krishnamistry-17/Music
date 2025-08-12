import React, { useEffect, useState } from "react";
import fb from "../../assets/svgs/fb.svg";
import insta from "../../assets/svgs/insta.svg";
import twit from "../../assets/svgs/twit.svg";
import call from "../../assets/svgs/call.svg";

const Footer = () => {
  const [isSmall, setIsSmall] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1200) {
      setIsSmall(false);
    } else if (width <= 1024) {
      setIsSmall(true);
    } else {
      setIsSmall(true);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="ml-[300px] mb-15">
        <div className="lg:grid hidden xl:grid-cols-3 grid-cols-1  pt-20 gap-5 ">
          <div>
            <h2 className="text-[26px] text-white font-Vazirmatn-900">About</h2>
            <p className="text-[16px] font-Vazirmatn-400 text-justify text-white w-[350px]">
              Melodies is a website that has been created for over{" "}
              <span className="text-darkpink">5 year’s</span> now and it is one
              of the most famous music player website’s in the world. in this
              website you can listen and download songs for free. also of you
              want no limitation you can buy our{" "}
              <span className="text-darkblue">premium pass’s.</span>
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[22px] ">
            <div>
              <h2 className="text-[24px] text-white font-Vazirmatn-700 pb-4 text-center border-b-[3px] border-white">
                Melodies
              </h2>

              <div className="flex flex-col justify-between items-center font-Vazirmatn-400">
                <a className="text-[16px] text-white p-4">Songs</a>
                <a className="text-[16px] text-white p-4">Radio</a>
                <p className="text-[16px] text-white p-4">Podcast</p>
              </div>
            </div>
            <div>
              <h2 className="text-[24px] text-white font-Vazirmatn-700 pb-4 text-center border-b-[3px] border-white">
                Access
              </h2>
              <div className="flex flex-col justify-between items-center font-Vazirmatn-400">
                <a className="text-[16px] text-white p-4">Explore</a>
                <a className="text-[16px] text-white p-4" href="/artist">
                  Artists
                </a>
                <a className="text-[16px] text-white p-4">Playlists</a>
                <a className="text-[16px] text-white p-4" href="/album">
                  Albums
                </a>
                <a className="text-[16px] text-white p-4">Trending</a>
              </div>
            </div>
            <div className="w-[143px]">
              <h2 className="text-[24px] text-white  font-Vazirmatn-700 pb-4 text-center border-b-[3px] border-white">
                Contact
              </h2>
              <div className="flex flex-col  items-center font-Vazirmatn-400">
                <a className="text-[16px] text-white p-4">About</a>
                <a href="/policy" className="text-[16px] text-white p-4">
                  Policy
                </a>
                <a className="text-[16px] text-white p-4">Social Media</a>
                <a className="text-[16px] text-white p-4">Sopport</a>
              </div>
            </div>
          </div>

          {isSmall ? (
            <div className="flex items-center gap-4 lg:pl-[53px] ">
              <div>
                <p className="text-[40px] font-Vazirmatn-800 bg-gradient-to-t from-darkpink to-darkblue text-transparent bg-clip-text">
                  Melodies
                </p>
              </div>
              <div className="flex items-center gap-3.5 ">
                <div className="bg-[#292929] rounded-full p-4">
                  <img src={fb} alt="fb" />
                </div>
                <div className="bg-[#292929] rounded-full py-2">
                  <img src={insta} alt="insta" />
                </div>
                <div className="bg-[#292929] rounded-full py-2">
                  <img src={twit} alt="twit" />
                </div>
                <div className="bg-[#292929] rounded-full py-2">
                  <img src={call} alt="call" />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="lg:pl-[53px] pt-8">
                <div>
                  <p className="text-[40px] font-Vazirmatn-800 bg-gradient-to-t from-darkblue to-darkpink text-transparent bg-clip-text">
                    Melodies
                  </p>
                </div>
                <div className="flex items-center gap-3.5 pt-8">
                  <div className="bg-[#292929] rounded-full p-4">
                    <img src={fb} alt="fb" />
                  </div>
                  <div className="bg-[#292929] rounded-full py-2">
                    <img src={insta} alt="insta" />
                  </div>
                  <div className="bg-[#292929] rounded-full py-2">
                    <img src={twit} alt="twit" />
                  </div>
                  <div className="bg-[#292929] rounded-full py-2">
                    <img src={call} alt="call" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;

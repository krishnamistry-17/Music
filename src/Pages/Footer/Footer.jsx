import React, { useState } from "react";
import fb from "../../assets/svgs/fb.svg";
import insta from "../../assets/svgs/insta.svg";
import twit from "../../assets/svgs/twit.svg";
import call from "../../assets/svgs/call.svg";

const Footer = () => {
  return (
    <div>
      <div className="ml-[300px]">
        <div className="lg:grid hidden grid-cols-3  pt-20 gap-5 ">
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
                <a className="text-[16px] text-white p-4">Policy</a>
                <a className="text-[16px] text-white p-4">Social Media</a>
                <a className="text-[16px] text-white p-4">Sopport</a>
              </div>
            </div>
          </div>
          <div className="lg:pl-[53px] pt-8">
            <div>
              <p className="text-[40px] font-Vazirmatn-800 bg-gradient-to-r from-[#EE10B0] to-[#0E9EEFEB] text-transparent bg-clip-text">
                Melodies
              </p>
            </div>
            <div className="flex gap-2.5 pt-8">
              <div>
                <img src={fb} alt="fb" className="mt-1.5 mr-1" />
              </div>
              <div>
                <img src={insta} alt="insta" />
              </div>
              <div>
                <img src={twit} alt="twit" />
              </div>
              <div>
                <img src={call} alt="call" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import fb from "../../assets/svgs/fb.svg";
import insta from "../../assets/svgs/insta.svg";
import twit from "../../assets/svgs/twit.svg";
import call from "../../assets/svgs/call.svg";
import bg from "../../assets/images/rect.png";
const Footer = () => {
  return (
    <div>
      <div className="">
        <div>
          {/* <img
            src={bg}
            alt="bg"
            className=" relative w-full -mt-29 lg:block hidden"
          /> */}
          <div className="lg:grid grid-cols-3 px-5 pt-10 gap-5 ">
            <div>
              <h2 className="text-[26px] text-white">About</h2>
              <p className="text-[16px] text-white w-[320px]">
                Melodies is a website that has been created for over{" "}
                <span className="text-[#EE10B0]">5 year’s</span> now and it is
                one of the most famous music player website’s in the world. in
                this website you can listen and download songs for free. also of
                you want no limitation you can buy our{" "}
                <span className="text-blue-600">premium pass’s.</span>
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:pt-0 pt-10">
              <div>
                <h2 className="text-[24px] text-white font-bold pb-4 text-center border-b-8 border-white">
                  Melodies
                </h2>
                <div className="flex flex-col justify-between items-center">
                  <p className="text-[16px] text-white p-4">Songs</p>
                  <p className="text-[16px] text-white p-4">Radio</p>
                  <p className="text-[16px] text-white p-4">Podcast</p>
                </div>
              </div>
              <div>
                <h2 className="text-[24px] text-white font-bold pb-4 text-center border-b-8 border-white">
                  Access
                </h2>
                <div className="flex flex-col justify-between items-center">
                  <p className="text-[16px] text-white p-4">Explor</p>
                  <p className="text-[16px] text-white p-4">Artists</p>
                  <p className="text-[16px] text-white p-4">Playlists</p>
                  <p className="text-[16px] text-white p-4">Albums</p>
                  <p className="text-[16px] text-white p-4">Trending</p>
                </div>
              </div>
              <div>
                <h2 className="text-[24px] text-white font-bold pb-4 text-center border-b-8 border-white">
                  Contact
                </h2>
                <div className="flex flex-col justify-between items-center">
                  <p className="text-[16px] text-white p-4">About</p>
                  <p className="text-[16px] text-white p-4">Policy</p>
                  <p className="text-[16px] text-white p-4">Social Media</p>
                  <p className="text-[16px] text-white p-4">Sopport</p>
                </div>
              </div>
            </div>
            <div className="lg:pl-[53px] pt-8">
              <h2 className=" text-[32px]  bg-gradient-to-r from-[#EE10B0] to-[#0E9EEFEB] text-transparent bg-clip-text">
                Melodies
              </h2>
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
    </div>
  );
};

export default Footer;

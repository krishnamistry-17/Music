import React, { useState } from "react";
import search from "../../assets/svgs/bsearch.svg";
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import most from "../../assets/svgs/most.svg";
import addplay from "../../assets/svgs/addplay.svg";
import fav from "../../assets/svgs/fav.svg";
import recent from "../../assets/svgs/recent.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdWorkspacePremium } from "react-icons/md";
import setting from "../../assets/svgs/setting.svg";
import logout from "../../assets/svgs/logout.svg";

const SmallSide = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className=" flex justify-between items-center px-4 py-2  sticky top-0 bg-blackbg">
        <img
          src={search}
          alt="back"
          className=" text-bluearrow w-[35px] h-[35px]"
        />
        <h2 className="text-[32px] font-Vazirmatn-800 text-darkpink">
          Dis<span className="text-blue">cover</span>
        </h2>
        <button onClick={handleToggle}>
          {" "}
          <IoMenu className="text-darkpink w-[35px] h-[35px]" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full  bg-black z-[1000] overflow-y-auto">
          <div
            className="flex flex-col h-full "
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex justify-end space-x-2 p-4 sticky top-0 w-full ">
              <MdCancel
                className="text-white text-5xl cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
            <nav className="flex-1 overflow-y-auto  px-8  ">
              <p className="border-white/20 border-b-2"></p>
              <Link
                className="text-white font-Vazirmatn-600 text-[20px] 
                   border-white/20 border-b-2  p-4 flex gap-4"
              >
                <span>
                  <FaShareAlt className="mt-1.5" />
                </span>
                Share
              </Link>
              <Link
                className="text-white font-Vazirmatn-600 text-[20px] 
                   border-white/20 border-b-2  p-4 flex gap-4"
              >
                <span>
                  <FcAbout className="mt-0.5" />
                </span>
                About
              </Link>
              <Link
                className="text-white font-Vazirmatn-600 text-[20px] 
                   border-white/20 border-b-2  p-4 flex gap-4"
              >
                <span>
                  <MdWorkspacePremium className="mt-0.5" />
                </span>
                Premium
              </Link>
              <Link
                className="text-white font-Vazirmatn-600 text-[20px] 
                   border-white/20 border-b-2  p-4 flex gap-4"
              >
                <span>
                  <img src={setting} alt="set" className="w-5 h-5 mt-1" />
                </span>
                Setting
              </Link>
              <Link
                className="text-white font-Vazirmatn-600 text-[20px] 
                   border-white/20 border-b-2  p-4 flex gap-4"
              >
                <span>
                  <img src={logout} alt="lg" className="w-5 h-5 mt-1" />
                </span>
                Logout
              </Link>

              <div className="border-white/20 border-b-2  p-4">
                <h2 className="text-[#EE10B0] text-[14px] pb-4">Library</h2>
                <button className="text-[16px] text-white font-Vazirmatn-600 flex gap-2.5 pb-4 ">
                  <span>
                    <img src={recent} alt="m" className="w-[23px] h-[20px]" />
                  </span>
                  Recently Added
                </button>
                <button className="text-[16px] text-white font-Vazirmatn-600 flex gap-2.5 pb-4 ">
                  <span>
                    <img src={most} alt="m" className="w-[23px] h-[20px]" />
                  </span>
                  Most played
                </button>
              </div>
              <div className="border-white/20 border-b-2  p-4">
                <h2 className="text-[#EE10B0] text-[14px] pb-4">
                  Playlist and favorite
                </h2>
                <button className="text-[16px] text-white font-Vazirmatn-600 flex gap-2.5 pb-4 ">
                  <span>
                    <img src={fav} alt="m" className="w-[23px] h-[20px]" />
                  </span>
                  Your favorites
                </button>
                <button className="text-[16px] text-white font-Vazirmatn-600 flex gap-2.5 pb-4 ">
                  <span>
                    <img src={addplay} alt="m" className="w-[23px] h-[20px]" />
                  </span>
                  Add playlist
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallSide;

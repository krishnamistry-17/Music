import { IoMenu } from "react-icons/io5";
import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
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
import logoutbtn from "../../assets/svgs/logout.svg";
import { IoIosLogIn } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import yourplay from "../../assets/svgs/yourplay.svg";
import { IoCallOutline } from "react-icons/io5";

const Menu = () => {
  const { isLoggedIn, setIsLoggedIn, isGoogleLogin, logout } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button onClick={handleToggle}>
          {" "}
          <IoMenu className="text-darkpink w-[35px] h-[35px]" />
        </button>
        {isMenuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full  bg-black z-auto overflow-y-auto"
            // style={{ height: "calc(100vh - 198px)", scrollbarWidth: "none" }}
          >
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
                  to={"/aboutus"}
                >
                  <span>
                    <FcAbout className="mt-0.5" />
                  </span>
                  About
                </Link>
                <Link
                  className="text-white font-Vazirmatn-600 text-[20px] 
                   border-white/20 border-b-2  p-4 flex gap-4"
                  to={"/contact"}
                >
                  <span>
                    <IoCallOutline className="mt-0.5 text-white" />
                  </span>
                  Contact
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
                  to={"/setting"}
                  className="text-white font-Vazirmatn-600 text-[20px] 
                   border-white/20 border-b-2  p-4 flex gap-4"
                >
                  <span>
                    <img src={setting} alt="set" className="w-5 h-5 mt-1" />
                  </span>
                  Setting
                </Link>
                {isLoggedIn || isGoogleLogin ? (
                  <div>
                    {" "}
                    <Link
                      className="text-white font-Vazirmatn-600 text-[20px] 
                   border-white/20 border-b-2  p-4 flex gap-4"
                      onClick={() => logout()}
                    >
                      <span>
                        <img
                          src={logoutbtn}
                          alt="lg"
                          className="w-5 h-5 mt-1"
                        />
                      </span>
                      Logout
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link
                      to={"/login"}
                      className="text-white font-Vazirmatn-600 text-[20px] 
                   border-white/20 border-b-2  p-4 flex gap-4"
                    >
                      <span>
                        <IoIosLogIn className="w-5 h-5 mt-1" />
                      </span>
                      Login
                    </Link>
                    <Link
                      to={"/signup"}
                      className="text-white font-Vazirmatn-600 text-[20px] 
                   border-white/20 border-b-2  p-4 flex gap-4"
                    >
                      <span>
                        <SiGnuprivacyguard className="w-5 h-5 mt-1" />
                      </span>
                      Signup
                    </Link>
                  </div>
                )}

                <div className="border-white/20 border-b-2  p-4">
                  <h2 className="text-[#EE10B0] text-[14px] pb-4">Library</h2>
                  <button
                    className="text-[16px] text-white font-Vazirmatn-600 flex gap-2.5 pb-4 "
                    onClick={() => navigate("/recentlyadded")}
                  >
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
                  <button
                    className="text-[16px] text-white font-Vazirmatn-600 flex gap-2.5 pb-4 "
                    onClick={() => navigate("/favorites")}
                  >
                    <span>
                      <img src={fav} alt="m" className="w-[23px] h-[20px]" />
                    </span>
                    Your favorites
                  </button>
                  <button
                    className="text-[16px] text-white font-Vazirmatn-600 flex gap-2.5 pb-4 "
                    onClick={() => navigate("/yourplaylist")}
                  >
                    <span>
                      <img
                        src={yourplay}
                        alt="m"
                        className="w-[23px] h-[20px]"
                      />
                    </span>
                    Your playlist
                  </button>
                  <button
                    className="text-[16px] text-white font-Vazirmatn-600 flex gap-2.5 pb-4 "
                    onClick={() => navigate("/playlist")}
                  >
                    <span>
                      <img
                        src={addplay}
                        alt="m"
                        className="w-[23px] h-[20px]"
                      />
                    </span>
                    Add playlist
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;

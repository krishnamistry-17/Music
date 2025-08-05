import React, { useEffect, useRef, useState } from "react";
import search from "../../assets/svgs/search.svg";
import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/svgs/profile.svg";
import logoutbtn from "../../assets/svgs/logout.svg";
import { IoIosLogIn } from "react-icons/io";
import whiteback from "../../assets/svgs/whitearrow.svg";

const HomeNav = ({ inputvalue, setInputValue, tabsectionRef }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { isGoogleLogin, logout, userData } = useAuth();

  const [activeTab, setActiveTab] = useState("signup");
  const [isdisplayDetail, setDisplayDetail] = useState();

  const scrollToTabs = () => {
    tabsectionRef?.current?.scrollIntoView({
      behaviour: "smooth",
      block: "end",
    });
  };

  const handleLogout = () => {
    logout();
  };

  const screen = ["/", "/discover"].includes(location.pathname);
  const artist = ["/artist"].includes(location.pathname);

  return (
    <div>
      <div className="lg:flex hidden items-center gap-[12px] w-full">
        {/* Search box */}

        {screen ? (
          <div className="w-[335.67px] h-[38px] rounded-[10px] bg-blackbg">
            <div className="py-[6.5px] px-[8px] w-[319px]">
              <div className="flex gap-[3px]">
                <img src={search} alt="search" />
                <input
                  type="search"
                  value={inputvalue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Search For Musics, Artists,..."
                  className="text-[12px] text-white font-Vazirmatn-300 
            focus:ring-0 focus:outline-none focus:shadow-none
            w-[155px] h-[19px] opacity-60"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className={`${artist ? "pr-62 pl-4" : "pr-62"}`}>
            <img onClick={() => navigate("/")} src={whiteback} alt="back" />
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-[12px]">
          <Link
            href="/about"
            className="text-white text-[16px] font-Vazirmatn-500 text-center w-[111.89px] h-[25px]"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-white text-[16px] font-Vazirmatn-500 text-center w-[111.89px] h-[25px]"
          >
            Contact
          </Link>
          <Link
            href="/premium"
            className="text-white text-[16px] font-Vazirmatn-500 text-center w-[111.89px] h-[25px]"
          >
            Premium
          </Link>
        </div>

        {/* Login/Signup OR Profile -  */}
        <div ref={tabsectionRef} className=" relative">
          {isLoggedIn || isGoogleLogin ? (
            <div className="ml-[250px]">
              <div onClick={() => setDisplayDetail(!isdisplayDetail)}>
                <img
                  // src={userProfile?.image || profile}
                  src={profile}
                  alt="Profile"
                  className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <h2 className="text-white">{userData?.user?.name || "user"}</h2>

                {isdisplayDetail && (
                  <div
                    className="absolute top-17 right-[-7px] bg-[#282828] 
                  shadow-md w-[200px] z-50"
                  >
                    <div className="p-3  text-white text-[14px] font-Vazirmatn-400">
                      {/**Account */}
                      <div className="flex items-center py-2">
                        <Link>Account</Link>
                      </div>
                      {/*Profile */}
                      <div
                        className="flex justify-between  items-center gap-2 mb-2"
                        onClick={() => navigate("/userdetail")}
                      >
                        <Link className="text-white pt-1.5 ">Profile</Link>
                        <div className="flex justify-end">
                          <IoIosLogIn />
                        </div>
                      </div>
                      {/*Download */}
                      <div className="py-2">
                        <Link>Download</Link>
                      </div>
                      {/**Setting */}
                      <div className="py-2 border-b border-white/10">
                        <Link to={"/setting"}>Settings</Link>
                      </div>
                      {/**logoout */}
                      <div className="flex justify-between items-center pt-2">
                        <div>
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 text-white hover:text-darkpink pt-1"
                          >
                            Logout
                          </button>
                        </div>
                        <div className="flex justify-end">
                          <img
                            src={logoutbtn}
                            alt="logout"
                            className="w-[16px] h-[16px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex gap-[12px]">
              <button
                onClick={() => {
                  scrollToTabs();
                  setActiveTab("login");
                  navigate("/");
                }}
                className={
                  activeTab === "login"
                    ? "px-[56.92px] py-[7px] bg-darkpink rounded-[4px] text-[14px] text-white font-Vazirmatn-300"
                    : "px-[63.42px] py-[7px] border-darkpink border-[1px] rounded-[4px] text-[14px] text-darkpink font-Vazirmatn-300"
                }
              >
                Login
              </button>
              <button
                onClick={() => {
                  scrollToTabs();
                  setActiveTab("signup");
                  navigate("/");
                }}
                className={
                  activeTab === "signup"
                    ? "px-[56.92px] py-[7px] bg-darkpink rounded-[4px] text-[14px] text-white font-Vazirmatn-300"
                    : "px-[63.42px] py-[7px] border-darkpink border-[1px] rounded-[4px] text-[14px] text-darkpink font-Vazirmatn-300"
                }
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeNav;

import React, { useEffect, useRef, useState } from "react";
import search from "../../assets/svgs/search.svg";
import { useAuth } from "../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profile from "../../assets/svgs/profile.svg";
import logoutbtn from "../../assets/svgs/logout.svg";
import { IoIosLogIn } from "react-icons/io";
import whiteback from "../../assets/svgs/whitearrow.svg";
import { IoMenu } from "react-icons/io5";

const HomeNav = ({ inputvalue, setInputValue, tabsectionRef }) => {
  const { isLoggedIn, isGoogleLogin, logout, userData } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [showContent, setShowContent] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("signup");
  const [isDisplayDetail, setDisplayDetail] = useState(true);
  console.log("isDisplayDetail :", isDisplayDetail);

  // Responsive display logic
  useEffect(() => {
    const displayDetail = () => {
      const width = window.innerWidth;
      if (width >= 1024) setDisplayDetail(false);
      else if (width >= 768) setDisplayDetail(true);
      else setDisplayDetail(false);
    };
    displayDetail();
    window.addEventListener("resize", displayDetail);
    return () => window.removeEventListener("resize", displayDetail);
  }, []);

  // Navigation helpers
  const scrollToTabs = () => {
    tabsectionRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const screen = ["/", "/discover"].includes(location.pathname);
  const artist = ["/artist"].includes(location.pathname);

  const handleToggle = () => setIsMenuOpen((prev) => !prev);

  const handleLogout = () => logout();

  return (
    <div>
      <div className="lg:flex hidden items-center gap-3 w-full">
        {/* Search box */}
        {screen ? (
          <div className="xl:w-[336px] h-[38px] rounded-[10px] bg-blackbg">
            <div className="py-[6.5px] px-2 w-[319px]">
              <div className="flex gap-1">
                <img src={search} alt="search" />
                <input
                  type="search"
                  value={inputvalue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Search For Musics, Artists,..."
                  className="text-[12px] text-white font-Vazirmatn-300 focus:ring-0 focus:outline-none w-[155px] h-[19px] opacity-60"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className={`${artist ? "pr-16 pl-4" : "pr-16"}`}>
            <img
              onClick={() => navigate("/")}
              src={whiteback}
              alt="back"
              className="cursor-pointer"
            />
          </div>
        )}

        {/* Links */}
        {isDisplayDetail ? (
          <div>
            <IoMenu
              className="text-darkpink w-[35px] h-[35px] cursor-pointer"
              onClick={handleToggle}
            />
            {isMenuOpen && (
              <div className="absolute bg-[#282828] p-3 rounded shadow-md z-50">
                <Link
                  to="/about"
                  className="block text-white text-[16px] font-Vazirmatn-500 text-center mb-1"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="block text-white text-[16px] font-Vazirmatn-500 text-center mb-1"
                >
                  Contact
                </Link>
                <Link
                  to="/premium"
                  className="block text-white text-[16px] font-Vazirmatn-500 text-center"
                >
                  Premium
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to="/about"
              className="text-white text-[16px] font-Vazirmatn-500 text-center w-[112px]"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-white text-[16px] font-Vazirmatn-500 text-center w-[112px]"
            >
              Contact
            </Link>
            <Link
              to="/premium"
              className="text-white text-[16px] font-Vazirmatn-500 text-center w-[112px]"
            >
              Premium
            </Link>
          </div>
        )}

        {/* Login/Signup OR Profile */}
        <div ref={tabsectionRef} className="relative ml-auto">
          {isLoggedIn || isGoogleLogin ? (
            <div className="ml-[250px] relative">
              <div
                onClick={() => setDisplayDetail((prev) => !prev)}
                className="cursor-pointer flex items-center gap-2"
              >
                <img
                  src={profile}
                  alt="Profile"
                  className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <h2 className="text-white">{userData?.user?.name || "User"}</h2>
              </div>

              {isDisplayDetail && (
                <div className="absolute top-[60px] right-0 bg-[#282828] shadow-md w-[200px] z-50 rounded">
                  <div className="p-3 text-white text-[14px] font-Vazirmatn-400">
                    <div className="flex items-center py-2">
                      <Link to="/account" className="w-full">
                        Account
                      </Link>
                    </div>
                    <div
                      className="flex justify-between items-center gap-2 mb-2 cursor-pointer"
                      onClick={() => navigate("/userdetail")}
                    >
                      <Link className="text-white pt-1.5">Profile</Link>
                      <IoIosLogIn />
                    </div>
                    <div className="py-2">
                      <Link to="/download" className="w-full">
                        Download
                      </Link>
                    </div>
                    <div className="py-2 border-b border-white/10">
                      <Link to="/setting" className="w-full">
                        Settings
                      </Link>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-white hover:text-darkpink pt-1"
                      >
                        Logout
                        <img
                          src={logoutbtn}
                          alt="logout"
                          className="w-[16px] h-[16px]"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={() => {
                  scrollToTabs();
                  setActiveTab("login");
                  navigate("/");
                }}
                className={`${
                  activeTab === "login"
                    ? "px-14 py-2 bg-darkpink rounded text-white font-Vazirmatn-300 text-sm"
                    : "px-16 py-2 border border-darkpink rounded text-darkpink font-Vazirmatn-300 text-sm"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => {
                  scrollToTabs();
                  setActiveTab("signup");
                  navigate("/");
                }}
                className={`${
                  activeTab === "signup"
                    ? "px-14 py-2 bg-darkpink rounded text-white font-Vazirmatn-300 text-sm"
                    : "px-16 py-2 border border-darkpink rounded text-darkpink font-Vazirmatn-300 text-sm"
                }`}
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

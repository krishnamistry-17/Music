import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import search from "../../assets/svgs/search.svg";
import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/svgs/profile.svg";
import logoutbtn from "../../assets/svgs/logout.svg";
import { IoIosLogIn } from "react-icons/io";
import whiteback from "../../assets/svgs/whitearrow.svg";
import { IoMenu } from "react-icons/io5";
import Search from "../Search/Search";

const HomeNav = ({
  inputvalue,
  setInputValue,
  tabsectionRef,
  activeTab,
  setActiveTab,
}) => {
  const { isLoggedIn } = useAuth();
  const { isGoogleLogin, logout, userData } = useAuth();
  const navigate = useNavigate();

  const [isdisplayDetail, setDisplayDetail] = useState();
  const [isSmall, setIsSmall] = useState(false);
  const [ismenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTabs = () => {
    tabsectionRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const handleLogout = () => {
    logout();
  };

  const handleResize = () => {
    const width = document?.body?.clientWidth;

    if (width >= 1350) {
      setIsSmall(false);
    } else if (width <= 1024) {
      console.log("width >>elseif:", width);
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

  const handleToggle = () => {
    setIsMenuOpen(!ismenuOpen);
  };

  const screen = ["/", "/discover"].includes(location.pathname) && (
    <div>
      <Search />
    </div>
  );
  const artist = ["/artist"].includes(location.pathname);

  return (
    <div className="w-full">
      {isSmall ? (
        <div>
          <div className="flex items-center justify-between gap-[12px] w-full">
            {/* Search box */}
            <div>
              {screen ? (
                <div>
                  <Search />
                </div>
              ) : (
                <div className={`${artist ? "pr-62 pl-4" : "pr-62"}`}>
                  <img
                    onClick={() => navigate("/")}
                    src={whiteback}
                    alt="back"
                  />
                </div>
              )}
            </div>

            {/* Login/Signup OR Profile */}
            <div className="flex items-center justify-between">
              <div
                ref={tabsectionRef}
                className="relative flex items-center gap-[12px]"
              >
                {isLoggedIn || isGoogleLogin ? (
                  <div>
                    <div
                      onClick={() => setDisplayDetail(!isdisplayDetail)}
                      className="cursor-pointer"
                    >
                      <img
                        src={profile}
                        alt="Profile"
                        className="w-[40px] h-[40px] rounded-full object-cover"
                      />
                    </div>

                    {isdisplayDetail && (
                      <div className="absolute top-17 right-[-7px] bg-[#282828] shadow-md w-[200px] z-50 rounded">
                        <div className="p-3 text-white text-[14px] font-Vazirmatn-400">
                          {/* Account */}
                          <div className="flex items-center py-2">
                            <Link to="/account">Account</Link>
                          </div>
                          {/* Profile */}
                          <div
                            className="flex justify-between items-center gap-2 mb-2 cursor-pointer"
                            onClick={() => navigate("/userdetail")}
                          >
                            <Link className="text-white pt-1.5">Profile</Link>
                            <div className="flex justify-end">
                              <IoIosLogIn />
                            </div>
                          </div>
                          {/* Download */}
                          <div className="py-2">
                            <Link to="/download">Download</Link>
                          </div>
                          {/* Setting */}
                          <div className="py-2 border-b border-white/10">
                            <Link to="/setting">Settings</Link>
                          </div>
                          {/* Logout */}
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
                  <div className="flex gap-[12px]">
                    <button
                      onClick={() => {
                        scrollToTabs();
                        setActiveTab("login");
                        navigate("/");
                      }}
                      className={
                        activeTab === "login"
                          ? "xl:px-[56.92px] xl:py-[7px] px-[28px] py-2 bg-darkpink rounded-[4px] text-[14px] text-white font-Vazirmatn-300"
                          : "xl:px-[56.92px] xl:py-[7px] px-[28px] py-2 border-darkpink border-[1px] rounded-[4px] text-[14px] text-darkpink font-Vazirmatn-300"
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
                          ? "xl:px-[56.92px] xl:py-[7px] px-[34px] py-2 bg-darkpink rounded-[4px] text-[14px] text-white font-Vazirmatn-300"
                          : "xl:px-[56.92px] xl:py-[7px] px-[34px] py-2 border-darkpink border-[1px] rounded-[4px] text-[14px] text-darkpink font-Vazirmatn-300"
                      }
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>

              {/* Links */}
              <div>
                {isSmall && (
                  <div className="ml-5">
                    <IoMenu
                      onClick={handleToggle}
                      className="text-darkpink w-[35px] h-[35px] cursor-pointer"
                    />
                    {ismenuOpen && (
                      <div className="absolute top-13 right-5 w-[120px] bg-[#282828]  py-4 px-4 rounded shadow-md z-50 text-left justify-start ">
                        <Link
                          to="/aboutus"
                          className="block text-white text-[14px] font-Vazirmatn-500  mb-3"
                        >
                          About Us
                        </Link>
                        <Link
                          to="/contact"
                          className="block text-white text-[14px] font-Vazirmatn-500  mb-3"
                        >
                          Contact
                        </Link>
                        <Link
                          to="/premium"
                          className="block text-white text-[14px] font-Vazirmatn-500 "
                        >
                          Premium
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between gap-[12px] w-full">
            {/* Search box */}
            {screen ? (
              <div>
                <Search />
              </div>
            ) : (
              <div className={`${artist ? "pr-42 pl-4" : "pr-62"}`}>
                <img onClick={() => navigate("/")} src={whiteback} alt="back" />
              </div>
            )}

            {/* Links */}

            <div>
              <div className="flex items-center justify-center gap-[24px] flex-1">
                <Link
                  to="/aboutus"
                  className="text-white text-[16px] font-Vazirmatn-500 text-center w-[111.89px] h-[25px]"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="text-white text-[16px] font-Vazirmatn-500 text-center w-[111.89px] h-[25px]"
                >
                  Contact
                </Link>
                <Link
                  to="/premium"
                  className="text-white text-[16px] font-Vazirmatn-500 text-center w-[111.89px] h-[25px]"
                >
                  Premium
                </Link>
              </div>
            </div>

            {/* Login/Signup OR Profile */}
            <div
              ref={tabsectionRef}
              className="relative flex items-center gap-[12px]"
            >
              {isLoggedIn || isGoogleLogin ? (
                <div className="ml-[250px]">
                  <div
                    onClick={() => setDisplayDetail(!isdisplayDetail)}
                    className="cursor-pointer"
                  >
                    <img
                      src={profile}
                      alt="Profile"
                      className="w-[40px] h-[40px] rounded-full object-cover"
                    />
                  </div>

                  {isdisplayDetail && (
                    <div className="absolute top-17 right-[-7px] bg-[#282828] shadow-md w-[200px] z-50 rounded">
                      <div className="p-3 text-white text-[14px] font-Vazirmatn-400">
                        {/* Account */}
                        <div className="flex items-center py-2">
                          <Link to="/userdetail">Account</Link>
                        </div>
                        {/* Profile */}
                        <div
                          className="flex justify-between items-center gap-2 mb-2 cursor-pointer"
                          onClick={() => navigate("/userdetail")}
                        >
                          <Link className="text-white pt-1.5">Profile</Link>
                          <div className="flex justify-end">
                            <IoIosLogIn />
                          </div>
                        </div>
                        {/* Download */}
                        <div className="py-2">
                          <Link to="/download">Download</Link>
                        </div>
                        {/* Setting */}
                        <div className="py-2 border-b border-white/10">
                          <Link to="/setting">Settings</Link>
                        </div>
                        {/* Logout */}
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
                <div className="flex gap-[12px]">
                  <button
                    onClick={() => {
                      scrollToTabs();
                      setActiveTab("login");
                      navigate("/");
                    }}
                    className={
                      activeTab === "login"
                        ? "xl:px-[56.92px] xl:py-[7px] px-[28px] py-2 bg-darkpink rounded-[4px] text-[14px] text-white font-Vazirmatn-300"
                        : "xl:px-[56.92px] xl:py-[7px] px-[28px]  py-2  border-darkpink border-[1px] rounded-[4px] text-[14px] text-darkpink font-Vazirmatn-300"
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
                        ? "xl:px-[56.92px] xl:py-[px] px-[34px] py-2 bg-darkpink rounded-[4px] text-[14px] text-white font-Vazirmatn-300"
                        : "xl:px-[56.92px] xl:py-[7px] px-[34px] py-2 border-darkpink border-[1px] rounded-[4px] text-[14px] text-darkpink font-Vazirmatn-300"
                    }
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeNav;

//issmall-28,34

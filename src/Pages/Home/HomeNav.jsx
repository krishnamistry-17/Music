import React, { useEffect, useRef, useState } from "react";
import search from "../../assets/svgs/search.svg";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import profile from "../../assets/svgs/profile.svg";
const HomeNav = ({
  inputvalue,
  setInputValue,
  tabsectionRef,
  activeTab,
  scrollToTabs,
  setActiveTab,
}) => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  console.log("isLoggedIn :", isLoggedIn);

  return (
    <div>
      <div className="lg:flex hidden items-center gap-[12px] w-full">
        {/* Search box */}
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
        <div ref={tabsectionRef}>
          {isLoggedIn ? (
            <div className="ml-[250px]">
              <button>
                <img src={profile} alt="pf" />
              </button>
            </div>
          ) : (
            <div className="flex gap-[12px]">
              <button
                onClick={() => {
                  scrollToTabs();
                  setActiveTab("login");
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

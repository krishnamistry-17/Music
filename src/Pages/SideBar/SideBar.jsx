import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import home from "../../assets/svgs/home.svg";
import album from "../../assets/svgs/album.svg";
import artist from "../../assets/svgs/artist.svg";
import yourplay from "../../assets/svgs/yourplay.svg";
import wplay from "../../assets/svgs/wplay.svg";
import wlog from "../../assets/svgs/wlog.svg";
import wdis from "../../assets/svgs/wdis.svg";
import recent from "../../assets/svgs/recent.svg";
import most from "../../assets/svgs/most.svg";
import fav from "../../assets/svgs/fav.svg";
import addplay from "../../assets/svgs/addplay.svg";
import setting from "../../assets/svgs/setting.svg";
import logoutbtn from "../../assets/svgs/logout.svg";
import { useAuth } from "../Context/AuthContext";

const SideBar = ({ hasBottomPlayer }) => {
  const [activeIndex, setActiveIndex] = useState(2);
  const navigate = useNavigate();
  const location = useLocation();

  const { logout } = useAuth();
  const { isLoggedIn, isGoogleLogin } = useAuth();

  const sidebarHeight = hasBottomPlayer ? "calc(100vh - 72px)" : "100vh";

  const menuData = [
    {
      title: "Menu",
      items: [
        { img: home, name: "Home", path: "/" },
        { img: wdis, name: "Discover", path: "/discover" },
        { img: album, name: "Album", path: "/album" },
        { img: artist, name: "Artist", path: "/artist" },
      ],
    },
    {
      title: "Library",
      items: [
        { img: recent, name: "Recently Added", path: "/recentlyadded" },
        { img: most, name: "Most Played" },
      ],
    },
    {
      title: "Playlist and Favorite",
      items: [
        { img: fav, name: "Your Favorites", path: "/favorites" },
        { img: yourplay, name: "Your Playlist", path: "/yourplaylist" },
        {
          img: addplay,
          npimg: wplay,
          name: "Add Playlist",
          path: "/playlist",
        },
      ],
    },
    {
      title: "General",
      items: [
        { img: setting, name: "Setting", path: "/setting" },
        {
          img: logoutbtn,
          nlimg: wlog,
          name: "Logout",
        },
      ],
    },
  ];

  return (
    <div className="">
      <div
        className="fixed top-0 left-0 lg:block hidden bg-black z-40 border-r-2 border-darkpink"
        style={{
          height: sidebarHeight,
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        {/* Sidebar content (Melodies, menu, etc.) */}
        <div className="pl-[64px] pr-[32px] pb-[50px] ">
          <h2
            className="pt-[48px] text-[32px]  font-Vazirmatn-600
              bg-gradient-to-r from-darkpink to-blue text-transparent bg-clip-text"
          >
            Melodies
          </h2>

          {menuData.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="my-[24px] text-[12px] text-darkpink font-Vazirmatn-300">
                {section.title}
              </h2>
              {section.items.map((item, index) => {
                const isActive =
                  item.path &&
                  (location.pathname === item.path ||
                    (item.path !== "/" &&
                      location.pathname.startsWith(item.path)));

                return (
                  <div>
                    <button
                      key={`${sectionIndex}-${index}`}
                      onClick={() => {
                        setActiveIndex(`${sectionIndex}-${index}`);

                        if (item.name === "Logout") {
                          localStorage.removeItem("accessToken");
                          logout();
                          // setIsLoggedIn(false);

                          return;
                        }

                        if (item.path) {
                          navigate(item.path);
                        }
                      }}
                      className={`flex gap-2 w-[174px] mt-[24px] 
                        ${
                          isActive
                            ? "bg-darkpink text-white h-[40px] pl-4 pt-2 rounded-md font-Vazirmatn-600"
                            : "h-[23px] font-Vazirmatn-500 hover:border-none"
                        } 
                          ${
                            item.name === "Add Playlist"
                              ? "text-blue"
                              : item.name === "Logout"
                              ? "text-darkpink"
                              : "text-white"
                          }
                      
                        `}
                    >
                      <span>
                        <img
                          src={`
                              ${
                                item.name === "Add Playlist" && isActive
                                  ? item.npimg
                                  : item.name === "Logout" && isActive
                                  ? item.nlimg
                                  : item.img
                              }`}
                          alt="img"
                          className={`
                              ${
                                isActive
                                  ? "w-[24px] h-[24px] mt-[-2px]"
                                  : "w-[16px] h-[16px] "
                              }
                            
                            `}
                        />
                      </span>
                      {item.name}
                    </button>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

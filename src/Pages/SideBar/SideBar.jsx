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
import logout from "../../assets/svgs/logout.svg";

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const navigate = useNavigate();
  const location = useLocation();

  const menuData = [
    {
      title: "Menu",
      items: [
        { img: home, name: "Home" },
        { img: wdis, name: "Discover", path: "/discover" },
        { img: album, name: "Album", path: "/album" },
        { img: artist, name: "Artist", path: "/artist" },
      ],
    },
    {
      title: "Library",
      items: [
        { img: recent, name: "Recently Added" },
        { img: most, name: "Most Played" },
      ],
    },
    {
      title: "Playlist and Favorite",
      items: [
        { img: fav, name: "Your Favorites" },
        { img: yourplay, name: "Your Playlist" },
        {
          img: addplay,
          npimg: wplay,
          name: "Add Playlist",
        },
      ],
    },
    {
      title: "General",
      items: [
        { img: setting, name: "Setting" },
        {
          img: logout,
          nlimg: wlog,
          name: "Logout",
        },
      ],
    },
  ];

  return (
    <div>
      <div
        className="fixed top-0 left-0 h-screen hidden lg:block border-r-2 border-darkpink bg-black z-40 overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
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
                  activeIndex === `${sectionIndex}-${index}` ||
                  location.pathname.startsWith(item.path);

                return (
                  <div>
                    <button
                      key={`${sectionIndex}-${index}`}
                      onClick={() => {
                        setActiveIndex(`${sectionIndex}-${index}`);
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

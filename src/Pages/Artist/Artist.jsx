import React, { useEffect, useState } from "react";
import home from "../../assets/svgs/home.svg";
import album from "../../assets/svgs/album.svg";
import artist from "../../assets/svgs/artist.svg";
import recent from "../../assets/svgs/recent.svg";
import most from "../../assets/svgs/most.svg";
import fav from "../../assets/svgs/fav.svg";
import yourplay from "../../assets/svgs/yourplay.svg";
import addplay from "../../assets/svgs/addplay.svg";
import wplay from "../../assets/svgs/wplay.svg";
import setting from "../../assets/svgs/setting.svg";
import logoutbtn from "../../assets/svgs/logout.svg";
import wlog from "../../assets/svgs/wlog.svg";
import wdis from "../../assets/svgs/wdis.svg";
import back from "../../assets/svgs/back.svg";
import bback from "../../assets/svgs/blueback.svg";
import right from "../../assets/svgs/right.svg";
import profile from "../../assets/svgs/profile.svg";
import artist0 from "../../assets/images/artist.png";
import art1 from "../../assets/images/art1.jpg";
import art2 from "../../assets/images/art2.jpg";
import art3 from "../../assets/images/art3.jpg";
import art4 from "../../assets/images/art4.jpg";
import art5 from "../../assets/images/art5.jpg";
import pfav from "../../assets/svgs/pfav.svg";
import option from "../../assets/svgs/option.svg";
import bhome from "../../assets/svgs/bhome.svg";
import bartist from "../../assets/svgs/bartist.svg";
import phome from "../../assets/svgs/phome.svg";
import pdisc from "../../assets/svgs/pdisc.svg";
import palbum from "../../assets/svgs/palbum.svg";
import plib from "../../assets/svgs/plib.svg";
import part from "../../assets/svgs/part.svg";
import bdisc from "../../assets/svgs/bdisc.svg";
import albumb from "../../assets/svgs/albumb.svg";
import discb from "../../assets/svgs/discb.svg";
import { data, Link, useNavigate } from "react-router-dom";
import Popular from "./Popular";
import ArtAlbum from "./ArtAlbum";
import SingleSong from "./SingleSong";
import ArtistPlay from "./ArtistPlay";
import Fans from "./Fans";
import { useLocation } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useAuth } from "../Context/AuthContext";
import Menu from "../SideBar/Menu";

const Artist = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const { isLoggedIn, isGoogleLogin, userProfile, logout } = useAuth();
  const [isdisplayDetail, setDisplayDetail] = useState();

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

  const data1 = [
    {
      id: 0,
      image: art1,
      head: "Without Me",
      para: "Eminem",
      rdate: "May 15, 2002",
      played: "21,215,618",
      fimg: pfav,
      ptime: "4:50",
      oimage: option,
    },
    {
      id: 1,
      image: art2,
      head: "mockingbird",
      para: "Eminem",
      rdate: "Apr 25, 2005",
      played: "19,856,112",
      fimg: pfav,
      ptime: "4:10",
      oimage: option,
    },
    {
      id: 2,
      image: art3,
      head: "The Real Slim Sha..",
      para: "Eminem",
      rdate: "Nov 30, 2023",
      played: "16,564,223",
      fimg: pfav,
      ptime: "4:44",
      oimage: option,
    },
    {
      id: 3,
      image: art4,
      head: "Lose Yourself",
      para: "Eminem",
      rdate: "Nov 30, 2023",
      played: "16,240,390",
      fimg: pfav,
      ptime: "5:22",
      oimage: option,
    },
    {
      id: 4,
      image: art5,
      head: "Godzila",
      para: "Eminem",
      rdate: "Nov 30, 2023",
      played: "14,367,500",
      fimg: pfav,
      ptime: "3:30",
      oimage: option,
    },
    {
      id: 5,
      image: art4,
      head: "Lose Yourself",
      para: "Eminem",
      rdate: "Nov 30, 2023",
      played: "16,240,390",
      fimg: pfav,
      ptime: "5:22",
      oimage: option,
    },
    {
      id: 6,
      image: art1,
      head: "Without Me",
      para: "Eminem",
      rdate: "May 15, 2002",
      played: "21,215,618",
      fimg: pfav,
      ptime: "4:50",
      oimage: option,
    },

    {
      id: 7,
      image: art3,
      head: "The Real Slim Sha..",
      para: "Eminem",
      rdate: "Nov 30, 2023",
      played: "16,564,223",
      fimg: pfav,
      ptime: "4:44",
      oimage: option,
    },

    {
      id: 8,
      image: art5,
      head: "Godzila",
      para: "Eminem",
      rdate: "Nov 30, 2023",
      played: "14,367,500",
      fimg: pfav,
      ptime: "3:30",
      oimage: option,
    },
    {
      id: 9,
      image: art2,
      head: "mockingbird",
      para: "Eminem",
      rdate: "Apr 25, 2005",
      played: "19,856,112",
      fimg: pfav,
      ptime: "4:10",
      oimage: option,
    },
  ];

  const optionData = [
    {
      items: [
        { img: bhome, activeimg: phome, name: "Home" },
        { img: bdisc, activeimg: pdisc, name: "Discover", path: "/discover" },
        { img: albumb, activeimg: palbum, name: "Album", path: "/album" },
        { img: bartist, activeimg: part, name: "Artist", path: "/artist" },
        { img: discb, activeimg: plib, name: "Library", path: "/library" },
      ],
    },
  ];

  const handleClick = () => {
    navigate("/album");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="lg:flex hidden ">
        {/* Sidebar */}
        <SideBar />

        {/* Main content area (grid content, header, songs, footer) */}
        <div className=" pl-[32px] ">
          <div>
            <div className=" relative top-[43px]  z-10">
              <div className="flex justify-between items-center px-5">
                <div>
                  <img
                    src={back}
                    alt="back"
                    onClick={handleClick}
                    className="w-[50px] h-[50px]"
                  />
                </div>
                <div className="flex gap-15">
                  <div className="flex gap-5">
                    <p className="text-white text-[24px] font-Vazirmatn-600">
                      Share
                    </p>
                    <p className="text-white text-[24px] font-Vazirmatn-600">
                      About
                    </p>
                    <p className="text-white text-[24px] font-Vazirmatn-600">
                      Premuim
                    </p>
                  </div>
                  <div className="mr-5">
                    {(isLoggedIn || isGoogleLogin) && (
                      <div>
                        <button
                          onClick={() => setDisplayDetail(!isdisplayDetail)}
                        >
                          <img
                            // src={userProfile?.image || profile}
                            src={profile}
                            alt="Profile"
                            className="w-[40px] h-[40px] rounded-full object-cover"
                          />
                          <h2 className="text-white">{"User"}</h2>

                          {isdisplayDetail && (
                            <div className="absolute  right-5 bg-black border border-gray-700 rounded-md shadow-md w-[140px] z-50">
                              <div className="p-3 text-white text-[14px] font-Vazirmatn-400">
                                <div className="flex items-center gap-2 mb-2">
                                  <img
                                    src={profile}
                                    alt="pf"
                                    className="w-[20px] h-[20px]"
                                  />
                                  <p className="text-white pt-1.5 ">
                                    User Detail
                                  </p>
                                </div>
                                <button
                                  onClick={logout}
                                  className="flex items-center gap-2 text-white hover:text-darkpink pt-1"
                                >
                                  <img
                                    src={logoutbtn}
                                    alt="logout"
                                    className="w-[16px] h-[16px]"
                                  />
                                  Logout
                                </button>
                              </div>
                            </div>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                  {/* <img src={profile} alt="pf" className="md:pl-[37px] pr-8" /> */}
                </div>
              </div>
            </div>
            <img
              src={artist0}
              alt="art"
              className="md:h-[422px] md:w-[1230px] -mt-11  rounded-[10px] relative z-0 shadow-l
"
            />
            <div className=" relative z-20  bottom-32 pl-5">
              <h2 className="text-white text-[96px] font-Vazirmatn-900">
                Eminem
              </h2>
            </div>
          </div>
          <div className=" col-span-2 row-span-2 lg:block hidden md:mt-[-45px]">
            <Popular />
          </div>
          <div className="pt-[64px] ">
            <ArtAlbum />
          </div>
          <div className="pt-[64px]">
            <SingleSong />
          </div>
          <div className="pt-[64px]">
            <ArtistPlay />
          </div>
          <div className="pt-[64px]">
            <Fans />
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className=" flex justify-between items-center px-4 py-2  sticky top-0 bg-blackbg z-50">
          <img
            src={bback}
            alt="back"
            className=" text-bluearrow w-[35px] h-[35px]"
            onClick={handleClick}
          />
          <h2 className="text-[32px] font-Vazirmatn-800  bg-gradient-to-r from-blue to-darkpink text-transparent bg-clip-text">
            Artist
          </h2>
          <div>
            <Menu />
          </div>
        </div>

        <div>
          <img
            src={artist0}
            alt="art"
            className=" rounded-[10px] pt-8 drop-shadow-lg px-2 relative z-0 shadow-l"
          />
          <div className=" flex justify-between items-center px-4 relative z-10 bottom-13">
            <h2 className="text-white text-[32px] font-Vazirmatn-800">
              Eminem
            </h2>
            <img src={right} alt="rite" />
          </div>
        </div>

        <div>
          <Popular />
        </div>

        <div>
          <ArtAlbum />
        </div>
        <div>
          <SingleSong />
        </div>
        <div>
          <ArtistPlay />
        </div>
        <div>
          <Fans />
        </div>

        <div className=" lg:hidden sticky bottom-0 z-50 bg-blackbg">
          {optionData.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex justify-between items-center p-4 "
            >
              {section.items.map((item, index) => {
                const isActive =
                  activeIndex === `${sectionIndex}-${index}` ||
                  location.pathname.startsWith(item.path);

                return (
                  <div
                    key={`${sectionIndex}-${index}`}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => {
                      setActiveIndex(`${sectionIndex}-${index}`);
                      if (item.path) {
                        navigate(item.path);
                      }
                    }}
                  >
                    <img
                      src={isActive ? item.activeimg : item.img}
                      alt={item.name}
                      className="w-13 h-10"
                    />
                    <div
                      className={`text-[12px] pt-1 ${
                        isActive ? "text-darkpink" : "text-darkblue"
                      }`}
                    >
                      {item.name}
                    </div>
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

export default Artist;

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
import logout from "../../assets/svgs/logout.svg";
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
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { data, Link, useNavigate } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { MdWorkspacePremium } from "react-icons/md";
import Popular from "./Popular";
import ArtAlbum from "./ArtAlbum";
import SingleSong from "./SingleSong";
import ArtistPlay from "./ArtistPlay";
import Fans from "./Fans";
import { useLocation } from "react-router-dom";

const Artist = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

        {/* Main content area (grid content, header, songs, footer) */}
        <div className="lg:ml-[300px] mt-[25px] pl-[32px] ">
          <div>
            <div className=" relative top-[71px]  z-10">
              <div className="flex justify-between items-center px-5">
                <div>
                  <img
                    src={back}
                    alt="back"
                    onClick={handleClick}
                    className="w-[50px] h-[50px]"
                  />
                </div>
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
                  <img src={profile} alt="pf" className="md:pl-[37px] pr-8" />
                </div>
              </div>
            </div>
            <img
              src={artist0}
              alt="art"
              className="md:h-[422px] md:w-[1230px]   rounded-[10px] relative z-0 shadow-l
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
          <button onClick={handleToggle}>
            {" "}
            <IoMenu className="text-[#EE10B0] w-[35px] h-[35px]" />
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

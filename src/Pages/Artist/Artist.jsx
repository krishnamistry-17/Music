import React, { useEffect, useState } from "react";
import home from "../../assets/svgs/home.svg";
import discover from "../../assets/svgs/discover.svg";
import album from "../../assets/svgs/album.svg";
import artist from "../../assets/svgs/artist.svg";
import recent from "../../assets/svgs/recent.svg";
import most from "../../assets/svgs/most.svg";
import fav from "../../assets/svgs/fav.svg";
import yourplay from "../../assets/svgs/yourplay.svg";
import addplay from "../../assets/svgs/addplay.svg";
import setting from "../../assets/svgs/setting.svg";
import logout from "../../assets/svgs/logout.svg";
import back from "../../assets/svgs/back.svg";
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
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { data, Link, useNavigate } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { MdWorkspacePremium } from "react-icons/md";
import Popular from "./Popular";
import Footer from "../Footer/Footer";
import ArtAlbum from "./ArtAlbum";
import SingleSong from "./SingleSong";
import ArtistPlay from "./ArtistPlay";
import Fans from "./Fans";

const Artist = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastindex, setLastIndex] = useState(5);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const menuData = [
    {
      title: "Menu",
      items: [
        { img: home, name: "Home" },
        { img: discover, name: "Discover" },
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
          name: ["", <a className="text-[#0E9EEFEB]">Add Playlist</a>, ""],
        },
      ],
    },
    {
      title: "General",
      items: [
        { img: setting, name: "Setting" },
        {
          img: logout,
          name: ["", <a className="text-[#EE10B0]">Logout</a>, ""],
        },
      ],
    },
  ];

  const visibleCount = 5;

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
      <div className="lg:flex hidden font-vazir ">
        <div className="lg:grid grid-flow-col grid-rows-3 gap-4 h-screen">
          <div className=" lg:row-span-3 lg:block hidden">
            <div className="pl-[64px] pr-[32px]">
              <h2
                className="pt-[48px] text-[32px] 
              bg-gradient-to-r from-[#EE10B0] to-[#0E9EEFEB] text-transparent bg-clip-text"
              >
                Melodies
              </h2>

              {menuData.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h2 className="py-[24px] text-[12px] text-[#EE10B0]">
                    {section.title}
                  </h2>
                  {section.items.map((item, index) => {
                    const isActive = activeIndex === `${sectionIndex}-${index}`;
                    return (
                      <button
                        key={`${sectionIndex}-${index}`}
                        onClick={() => {
                          setActiveIndex(`${sectionIndex}-${index}`);
                          if (item.path) {
                            navigate(item.path);
                          }
                        }}
                        className={`${
                          isActive
                            ? "bg-[#EE10B0] text-white flex gap-2 px-8 py-3 rounded-md"
                            : "text-[16px] text-white flex gap-2.5 py-[24px] px-4"
                        }`}
                      >
                        <span>
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-[20px] h-[20px]"
                          />
                        </span>
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className=" col-span-3 ">
            <div>
              <div className=" relative top-[95px]  z-10">
                <div className="flex justify-between items-center px-5">
                  <div>
                    <img src={back} alt="back" onClick={handleClick} />
                  </div>
                  <div className="flex gap-5">
                    <p className="text-white text-[24px]">Share</p>
                    <p className="text-white text-[24px]">About</p>
                    <p className="text-white text-[24px]">Premuim</p>
                    <img src={profile} alt="pf" className="md:pl-[37px]" />
                  </div>
                </div>
              </div>
              <img
                src={artist0}
                alt="art"
                className="md:h-[422px] md:w-[1200px]  top-[37px] rounded-[10px] relative z-0"
              />
              <div className=" relative z-20  bottom-27 pl-5">
                <h2 className="text-white text-[96px]">Eminem</h2>
              </div>
            </div>
            <div className=" col-span-2 row-span-2 lg:block hidden">
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
            <div className="pt-[64px]">
              <Footer />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className=" flex justify-between items-center">
          <img
            src={back}
            alt="back"
            className=" text-[#0E9EEF] w-10 h-8"
            onClick={handleClick}
          />
          <h2 className="text-[32px]  bg-gradient-to-r from-[#0E9EEFEB] to-[#EE10B0] text-transparent bg-clip-text">
            Artist
          </h2>
          <button onClick={handleToggle}>
            {" "}
            <IoMenu className="text-[#EE10B0] w-10 h-8" />
          </button>
        </div>
        {isMenuOpen && (
          <div className=" fixed top-0 left-0 w-full h-full bg-black z-[1000] overflow-y-auto">
            <div
              className=" flex flex-col h-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className=" flex justify-end space-x-2 p-4 w-full">
                <MdCancel
                  className="text-white text-5xl cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
              <nav className="flex-1 overflow-y-auto  px-8  ">
                <p className="border-white/20 border-b-2"></p>
                <Link
                  className="text-white text-[20px] font-medium 
                   border-white/20 border-b-2  p-4 flex gap-4"
                >
                  <span>
                    <FaShareAlt className="mt-1.5" />
                  </span>
                  Share
                </Link>
                <Link
                  className="text-white text-[20px] font-medium 
                   border-white/20 border-b-2  p-4 flex gap-4"
                >
                  <span>
                    <FcAbout className="mt-0.5" />
                  </span>
                  About
                </Link>
                <Link
                  className="text-white text-[20px] font-medium 
                   border-white/20 border-b-2  p-4 flex gap-4"
                >
                  <span>
                    <MdWorkspacePremium className="mt-0.5" />
                  </span>
                  Premium
                </Link>
                <Link
                  className="text-white text-[20px] font-medium 
                   border-white/20 border-b-2  p-4 flex gap-4"
                >
                  <span>
                    <img src={setting} alt="set" className="w-5 h-5 mt-1" />
                  </span>
                  Setting
                </Link>
                <Link
                  className="text-white text-[20px] font-medium 
                   border-white/20 border-b-2  p-4 flex gap-4"
                >
                  <span>
                    <img src={logout} alt="lg" className="w-5 h-5 mt-1" />
                  </span>
                  Logout
                </Link>

                <div className="border-white/20 border-b-2  p-4">
                  <h2 className="text-[#EE10B0] text-[14px] font-medium pb-4">
                    Library
                  </h2>
                  <button className="text-[16px] text-white flex gap-2.5 pb-4 ">
                    <span>
                      <img src={recent} alt="m" className="w-[23px] h-[20px]" />
                    </span>
                    Recently Added
                  </button>
                  <button className="text-[16px] text-white flex gap-2.5 pb-4 ">
                    <span>
                      <img src={most} alt="m" className="w-[23px] h-[20px]" />
                    </span>
                    Most played
                  </button>
                </div>
                <div className="border-white/20 border-b-2  p-4">
                  <h2 className="text-[#EE10B0] text-[14px] font-medium pb-4">
                    Playlist and favorite
                  </h2>
                  <button className="text-[16px] text-white flex gap-2.5 pb-4 ">
                    <span>
                      <img src={fav} alt="m" className="w-[23px] h-[20px]" />
                    </span>
                    Your favorites
                  </button>
                  <button className="text-[16px] text-white flex gap-2.5 pb-4 ">
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
            className=" rounded-[10px] pt-8 drop-shadow-lg px-2 relative z-0"
          />
          <div className=" flex justify-between items-center px-4 relative z-10 bottom-15">
            <h2 className="text-white text-[32px]">Eminem</h2>
            <img src={right} alt="rite" />
          </div>
        </div>

        <div className="px-2 pt-5">
          {/* Header Section */}
          <div className="flex justify-between">
            <div>
              <p className="text-[24px] font-bold text-white">
                Popular{" "}
                <span className="text-[24px] text-[#EE10B0] font-bold">
                  Songs
                </span>
              </p>
            </div>
            <div className="flex gap-6.5">
              <p className="text-[20px] text-white">Time</p>
              <p className="text-[20px] text-white">More</p>
            </div>
          </div>

          {/* Song List */}
          <div className="pt-4">
            {(isOpen ? data1 : data1.slice(0, visibleCount)).map(
              (item, index) => (
                <div key={index} className="pt-[15px]">
                  <div className="flex items-center justify-between gap-5 bg-[#1E1E1E] p-3 rounded-md">
                    {/* Left Section: Image + Song Info */}
                    <div className="flex">
                      <img
                        src={item.image}
                        alt="song"
                        className="w-[60px] h-[60px] rounded-[5px] border"
                      />
                      <div className="pl-[23px]">
                        <p className="text-white md:text-[20px] text-[18px] pt-1">
                          {item.head}
                        </p>
                        <p className="text-white text-[12px] pt-0.5">
                          {item.para}
                        </p>
                      </div>
                    </div>

                    {/* Right Section: Time + More */}
                    <div className="flex items-center gap-6.5">
                      <p className="text-white text-[16px]">{item.ptime}</p>
                      <img src={item.oimage} alt="more" />
                    </div>
                  </div>
                </div>
              )
            )}
            <div className="flex justify-center items-center pt-4">
              <button
                className="text-[14px] px-4 py-2 text-white bg-[#EE10B0] shadow-xl rounded-[4px]"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default Artist;

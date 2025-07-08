import React, { useState } from "react";
import home from "../../assets/svgs/home.svg";
import discover from "../../assets/svgs/discover.svg";
import album from "../../assets/svgs/album.svg";
import artist from "../../assets/svgs/artist.svg";
import bartist from "../../assets/svgs/bartist.svg";
import recent from "../../assets/svgs/recent.svg";
import most from "../../assets/svgs/most.svg";
import fav from "../../assets/svgs/fav.svg";
import yourplay from "../../assets/svgs/yourplay.svg";
import addplay from "../../assets/svgs/addplay.svg";
import setting from "../../assets/svgs/setting.svg";
import logout from "../../assets/svgs/logout.svg";
import back from "../../assets/svgs/back.svg";
import profile from "../../assets/svgs/profile.svg";
import pdot from "../../assets/svgs/pdot.svg";
import play from "../../assets/svgs/play.svg";
import bplay from "../../assets/svgs/bplay.svg";
import bhome from "../../assets/svgs/bhome.svg";
import blib from "../../assets/svgs/blib.svg";
import bdis from "../../assets/svgs/bdis.svg";
import balbum from "../../assets/svgs/balbum.svg";
import song from "../../assets/images/song.png";
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { MdWorkspacePremium } from "react-icons/md";
import Song from "./Song";
import pfav from "../../assets/svgs/pfav.svg";
import poption from "../../assets/svgs/poption.svg";
import music1 from "../../assets/images/music1.jpg";
import music2 from "../../assets/images/music2.jpg";
import music3 from "../../assets/images/music3.png";
import music4 from "../../assets/images/music4.png";
import music5 from "../../assets/images/music5.png";
import music6 from "../../assets/images/music6.jpg";
import music7 from "../../assets/images/music7.png";
import music8 from "../../assets/images/music8.jpg";
import music9 from "../../assets/images/music9.jpg";
import music10 from "../../assets/images/music10.jpg";
import music11 from "../../assets/images/music11.jpg";
import music12 from "../../assets/images/music12.jpg";
import music13 from "../../assets/images/music13.jpg";
import music14 from "../../assets/images/music14.png";
import music15 from "../../assets/images/music15.png";
import music16 from "../../assets/images/music16.jpg";
import music17 from "../../assets/images/music17.png";
import music18 from "../../assets/images/music18.jpg";
import music19 from "../../assets/images/music19.png";
import music20 from "../../assets/images/music20.jpg";
import Footer from "../Footer/Footer";

const Albums = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2);
  const navigate = useNavigate();
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const data1 = [
    {
      image: music1,
      head: "Sorfcore",
      para: " The neighberhood",

      ptime: "3:26",
      oimage: poption,
    },
    {
      image: music2,
      head: "Skyfall Beats",
      para: " nightmares",

      ptime: "2:45",
      oimage: poption,
    },
    {
      image: music3,
      head: "Greedy",
      para: " tate mcrae",

      ptime: "2:11",
      oimage: poption,
    },
    {
      image: music4,
      head: "Lovin On me",
      para: " jack harlow",

      ptime: "2:18",
      oimage: poption,
    },
    {
      image: music5,
      head: "pain the town red",
      para: " Doja Cat",

      ptime: "3:51",
      oimage: poption,
    },
    {
      image: music6,
      head: "Dancin On Night",
      para: " Dualipa",

      ptime: "2:56",
      oimage: poption,
    },
    {
      image: music7,
      head: "Water",
      para: " Tyla",

      ptime: "3:20",
      oimage: poption,
    },
    {
      image: music8,
      head: "Push your limits",
      para: " Brian michael",

      ptime: "2:24",
      oimage: poption,
    },
    {
      image: music9,
      head: "Houdini",
      para: " Dualipa",

      ptime: "3:05",
      oimage: poption,
    },
    {
      image: music10,
      head: "Lala",
      para: " myke towers",

      ptime: "3:17",
      oimage: poption,
    },
    {
      image: music11,
      head: "I Wanaa Be Yours",
      para: "arctic monkeys",

      ptime: "3:03",
      oimage: poption,
    },
    {
      image: music12,
      head: "Paradise",
      para: "braaheim",

      ptime: "2:30",
      oimage: poption,
    },
    {
      image: music13,
      head: "As It Was",
      para: " Harry Styles",

      ptime: "2:47",
      oimage: poption,
    },
    {
      image: music14,
      head: "Another Love",
      para: " Tom Odell",

      ptime: "4:06",
      oimage: poption,
    },
    {
      image: music15,
      head: "Daylight",
      para: "david kushner",

      ptime: "3:32",
      oimage: poption,
    },
    {
      image: music16,
      head: "Beggin",
      para: " Måneskin",

      ptime: "3:31",
      oimage: poption,
    },
    {
      image: music17,
      head: "What Was I Made F...",
      para: " Billie eilish",

      ptime: "3:42",
      oimage: poption,
    },
    {
      image: music18,
      head: "Daddy Issues",
      para: " The Neighbourhood",

      ptime: "4:20",
      oimage: poption,
    },
    {
      image: music19,
      head: "Rolling In The Deep",
      para: " Adele",

      ptime: "3:48",
      oimage: poption,
    },
    {
      image: music20,
      head: "OneShot",
      para: " mhst",

      ptime: "1:15",
      oimage: poption,
    },
  ];

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

  return (
    <div>
      <div className="lg:flex hidden font-vazir   ">
        <div class="lg:grid grid-flow-col grid-rows-3 gap-4 h-screen">
          <div class="lg:row-span-3 ... lg:block hidden">
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

          <div class="col-span-3 mt-[26px]   ">
            <div className=" w-full h-fit pb-6    lg:block hidden  bg-gradient-to-r from-[#1171E2] to-[#8BCBE700] ">
              <div className="flex justify-between items-center py-[30px] pr-[31px] pl-[10px]">
                <div>
                  <img src={back} alt="back" />
                </div>
                <div className="flex gap-5">
                  <p className="text-white text-[24px]">Share</p>
                  <p className="text-white text-[24px]">About</p>
                  <p className="text-white text-[24px]">Premuim</p>
                  <img src={profile} alt="pf" className="md:  pl-[37px]" />
                </div>
              </div>
              <div className="lg:flex justify-between items-center">
                <div className="lg:flex pl-[43px] gap-14 md:w-[712px]">
                  <div>
                    <img src={song} alt="song" />
                  </div>
                  <div>
                    <h2 className=" text-white md:text-[40px] text-[22px] font-bold">
                      Trending songs{" "}
                      <span className="text-[#EE10B0] text-[40px]">mix</span>
                    </h2>
                    <p className=" text-white text-[20px] py-[44px]">
                      tate mcree, nightmares, the neighberhood, doja cat and ...
                    </p>
                    <div className="flex justify-between items-center w-[204px]">
                      <p>20 songs</p>
                      <img src={pdot} alt="pd" />
                      <p>1h 36m</p>
                    </div>
                  </div>
                </div>
                <div className=" lg:pt-[220px] flex gap-4 md:pl-0 pl-10 pt-4 pr-8">
                  <p className="text-[24px] text-[#EE10B0] pt-4">Play All</p>
                  <img src={play} alt="play" />
                </div>
              </div>
            </div>
            <div class="col-span-2 row-span-2 pt-5 pb-40 lg:block hidden  bg-gradient-to-r from-[#1171E2] to-[#53ADD606] ">
              <Song />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>

      {/*Mobile */}
      <div className="lg:hidden">
        <div className=" flex justify-between items-center px-4 pb-4  sticky top-0 bg-[#181818]">
          <img src={back} alt="back" className=" text-[#0E9EEF] w-10 h-8" />
          <h2 className="text-[32px]  bg-gradient-to-r from-[#0E9EEFEB] to-[#EE10B0] text-transparent bg-clip-text">
            Album
          </h2>
          <button onClick={handleToggle}>
            {" "}
            <IoMenu className="text-[#EE10B0] w-10 h-8" />
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
        <div className=" bg-gradient-to-r from-[#1171E2] to-[#022042]">
          <div className=" w-full h-fit pb-6 rounded-lg  bg-gradient-to-r from-[#1171E2] to-[#8BCBE700] ">
            <div className="lg:flex justify-between items-center">
              <div className="md:flex p-5">
                <div>
                  <img src={song} alt="song" className="w-[221px]" />
                </div>
                <div className="md:pl-4">
                  <h2 className=" text-white md:text-[32px] text-[28px]  font-bold">
                    Trending songs{" "}
                    <span className="text-[#EE10B0] text-[25px]">mix</span>
                  </h2>
                  <p className=" text-white md:text-[22px] text-[18px]  md:py-[44px] py-3">
                    tate mcree, nightmares, the neighberhood, doja cat and ...
                  </p>
                  <div className="flex justify-between items-center w-[250px] text-white">
                    <p>20 songs</p>
                    <img src={pdot} alt="pd" />
                    <p>1h 36m</p>
                    <img
                      src={bplay}
                      alt="bplay"
                      className=" w-8 h-10 md:w-10 md:h-12 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-10">
            <div className="flex justify-end gap-5 pt-5">
              <div>
                <p className="text-[20px] text-white">Time</p>
              </div>
              <div>
                <p className="text-[20px] text-white pr-4">More</p>
              </div>
            </div>
            {data1.map((item, index) => (
              <div key={index}>
                <div className="pt-[15px]">
                  <div key={index} className="grid grid-cols-2 px-2 ">
                    <div className="flex">
                      <div>
                        <img
                          src={item.image}
                          alt="m1"
                          className="w-[60px] h-[60px] rounded-[5px] border"
                        />
                      </div>
                      <div className="pl-[23px] ">
                        <p className="text-white md:text-[20px] text-[18px] pt-1">
                          {item.head}
                        </p>
                        <p className="text-white text-[12px] pt-0.5">
                          {item.para}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end gap-12.5">
                      <div>
                        <p className="text-white text-[16px]">{item.ptime}</p>
                      </div>
                      <div>
                        <img src={item.oimage} alt="op" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mt-10 p-4 ">
          <div className="flex flex-col">
            <img src={bhome} alt="bh" className="w-[43px] h-[52px]" />
            <p className="text-[14px] text-[#0E9EEF] pt-2">Home</p>
          </div>
          <div className="flex flex-col">
            <img src={bdis} alt="bh" />
            <p className="text-[14px] text-[#0E9EEF] pt-2">Discover</p>
          </div>
          <div className="flex flex-col">
            <img src={balbum} alt="bh" />
            <p className="text-[14px] text-[#0E9EEF] pt-2">Albums</p>
          </div>
          <div className="flex flex-col" onClick={() => navigate("/artist")}>
            <img src={bartist} alt="bh" className="w-[39px] h-[44px]" />
            <p className="text-[14px] text-[#0E9EEF] pt-2">Artist</p>
          </div>
          <div className="flex flex-col">
            <img src={blib} alt="bh" />
            <p className="text-[14px] text-[#0E9EEF] pt-2">Library</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albums;

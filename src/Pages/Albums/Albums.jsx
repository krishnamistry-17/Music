import React, { useEffect, useState } from "react";
import recent from "../../assets/svgs/recent.svg";
import most from "../../assets/svgs/most.svg";
import fav from "../../assets/svgs/fav.svg";
import addplay from "../../assets/svgs/addplay.svg";
import setting from "../../assets/svgs/setting.svg";
import logout from "../../assets/svgs/logout.svg";
import back from "../../assets/svgs/blueback.svg";
import whiteback from "../../assets/svgs/whitearrow.svg";
import profile from "../../assets/svgs/profile.svg";
import pdot from "../../assets/svgs/pdot.svg";
import play from "../../assets/svgs/play.svg";
import bplay from "../../assets/svgs/bplay.svg";
import bhome from "../../assets/svgs/bhome.svg";
import bartist from "../../assets/svgs/artb.svg";
import bdisc from "../../assets/svgs/bdisc.svg";
import albumb from "../../assets/svgs/albumb.svg";
import discb from "../../assets/svgs/discb.svg";
import eminem from "../../assets/svgs/eminem.svg";
import phome from "../../assets/svgs/phome.svg";
import pdisc from "../../assets/svgs/pdisc.svg";
import palbum from "../../assets/svgs/palbum.svg";
import plib from "../../assets/svgs/plib.svg";
import part from "../../assets/svgs/part.svg";
import song from "../../assets/images/song.png";
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { MdWorkspacePremium } from "react-icons/md";
import Song from "./Song";
import bluedot from "../../assets/svgs/bluedot.svg";
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
import { useLocation } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const Albums = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2);
  const navigate = useNavigate();
  const location = useLocation();
  const [visibleContent, setVisibleContent] = useState();
  console.log("visibleContent :", visibleContent);

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

  // const getTextColor = (item, isActive) => {
  //   if (item.name === "Add Playlist" && isActive) return "text-blue";
  //   if (item.name === "Logout" && isActive) return "text-darkpink";
  //   return "text-white";
  // };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const updateContent = () => {
      const width = window.innerWidth;
      if (width >= 425) setVisibleContent(425);
      else setVisibleContent(320);
    };
    updateContent();
    window.addEventListener("resize", updateContent);
    return () => window.removeEventListener("resize", updateContent);
  }, []);

  return (
    <div>
      <div className="lg:flex hidden   ">
        {/* Sidebar */}
        <SideBar />

        {/* Main content area (grid content, header, songs, footer) */}
        <div className="lg:ml-[300px] mr-[20px]">
          <div className="w-full bg-gradient-to-r from-blue to-lightblue mt-[25px] rounded-tr-[7px] rounded-tl-[7px]">
            <div className="flex justify-between items-center py-[30px] pr-[31px] pl-[10px]">
              <div>
                <img
                  src={whiteback}
                  alt="back"
                  className="w-[50px] h-[50px] text-white"
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
                <img src={profile} alt="pf" className="md:pl-[37px]" />
              </div>
            </div>
            <div className="lg:flex justify-between items-center">
              <div className="lg:flex pl-[43px] gap-14 md:w-[712px]">
                <div>
                  <img src={song} alt="song" />
                </div>
                <div>
                  <h2 className=" text-white md:text-[40px] font-Vazirmatn-800 text-[22px] ">
                    Trending songs{" "}
                    <span className="text-darkpink text-[40px] font-Vazirmatn-800">
                      mix
                    </span>
                  </h2>
                  <p className=" text-white text-[20px] font-Vazirmatn-600 py-[44px]">
                    tate mcree, nightmares, the neighberhood, doja cat and ...
                  </p>
                  <div className="flex justify-between items-center w-[204px] pb-10">
                    <p className="text-white font-Vazirmatn-600 text-[20px]">
                      20 songs
                    </p>
                    <img src={pdot} alt="pd" />
                    <p className="text-white font-Vazirmatn-600 text-[20px]">
                      1h 36m
                    </p>
                  </div>
                </div>
              </div>
              <div className=" lg:pt-[220px] flex gap-4 md:pl-0 pl-10 pt-4 pr-8 pb-10">
                <p className="text-[24px] text-darkpink font-Vazirmatn-600 pt-4">
                  Play All
                </p>
                <img src={play} alt="play" />
              </div>
            </div>
          </div>

          {/* Songs */}
          <div className="bg-gradient-to-r from-darkblue to-lightestblue pt-8">
            <Song />
          </div>

          {/* Footer */}
        </div>
      </div>

      {/*Mobile */}
      <div className="lg:hidden">
        <div className=" flex justify-between items-center px-4 py-2  sticky top-0 bg-blackbg">
          <img
            src={back}
            alt="back"
            className=" text-bluearrow w-[35px] h-[35px]"
          />
          <h2 className="text-[32px] font-Vazirmatn-800 bg-gradient-to-r from-blue to-darkpink text-transparent bg-clip-text">
            Album
          </h2>
          <button onClick={handleToggle}>
            {" "}
            <IoMenu className="text-darkpink w-[35px] h-[35px]" />
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
          <div className=" w-full h-fit pb-6 shadow-lg  bg-gradient-to-r from-blue to-lightblue ">
            <div className="lg:flex justify-between items-center">
              <div
                className={`${
                  visibleContent >= 425 ? "flex p-5" : "block p-5"
                }`}
              >
                <div>
                  <img
                    src={song}
                    alt="song"
                    className={`${
                      visibleContent >= 425 ? " w-[160px]" : "w-[200px] mx-8"
                    }`}
                  />
                </div>
                <div className="md:pl-4 pl-3 pt-[27px] mx-8">
                  <h2 className=" text-white font-Vazirmatn-700 text-[20px] ">
                    The Eminem Show
                  </h2>
                  <div className="flex gap-2.5 pt-4">
                    <img src={eminem} alt="em" className="w-[36px] h-[36px]" />
                    <p
                      className="text-white text-[16px] font-Vazirmatn-600 pt-1.5
                    "
                    >
                      Eminem
                    </p>
                  </div>
                  <div className="flex  items-center gap-4 pt-4">
                    <p className="text-white text-[14px] font-Vazirmatn-800">
                      20 songs
                    </p>
                    <img src={bluedot} alt="pd" />
                    <p className="text-white text-[14px] font-Vazirmatn-800">
                      1h 36m
                    </p>
                    <img
                      src={bplay}
                      alt="bplay"
                      className=" w-[35px] h-[35px] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-darkblue to-lightestblue">
            <Song />
          </div>
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
                      className={`text-[12px] pt-[13px] ${
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

export default Albums;

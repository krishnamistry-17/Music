import React, { useEffect, useState } from "react";
import logoutbtn from "../../assets/svgs/logout.svg";
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
import { data, Link, useNavigate } from "react-router-dom";
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
import { useAuth } from "../Context/AuthContext";
import Menu from "../SideBar/Menu";
import Song from "./Song";
import AudioMusic from "../Home/AudioMusic";
import { useAlbum } from "../Context/AlbumContext";

import { useParams } from "react-router-dom";
import AlbumPlay from "./AlbumPlay";
import SmallFooter from "../Footer/SmallFooter";

const Albums = () => {
  const { id } = useParams();
  const { selectedAlbum, album: allAlbums, setAlbum } = useAlbum();

  const [activeIndex, setActiveIndex] = useState(2);
  const navigate = useNavigate();
  const location = useLocation();
  const [visibleContent, setVisibleContent] = useState();
  const { isLoggedIn, isGoogleLogin, userProfile, logout } = useAuth();
  const [isdisplayDetail, setDisplayDetail] = useState();

  const [currentAlbum, setCurrentAlbum] = useState(null);


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
        { img: bhome, activeimg: phome, name: "Home", path: "/" },
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
      if (width >= 425 && width <= 992) setVisibleContent(425);
      else setVisibleContent(320);
    };
    updateContent();
    window.addEventListener("resize", updateContent);
    return () => window.removeEventListener("resize", updateContent);
  }, []);

  useEffect(() => {
    if (Array.isArray(allAlbums)) {
      const foundAlbum = allAlbums.find((album) => album._id === id);
      if (foundAlbum) {
        setCurrentAlbum(foundAlbum);
      }
    }
  }, [id, allAlbums]);

  const handleBack = () => {
    navigate("/");
  };

  const handlePlayAll = () => {};

  return (
    <div>
      <div className="lg:flex hidden ">
        {/* Sidebar */}

        <div>
          <SideBar />
        </div>
        {/* Main content area (grid content, header, songs, footer) */}
        <div className=" mr-[20px]">
          <div className="w-full bg-gradient-to-r from-blue to-lightblue mt-[25px] rounded-tr-[7px] rounded-tl-[7px]">
            <div className="flex justify-between items-center py-[30px] pr-[31px] pl-[10px]">
              <div>
                <img
                  src={whiteback}
                  onClick={handleBack}
                  alt="back"
                  className="w-[50px] h-[50px] text-white"
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

                  {/* <img src={profile} alt="pf" className="md:pl-[37px]" /> */}
                </div>
                {(isLoggedIn || isGoogleLogin) && (
                  <div>
                    <button onClick={() => setDisplayDetail(!isdisplayDetail)}>
                      <img
                        // src={userProfile?.image || profile}
                        src={profile}
                        alt="Profile"
                        className="w-[40px] h-[40px] rounded-full object-cover"
                      />
                      <h2 className="text-white">{"User"}</h2>

                      {isdisplayDetail && (
                        <div className="absolute top-[190px] right-5 bg-black border border-gray-700 rounded-md shadow-md w-[140px] z-50">
                          <div className="p-3 text-white text-[14px] font-Vazirmatn-400">
                            <div className="flex items-center gap-2 mb-2">
                              <img
                                src={profile}
                                alt="pf"
                                className="w-[20px] h-[20px]"
                              />
                              <p className="text-white pt-1.5 ">User Detail</p>
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
            </div>

            <div className="lg:flex justify-between items-center">
              <div className="lg:flex pl-[43px] gap-14 md:w-[712px]">
                <div>
                  <img
                    src={currentAlbum?.albumImages?.[0] || song}
                    alt="song"
                    className="w-[300px] h-[239px]"
                  />
                </div>
                <div>
                  <h2 className=" text-white md:text-[40px] font-Vazirmatn-800 text-[22px] ">
                    Trending songs{" "}
                    <span className="text-darkpink text-[40px] font-Vazirmatn-800">
                      mix
                    </span>
                  </h2>
                  <p className=" text-white text-[20px] font-Vazirmatn-600 py-[44px] ">
                    {currentAlbum?.artistId?.bio ||
                      "tate mcree, nightmares, the neighberhood, doja cat and ..."}
                  </p>
                  <div className="flex justify-between items-center w-[204px] pb-10">
                    <p className="text-white font-Vazirmatn-600 text-[20px]">
                      {currentAlbum?.songs?.length || 2} songs
                    </p>
                    <img src={pdot} alt="pd" />
                    <p className="text-white font-Vazirmatn-600 text-[20px]">
                      1h 36m
                    </p>
                  </div>
                </div>
              </div>
              <div
                className=" lg:pt-[220px] flex gap-4 md:pl-0 pl-10 pt-4 pr-8 pb-10"
                onClick={() => handlePlayAll()}
              >
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
        </div>
      </div>

      {/*Mobile */}
      <div className="lg:hidden">
        <div className=" flex justify-between items-center px-4 py-2  sticky top-0 z-50 bg-blackbg">
          <img
            onClick={handleBack}
            src={back}
            alt="back"
            className=" text-bluearrow w-[35px] h-[35px]"
          />
          <h2 className="text-[32px] font-Vazirmatn-800 bg-gradient-to-r from-blue to-darkpink text-transparent bg-clip-text">
            Albums
          </h2>
          <div>
            <Menu />
          </div>
        </div>

        <div>
          <div className=" w-full h-fit pb-6 shadow-lg  bg-gradient-to-r from-blue to-lightblue ">
            <div className="lg:flex justify-between items-center">
              <div
                className={`${
                  visibleContent >= 425 && visibleContent <= 992
                    ? "flex p-5"
                    : " p-5"
                }`}
              >
                <div>
                  <img
                    src={currentAlbum?.albumImages?.[0] || song}
                    alt="song"
                    className={`${
                      visibleContent >= 425 ? " w-[160px]" : "w-[200px] mx-8"
                    }`}
                  />
                </div>
                <div className="md:pl-4 pl-3 pt-[27px] mx-8">
                  <p className=" text-white font-Vazirmatn-700 text-[12px] truncate sm:block hidden">
                    {currentAlbum?.artistId?.bio || "The Eminem Show"}
                  </p>
                  <div className="flex gap-2.5 pt-4">
                    <img
                      src={currentAlbum?.albumImages?.[0] || song}
                      alt="em"
                      className="w-[36px] h-[36px] rounded-md"
                    />
                    <p
                      className="text-white text-[16px] font-Vazirmatn-600 pt-1.5
                    "
                    >
                      {currentAlbum?.artistId?.name || "Eminem"}
                    </p>
                  </div>
                  <div className="flex  items-center gap-4 pt-4">
                    <p className="text-white text-[14px] font-Vazirmatn-800">
                      {currentAlbum?.songs?.length || 2} songs
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
          <div
            className="bg-gradient-to-r from-darkblue to-lightestblue"
            style={{ height: "calc(100vh - 64px)", scrollbarWidth: "none" }}
          >
            <Song />
          </div>
        </div>

        {(isLoggedIn || isGoogleLogin) && (
          <div className="fixed bottom-24 left-0 right-0   bg-[#252525] rounded-md z-auto border-t border-gray-700 lg:hidden">
            <AlbumPlay />
          </div>
        )}

        <div className=" lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-blackbg">
          <SmallFooter />
        </div>
      </div>
    </div>
  );
};

export default Albums;

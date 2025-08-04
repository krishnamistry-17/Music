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
import { data, Link, useNavigate, useParams } from "react-router-dom";
import Popular from "./Popular";
import ArtAlbum from "./ArtAlbum";
import SingleSong from "./SingleSong";
import ArtistPlay from "./ArtistPlay";
import Fans from "./Fans";
import { useLocation } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useAuth } from "../Context/AuthContext";
import Menu from "../SideBar/Menu";
import { useArtist } from "../Context/ArtistContext";
import SmallFooter from "../Footer/SmallFooter";
import PlayArtist from "./PlayArtist";
import { usePlayerSource } from "../Context/PlayerSourceContext";
import play from "../../assets/svgs/play.svg";
import pdot from "../../assets/svgs/pdot.svg";

const Artist = () => {
  const { id } = useParams();
  const { album: allAlbums, currentAlbum, setCurrentAlbum } = useArtist();
  console.log("currentAlbum :", currentAlbum);
  console.log("allAlbums :", allAlbums);
  const { source, setSource } = usePlayerSource();
  const { isLoggedIn, isGoogleLogin, logout } = useAuth();
  const [isdisplayDetail, setDisplayDetail] = useState();
  const { isPlaying } = useArtist();
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!id) {
      setSource("popular");
    }
  }, [id]);

  useEffect(() => {
    if (Array.isArray(allAlbums)) {
      const foundAlbum = allAlbums.find((album) => album._id === id);

      if (foundAlbum) {
        setCurrentAlbum(foundAlbum);
      }
    }
  }, [id, allAlbums]);

  const defaultArtistId = "6864dad3bd26de96324855c8";

  const defaultAlbum = allAlbums.find(
    (albumid) => albumid?._id === defaultArtistId
  );

  const image = defaultAlbum?.artistImage || [];
  const defaultImage = image;

  return (
    <div>
      <div className="lg:flex hidden ">
        {/* Sidebar */}
        <div>
          <SideBar />
        </div>
        {/* Main content area (grid content, header, songs, footer) */}
        <div className="pl-[32px] px-3">
          <div className=" w-full  bg-gradient-to-r from-blackbg to-black mt-[25px] rounded-tr-[7px] rounded-tl-[7px]">
            <div className="flex justify-between items-center py-[30px] pr-[31px] pl-[10px]">
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
                <div>
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
              </div>
            </div>
            <div className="lg:flex justify-between items-center">
              <div className="lg:flex pl-[43px] gap-14 md:w-[712px]">
                <div>
                  <img
                    src={currentAlbum?.artistImage?.[0] || defaultImage}
                    alt="artistimage"
                    className="w-[300px] h-[239px]"
                  />
                </div>
                <div>
                  <h2 className="text-white text-[66px] font-Vazirmatn-900">
                    {currentAlbum?.name || "Eminem"}
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
              <div className=" lg:pt-[220px] flex gap-4 md:pl-0 pl-10 pt-4 pr-8 pb-10">
                <p className="text-[24px] text-darkpink font-Vazirmatn-600 pt-4">
                  Play All
                </p>
                <img src={play} alt="play" />
              </div>
            </div>
          </div>

          <div className=" col-span-2 row-span-2 lg:block hidden mt-15">
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

        <div
          style={{
            height: "calc(100vh - 64px)",
            scrollbarWidth: "none",
            overflowY: "auto",
            paddingBottom: "220px",
          }}
        >
          <div>
            <img
              src={currentAlbum?.artistImage?.[0] || defaultImage}
              alt="art"
              className=" rounded-[10px] pt-8  px-2 relative z-0 "
            />
            <div className=" flex gap-4 justify-end items-center px-4 relative z-10 bottom-13">
              <h2 className="text-white sm:text-[32px] text-[25px] font-Vazirmatn-800">
                {currentAlbum?.name || " Eminem"}
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
        </div>
        {(isLoggedIn || isGoogleLogin) && (
          <div className="fixed bottom-25 left-0 right-0 z-40  bg-[#252525] rounded-md  border-t border-gray-700 lg:hidden">
            {source === "popular" && <PlayArtist />}
          </div>
        )}
        <div className=" fixed bottom-0 left-0 right-0 z-auto ">
          <SmallFooter />
        </div>
      </div>
    </div>
  );
};

export default Artist;

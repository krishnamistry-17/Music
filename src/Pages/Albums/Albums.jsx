import React, { useEffect, useState } from "react";
import back from "../../assets/svgs/blueback.svg";
import pdot from "../../assets/svgs/pdot.svg";
import play from "../../assets/svgs/play.svg";
import bplay from "../../assets/svgs/bplay.svg";
import song from "../../assets/images/song.png";
import { useNavigate } from "react-router-dom";
import bluedot from "../../assets/svgs/bluedot.svg";
import { useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Menu from "../SideBar/Menu";
import Song from "./Song";
import { useAlbum } from "../Context/AlbumContext";
import { useParams } from "react-router-dom";
import AlbumPlay from "./AlbumPlay";
import SmallFooter from "../Footer/SmallFooter";
import HomeNav from "../Home/HomeNav";
import { usePlayList } from "../Context/AddPlayListContext";
import { toast } from "react-toastify";

const Albums = () => {
  const { id } = useParams();
  const { album: allAlbums, setAlbum } = useAlbum();
  const [activeIndex, setActiveIndex] = useState(2);
  const navigate = useNavigate();
  const location = useLocation();
  const [visibleContent, setVisibleContent] = useState();
  const { isLoggedIn, isGoogleLogin } = useAuth();

  const [currentAlbum, setCurrentAlbum] = useState(null);

  const { playlistSongs, setPlaylistSongs } = usePlayList();

  const addSongToPlaylist = (song) => {
    if (isLoggedIn || isGoogleLogin) {
      if (!playlistSongs.find((s) => s._id === song._id)) {
        setPlaylistSongs((prev) => [...prev, song]);
        toast.success("Song added to playlist..");
      } else {
        toast.warn("Please Log in");
      }
    } else {
      toast.info("Song is already in playlist");
    }
  };

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
        {/* Main content area (grid content, header, songs, footer) */}
        <div className=" xl:px-10 ">
          <div className="w-full bg-gradient-to-r from-blue to-lightblue mt-[25px] rounded-tr-[7px] rounded-tl-[7px]">
            <div className="py-[30px] flex justify-between items-center w-full">
              <HomeNav />
            </div>

            <div className="lg:flex justify-between items-center">
              <div className="lg:flex pl-[43px] gap-14 md:w-[680px]">
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
              <div className="lg:pt-[220px]  md:pl-0 xl:pl-10 pt-4 xl:pr-8 pr-3 pb-10 lg:block hidden">
                <div
                  className="  flex items-center xl:gap-3"
                  onClick={() => handlePlayAll()}
                >
                  <p className="text-[24px] text-darkpink font-Vazirmatn-600 pt-4">
                    Play All
                  </p>
                  <img
                    src={play}
                    alt="play"
                    className="xl:w-[60px] xl:h-[68px] w-[41px] h-[38px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Songs */}
          <div className="bg-gradient-to-r from-darkblue to-lightestblue pt-8">
            <Song onAddSong={addSongToPlaylist} playlistSongs={playlistSongs} />
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
                  <div className="flex items-center gap-2">
                    <div className="flex  items-center gap-4 pt-4">
                      <p className="text-white text-[14px] font-Vazirmatn-800">
                        {currentAlbum?.songs?.length || 2} songs
                      </p>
                      <img src={bluedot} alt="pd" />
                      <p className="text-white text-[14px] font-Vazirmatn-800">
                        1h 36m
                      </p>
                    </div>
                    <div>
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
          </div>
          <div
            className="bg-gradient-to-r from-darkblue to-lightestblue"
            style={{
              height: "calc(100vh - 64px)",
              scrollbarWidth: "none",
              overflowY: "auto",
              paddingBottom: "220px",
            }}
          >
            <Song onAddSong={addSongToPlaylist} playlistSongs={playlistSongs} />
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

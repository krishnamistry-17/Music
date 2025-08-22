import React, { useEffect, useState } from "react";
import bback from "../../assets/svgs/blueback.svg";
import right from "../../assets/svgs/right.svg";
import artist from "../..//assets/images/artist.png";
import { data, Link, useNavigate, useParams } from "react-router-dom";
import Popular from "./Popular";
import ArtAlbum from "./ArtAlbum";
import SingleSong from "./SingleSong";
import ArtistPlay from "./ArtistPlay";
import Fans from "./Fans";
import { useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Menu from "../SideBar/Menu";
import { useArtist } from "../Context/ArtistContext";
import SmallFooter from "../Footer/SmallFooter";
import PlayArtist from "./PlayArtist";
import { usePlayerSource } from "../Context/PlayerSourceContext";
import play from "../../assets/svgs/play.svg";
import pdot from "../../assets/svgs/pdot.svg";
import HomeNav from "../Home/HomeNav";
import { usePlayList } from "../Context/AddPlayListContext";
import { toast } from "react-toastify";

const Artist = () => {
  const { id } = useParams();
  const {
    album: allAlbums,
    followedArtistDetail,
    followedArtist,
    setFollowedArtist,
  } = useArtist();

  const { source, setSource } = usePlayerSource();
  const { isLoggedIn, isGoogleLogin, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [currentAlbum, setCurrentAlbum] = useState(null);
  console.log("currentAlbum :", currentAlbum);

  const { playlistSongs, setPlaylistSongs } = usePlayList();

  const addSongToPlaylist = (song) => {
    if (!playlistSongs.find((s) => s._id === song._id)) {
      setPlaylistSongs((prev) => [...prev, song]);
      toast.success("Song added to playlist..");
    } else {
      toast.info("Song is already in playlist");
    }
  };

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

  return (
    <div>
      <div className="lg:flex hidden ">
        {/* Sidebar */}

        {/* Main content area (grid content, header, songs, footer) */}
        <div className="xl:pl-[32px]">
          <div className=" w-full  bg-gradient-to-r from-blackbg to-black mt-[25px] rounded-tr-[7px] rounded-tl-[7px]">
            <div className="py-[30px]">
              <HomeNav />
            </div>
            <div className="lg:flex justify-between items-center">
              <div className="lg:flex pl-[43px] gap-14 md:w-[680px]">
                <div>
                  <img
                    src={currentAlbum?.artistImage?.[0] || artist}
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
              <div className="lg:block hidden lg:pt-[220px] md:pl-0 pl-10 pt-4 xl:pr-8 pb-10">
                <div className="  flex items-center xl:gap-3">
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

          <div className=" col-span-2 row-span-2 lg:block hidden mt-15">
            <Popular
              onAddSong={addSongToPlaylist}
              playlistSongs={playlistSongs}
            />
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
              src={currentAlbum?.artistImage?.[0] || artist}
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
            <Popular
              onAddSong={addSongToPlaylist}
              playlistSongs={playlistSongs}
            />
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

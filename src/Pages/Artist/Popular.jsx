import React, { useEffect, useState } from "react";
import dotp from "../../assets/svgs/dotp.svg";
import pfav from "../../assets/svgs/pfav.svg";
import pfull from "../../assets/svgs/pffav.svg";
import plus from "../../assets/svgs/plus.svg";
import artist from "../../assets/svgs/artist.svg";
import { CiSaveUp1 } from "react-icons/ci";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoMdShare } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, removeFromFavourites } from "../Redux/Action/action";
import { useAuth } from "../Context/AuthContext";
import { useFav } from "../Context/FavContext";
import { toast } from "react-toastify";
import { useArtist } from "../Context/ArtistContext";
import { useNavigate, useParams } from "react-router-dom";
import { useAlbum } from "../Context/AlbumContext";
import { usePlayerSource } from "../Context/PlayerSourceContext";

const Popular = () => {
  const {
    setSelectedArtist,
    isPlaying,
    setIsPlaying,
    selectedArtistId,
    setSelectedArtistId,
    currentAlbum,
    setCurrentAlbum,
  } = useArtist();
  const { album } = useAlbum();

  const { id } = useParams();
  const { setSource } = usePlayerSource();
  const [activeIndex, setActiveIndex] = useState(0);

  const { isGoogleLogin, isLoggedIn } = useAuth();
  const { selectedId, setSelectedId } = useFav();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favorites = useSelector((state) => state.favorites);

  const data1 = [
    {
      id: 0,

      head: "Sorfcore",
      para: " Eminem",
      rdate: "Nov 4, 2023",
      album: " Hard to Imagine Neighbourhood Ever Changing",
      fimg: pfav,
      ffull: pfull,
      ptime: "3:26",
      oimage: dotp,
    },
    {
      id: 1,

      head: "Skyfall Beats",
      para: " Eminem",
      rdate: "Oct 26, 2023",
      album: "nightmares",
      fimg: pfav,
      ffull: pfull,
      ptime: "2:45",
      oimage: dotp,
    },
    {
      id: 2,

      head: "Greedy",
      para: " Eminem",
      rdate: "Nov 30, 2023",
      album: "Greedy",
      fimg: pfav,
      ffull: pfull,
      ptime: "2:11",
      oimage: dotp,
    },
    {
      id: 3,

      head: "Lovin On me",
      para: " Eminem",
      rdate: "Dec 15, 2023",
      album: "Lovin On me",
      fimg: pfav,
      ffull: pfull,
      ptime: "2:18",
      oimage: dotp,
    },
    {
      id: 4,

      head: "pain the town red",
      para: " Eminem",
      rdate: "Dec 29, 2023",
      album: "Paint The Town Red",
      fimg: pfav,
      ffull: pfull,
      ptime: "3:51",
      oimage: dotp,
    },
    {
      id: 5,

      head: "Dancin On Night",
      para: "Eminem",
      rdate: "may 27, 2023",
      album: "Dance The Night(From Barbie Movie)",
      fimg: pfav,
      ffull: pfull,
      ptime: "2:56",
      oimage: dotp,
    },
    {
      id: 6,

      head: "Dancin On Night",
      para: "Eminem",
      rdate: "may 27, 2023",
      album: "Dance The Night(From Barbie Movie)",
      fimg: pfav,
      ffull: pfull,
      ptime: "2:56",
      oimage: dotp,
    },
  ];

    useEffect(() => {
      localStorage.setItem(
        "accessToken",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NjM2ZTY1ZjRjYTNkYjIxNzcwMjg5YSIsImlhdCI6MTc1NDA1MjMwNywiZXhwIjoxNzU0MTM4NzA3fQ.5jEeWa51qYK4n-LNK-yMs0errkZBFyA7wm89AAjxQ8s"
      );
    }, []);

  useEffect(() => {
    if (!id) {
      setSource("popular");
    }
  }, [id]);

  useEffect(() => {
    if (id && Array.isArray(album)) {
      const foundAlbum = album.find((item) => item._id === id);

      if (foundAlbum && foundAlbum?.songs?.length > 0) {
        setSelectedArtist(foundAlbum.songs);

        setSelectedArtistId(0);
        setCurrentAlbum(foundAlbum);
        setSource("popular");

        setTimeout(() => setIsPlaying(false), 200);
      }
    }
  }, [id, album]);

  //matched id of url and artist id from album api
  const matchId = Array.isArray(album)
    ? album.find((fid) => fid.artistId._id === id)
    : [];

  //fetch song from list
  const songsList = matchId?.songs || null;

  const defaultArtistId = "6864dad3bd26de96324855c8";
  const defaultAlbum = album.find(
    (album) => album.artistId._id === defaultArtistId
  );
  const songs = defaultAlbum?.songs || [];
  const defaultSong = songs;

  const songToDisplay = songsList || defaultSong;

  const handleSelect = (index) => {
    if (!isLoggedIn && !isGoogleLogin) {
      toast.warn("Please Log In To Play Music.");
      return;
    }

    const song = songToDisplay?.[index];
    if (!song?.cloudinaryUrl) {
      toast.warn("This song has no playable audio.");
      return;
    }

    setSelectedArtist(songToDisplay || []);
    setSelectedArtistId(index);
    setIsPlaying(true);
  };

  const handleClick = (song) => {
    if (!isGoogleLogin && !isLoggedIn) {
      toast.warn("Please log in to add favorites");
      return;
    }
    if (selectedId === song._id) {
      dispatch(removeFromFavourites(song));
      setSelectedId(null);
      toast.success("Song removed from favourites..");
    } else {
      dispatch(addFavorites(song));
      setSelectedId(song._id);
      toast.success("Song added to favorites");
    }
  };

  useEffect(() => {
    if (!id && album.length > 0) {
      const defaultAlbum = album.find(
        (a) => a._id === "6864dad3bd26de96324855c8"
      );
      if (defaultAlbum) {
        setSelectedArtist(defaultAlbum.songs || []);
        setSelectedArtistId(0);
      }
    }

    if (id && Array.isArray(album)) {
      const found = album.find((album) => album._id === id);
      if (found) {
        setCurrentAlbum(found);
        setSelectedArtist(found?.songs || []);
        setSelectedArtistId(0);
        setIsPlaying(true);
        setSource("popular");
      }
    }
  }, [id, album]);

  const togglePlay = () => setIsPlaying((p) => !p);

  return (
    <div>
      <div className="md:px-5 px-1">
        <p className="text-white text-[40px] font-Vazirmatn-800 lg:block hidden">
          Popular{" "}
        </p>
        <p className="text-white text-[24px] font-Vazirmatn-700 lg:hidden pl-4">
          Popular <span className="text-darkpink">Songs</span>{" "}
        </p>
        <div className="flex justify-between items-end md:px-15 ">
          <div>
            <p></p>
          </div>
          <div>
            <p className="text-[20px] font-Vazirmatn-400 text-white lg:block hidden">
              Relase Date
            </p>
          </div>
          <div>
            <p className="text-[20px] text-white font-Vazirmatn-400 lg:block hidden">
              Played
            </p>
          </div>
          <div>
            <p className="text-[20px] text-white font-Vazirmatn-400 lg:block hidden">
              Time
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-8 pt-5 lg:hidden">
          <div>
            <p className="text-[16px] text-white font-Vazirmatn-600">Time</p>
          </div>
          <div>
            <p className="text-[16px] text-white font-Vazirmatn-600 pr-3">
              More
            </p>
          </div>
        </div>

        <div className="flex pt-[15px] mt-[-17px] px-3">
          <div className="flex flex-col items-center md:mr-4 mr-3">
            {songToDisplay?.map((_, index) => (
              <p className="lg:text-[24px] text-[16px] font-Vazirmatn-600 text-white lg:py-[21px] py-[29px]">
                <div key={index} className="flex items-center gap-3 py-2">
                  {(isLoggedIn || isGoogleLogin) && (
                    <div
                      onClick={() => {
                        togglePlay();
                        setSelectedArtistId(index);
                      }}
                    >
                      {selectedArtistId === index ? (
                        isPlaying ? (
                          <FaPause className="text-white md:w-[20px] md:h-[20px]" />
                        ) : (
                          <FaPlay className="text-white md:w-[20px] md:h-[20px]" />
                        )
                      ) : (
                        <p className="lg:text-[24px] text-[16px] font-Vazirmatn-600 text-white">
                          {index + 1}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </p>
            ))}
          </div>

          <div className="pb-[15px] pt-[15px] grid grid-cols-1 w-full">
            {songToDisplay?.map((item, index) => {
              const extra = data1[index];
              return (
                <div key={item._id || index}>
                  <>
                    <div
                      key={item._id || index}
                      className="sm:grid grid-cols-4 gap-6 bg-[#1E1E1E] relative mb-4 hidden"
                      onClick={() => handleSelect(index)}
                    >
                      {/*SongImage +  title + artis */}
                      <div className="flex">
                        <img
                          src={item?.songImage?.[0]}
                          alt="m1"
                          className="w-[60px] h-[60px] rounded-[5px] border"
                        />
                        <div className="md:pl-[23px] pl-1 md:py-[5px] pt-[11px]">
                          <p className="text-white md:text-[20px] font-Vazirmatn-600 text-[15px] truncate ">
                            {item?.title}
                          </p>
                          <p className="text-white text-[12px] font-Vazirmatn-300 ">
                            {currentAlbum?.name || extra.para}
                          </p>
                        </div>
                      </div>

                      {/**Release date */}
                      <div>
                        <p className="text-white text-[16px] font-Vazirmatn-400 py-[17.5px] lg:block hidden">
                          {currentAlbum?.createdAt?.split("T")[0] ||
                            extra.rdate}
                        </p>
                      </div>

                      {/**album title */}
                      <div>
                        <p className="text-white text-[16px] font-Vazirmatn-400 py-[17.5px] truncate lg:block hidden">
                          {currentAlbum?.bio || extra.album}
                        </p>
                      </div>

                      {/*Favorite + duuration + option */}
                      <div className="flex justify-end lg:gap-2.5 gap-8 py-[17.5px] pr-[9px]">
                        <div onClick={() => handleClick(item)}>
                          {isLoggedIn || isGoogleLogin ? (
                            <img
                              src={
                                favorites.some((fav) => fav._id === item._id)
                                  ? extra?.ffull
                                  : extra?.fimg
                              }
                              alt="fav"
                              className=" w-[24.24px] h-[25px]"
                            />
                          ) : (
                            <img src={extra?.fimg} alt="fav" />
                          )}
                        </div>

                        <div>
                          <p className="text-white text-[16px] font-Vazirmatn-400">
                            {item?.duration}
                          </p>
                        </div>

                        <div>
                          <img
                            src={extra?.oimage}
                            alt="op"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedIndex(
                                item._id === selectedIndex ? null : item._id
                              );
                            }}
                            className=" cursor-pointer"
                          />
                          {selectedIndex === item._id && (
                            <div className="bg-[#282828] absolute z-50 top-[60px] right-0 max-w-[350px] max-h-[175px] p-4">
                              <div className="flex gap-2 items-center">
                                <img src={plus} alt="ps" />
                                <p className="text-white text-[17px] font-Vazirmatn-400 pt-1">
                                  Add to your playlist
                                </p>
                                <BiSolidRightArrow className="ml-[5px] w-[22px] h-[22px]" />
                              </div>

                              <div className="flex gap-2 items-center pt-2">
                                <img
                                  src={artist}
                                  alt="ar"
                                  className="text-white w-[22px] h-[22px]"
                                />
                                <p className="text-white text-[17px] font-Vazirmatn-400 pt-1">
                                  Go to Artist
                                </p>
                              </div>
                              <div className="flex gap-2 items-center pt-2">
                                <IoMdShare className="text-white w-[22px] h-[22px]" />
                                <p className="text-white text-[17px] font-Vazirmatn-400 pt-1">
                                  Share
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/*Mobile */}
                    <div className="grid grid-cols-1 gap-4 pt-[12px] sm:hidden">
                      <div
                        className="flex justify-between bg-[#1E1E1E] w-full max-w-full gap-3"
                        onClick={() => handleSelect(index)}
                      >
                        {/* Song info */}
                        <div className="flex">
                          <img
                            src={item?.songImage?.[0]}
                            alt="m1"
                            className="w-[60px] h-[60px] rounded-[5px] border"
                          />
                          <div className="md:pl-[23px] pl-1 md:py-[5px] pt-[11px]">
                            <p className="text-white md:text-[20px] font-Vazirmatn-600 text-[15px] truncate">
                              {item?.title}
                            </p>
                            <p className="text-white text-[12px] font-Vazirmatn-300 pt-0.5 truncate">
                              {currentAlbum?.name}
                            </p>
                          </div>
                        </div>

                        {/* Duration + voption */}
                        <div className="flex justify-end items-center gap-4 relative">
                          <div>
                            <p className="text-white text-[16px] font-Vazirmatn-400">
                              {item?.duration}
                            </p>
                          </div>

                          {/* Options button + dropdown */}
                          <div className="relative">
                            <img
                              src={extra?.oimage}
                              alt="op"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedIndex(
                                  item._id === selectedIndex ? null : item._id
                                );
                              }}
                              className="w-[24px] h-[24px] cursor-pointer"
                            />

                            {/* Dropdown menu */}
                            {selectedIndex === item._id && (
                              <div className="bg-[#282828] absolute z-auto top-[40px] right-0 max-w-[300px] w-[250px] p-4 shadow-lg">
                                <div className="flex gap-2 items-center">
                                  <img src={plus} alt="ps" />
                                  <p className="text-white text-[15px] font-Vazirmatn-400">
                                    Add to your playlist
                                  </p>
                                  <BiSolidRightArrow className="ml-[5px] w-[20px] h-[20px]" />
                                </div>
                                <div
                                  className="flex gap-2 items-center pt-2"
                                  onClick={() => handleClick(item)}
                                >
                                  <CiSaveUp1 className="text-white w-[22px] h-[22px]" />
                                  <p className="text-white text-[17px] font-Vazirmatn-400 pt-1">
                                    Save to favourites
                                  </p>
                                </div>
                                <div className="flex gap-2 items-center pt-2">
                                  <img
                                    src={artist}
                                    alt="ar"
                                    className="w-[20px] h-[20px]"
                                  />
                                  <p className="text-white text-[15px] font-Vazirmatn-400">
                                    Go to Artist
                                  </p>
                                </div>

                                <div className="flex gap-2 items-center pt-2">
                                  <IoMdShare className="text-white w-[20px] h-[20px]" />
                                  <p className="text-white text-[15px] font-Vazirmatn-400">
                                    Share
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center py-6">
        <button className="bg-darkpink px-4 py-[7px] text-white text-[14px] font-Vazirmatn-400 rounded-[4px]">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Popular;

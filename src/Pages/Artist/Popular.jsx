import React, { useEffect, useState } from "react";
import dotp from "../../assets/svgs/dotp.svg";
import pfav from "../../assets/svgs/pfav.svg";
import pfull from "../../assets/svgs/pffav.svg";
import option from "../../assets/svgs/option.svg";
import plus from "../../assets/svgs/plus.svg";
import artistimage from "../../assets/svgs/artist.svg";
import music1 from "../../assets/images/music1.jpg";
import music2 from "../../assets/images/music2.jpg";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoCheckmark } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  getAllArtitst,
  removeFromFavourites,
} from "../Redux/Action/action";
import { useAuth } from "../Context/AuthContext";
import { useFav } from "../Context/FavContext";
import { toast } from "react-toastify";
import { useArtist } from "../Context/ArtistContext";
import { useNavigate, useParams } from "react-router-dom";
import { useAlbum } from "../Context/AlbumContext";
import { usePlayerSource } from "../Context/PlayerSourceContext";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";

const Popular = ({ onAddSong, playlistSongs }) => {
  const {
    setSelectedArtist,
    isPlaying,
    setIsPlaying,
    selectedArtistId,
    setSelectedArtistId,
  } = useArtist();

  const [album, setAlbum] = useState(null);

  const { id } = useParams();
  const { setSource } = usePlayerSource();
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
      image: music1,
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
      image: music2,
      para: " Eminem",
      rdate: "Oct 26, 2023",
      album: "nightmares",
      fimg: pfav,
      ffull: pfull,
      ptime: "2:45",
      oimage: dotp,
    },
  ];

  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        console.warn("No token found, skipping API call");
        setError("Unauthorized: Please login first");
        setLoading(false);
        return;
      }
      try {
        const response = await apiInstance.get(apiRoutes.GET_ALL_ARTIST);
        const albums = response.data.data;
        setData(albums);
        setAlbum(albums);
        // setAllAlbums(albums);
        dispatch(getAllArtitst());

        if (!id && albums.length > 0) {
          setSelectedArtist(albums[0].songs || []);
          setSelectedArtistId(0); // First song
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    if (id && Array.isArray(data)) {
      const foundAlbum = data.find((item) => item._id === id);
      if (
        foundAlbum &&
        Array.isArray(foundAlbum.songs) &&
        foundAlbum.songs.length > 0
      ) {
        const firstSong = foundAlbum.songs[0];

        if (firstSong.cloudinaryUrl) {
          setSelectedArtist(foundAlbum.songs); // Set full song list
          setSelectedArtistId(0); // Select first song
          setSource("popular");
          setIsPlaying(true); // Start playing
        } else {
          toast.warn("First song has no playable audio.");
        }
      }
    }
  }, [id, data]);

  const filteredAlbum = Array.isArray(album)
    ? album?.filter((a) => a._id === id)
    : [];

  const handleSelect = (index) => {
    if (!isLoggedIn && !isGoogleLogin) {
      toast.warn("Please Log In To Play Music.");
      return;
    }

    const song = filteredAlbum?.[0]?.songs?.[0];

    if (!song?.cloudinaryUrl) {
      toast.warn("This song has no playable audio.");
      return;
    }

    setSelectedArtist(filteredAlbum?.[0]?.songs || []);
    setSelectedArtistId(0);
    setSource("popular");
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

  if (!id) {
    const defaultAlbum = album?.find(
      (a) => a._id === "6864cf9a6c6f84ec2f487ebc"
    );

    if (defaultAlbum) {
      navigate(`/artist/${defaultAlbum._id}`, { replace: true });
    } else if (album?.length > 0) {
      navigate(`/artist/${album[0]._id}`, { replace: true }); // fallback
    }
  }
  const togglePlay = () => setIsPlaying((p) => !p);

  const handleAlbum = (albumId) => {
    navigate(`/album/${albumId}`);
  };

  const isAuthenticated = isLoggedIn || isGoogleLogin;

  const songList = isAuthenticated
    ? filteredAlbum?.[0]?.songs || []
    : data1?.map((fallback, i) => ({
        _id: fallback.id,
        title: fallback.head,
        artistName: fallback.para,
        songImage: [fallback.image],
        releaseDate: fallback.rdate,
        duration: fallback.ptime,
        albumName: fallback.albumName,
        fallbackData: fallback,
      }));

  return (
    <div>
      <div className="md:px-5 px-1">
        <p className="text-white text-[40px] font-Vazirmatn-800 lg:block hidden">
          Popular{" "}
        </p>
        <p className="text-white text-[24px] font-Vazirmatn-700 lg:hidden pl-4">
          Popular <span className="text-darkpink">Songs</span>{" "}
        </p>
        <div className="w-full">
          <div className="flex justify-between items-end md:px-3 ">
            <div>
              <p></p>
            </div>
            <div>
              <p className="text-[20px] font-Vazirmatn-400 text-white xl:block hidden">
                Relase Date
              </p>
            </div>
            <div>
              <p className="text-[20px] text-white font-Vazirmatn-400 xl:block hidden">
                Played
              </p>
            </div>
            <div>
              <p className="text-[20px] text-white font-Vazirmatn-400 lg:block hidden">
                Time
              </p>
            </div>
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
          <div className="flex flex-col items-center lg:mt-4 mt-8 md:mr-4 mr-3">
            <div>
              {songList?.map((song, index) => (
                <p
                  key={song._id || index}
                  className="lg:text-[24px] text-[16px] font-Vazirmatn-600 text-white lg:py-[17px] py-[22px]"
                >
                  <div className="flex items-center gap-3 py-2">
                    {isAuthenticated ? (
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
                    ) : (
                      <p className="lg:text-[24px] text-[16px] font-Vazirmatn-600 text-white">
                        {index + 1}
                      </p>
                    )}
                  </div>
                </p>
              ))}
            </div>
          </div>

          <div className="pb-[15px] pt-[15px] grid grid-cols-1 w-full">
            {songList?.map((song, index) => {
              const fallback = song.fallbackData || {};

              const image = song?.songImage?.[0] || fallback?.image;
              const title = song?.title || fallback?.head;
              const artist = song?.artistName || fallback?.para;
              const releaseDate = song?.createdAt || fallback?.rdate;
              const albumName = fallback?.album;
              const duration = song?.duration || fallback?.ptime;

              return (
                <>
                  <div
                    key={song._id || index}
                    className="sm:grid grid-cols-4 gap-6 bg-[#1E1E1E] relative lg:mb-6 mb-8 hidden"
                    onClick={() => handleSelect(index)}
                  >
                    {/* Song Image + Title + Artist */}
                    <div className="flex">
                      <img
                        src={image}
                        alt="m1"
                        className="w-[60px] h-[60px] rounded-[5px] border"
                      />
                      <div className="md:pl-[23px] pl-1 md:py-[5px] pt-[11px]">
                        <p className="text-white md:text-[20px] font-Vazirmatn-600 text-[15px] truncate">
                          {title}
                        </p>
                        <p className="text-white text-[12px] font-Vazirmatn-300 pt-0.5 truncate">
                          {artist || filteredAlbum?.[0]?.name}
                        </p>
                      </div>
                    </div>

                    {/* Release Date */}
                    <div>
                      <p className="text-white text-[16px] font-Vazirmatn-400 py-[17.5px] xl:block hidden">
                        {releaseDate.split("T")[0]}
                      </p>
                    </div>

                    {/* Album Title */}
                    <div>
                      <p className="text-white text-[16px] font-Vazirmatn-400 py-[17.5px] truncate w-[345px] xl:block hidden">
                        {albumName || filteredAlbum?.[0]?.bio}
                      </p>
                    </div>

                    {/* Duration */}
                    <div className="flex justify-end lg:gap-2.5 gap-8 py-[17.5px] pr-[9px]">
                      {/* Favorite icon */}

                      <div onClick={() => handleClick(song)}>
                        <img
                          src={
                            favorites?.some((fav) => fav._id === song._id)
                              ? pfull
                              : pfav
                          }
                          alt="fav"
                          className="w-[24.24px] h-[25px]"
                        />
                      </div>

                      {/* Song Duration */}
                      <div>
                        <p className="text-white text-[16px] font-Vazirmatn-400">
                          {duration}
                        </p>
                      </div>

                      {/* Options Dropdown */}
                      <div>
                        <img
                          src={option}
                          alt="options"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedIndex(
                              song._id === selectedIndex ? null : song._id
                            );
                          }}
                          className="cursor-pointer"
                        />

                        {selectedIndex === song._id && (
                          <div className="bg-[#282828] absolute z-50 top-[60px] right-0 max-w-[350px] max-h-[175px] p-4">
                            <div className="flex gap-2 items-center cursor-pointer">
                              {playlistSongs.some((s) => s._id === song._id) ? (
                                <div className="flex gap-2 items-center">
                                  <IoCheckmark />
                                  <p className="text-white text-[17px] font-Vazirmatn-400 pt-1">
                                    Added to your playlist
                                  </p>
                                  <BiSolidRightArrow className="ml-[5px] w-[22px] h-[22px]" />
                                </div>
                              ) : (
                                <div
                                  className="flex gap-2 items-center"
                                  onClick={() => onAddSong(song)}
                                >
                                  <img src={plus} alt="add" />
                                  <p className="text-white text-[17px] font-Vazirmatn-400 pt-1">
                                    Add to your playlist
                                  </p>
                                  <BiSolidRightArrow className="ml-[5px] w-[22px] h-[22px]" />
                                </div>
                              )}
                            </div>

                            <div
                              className="flex gap-2 items-center pt-2"
                              onClick={() => handleArtist(song._id)}
                            >
                              <img
                                src={artistimage}
                                alt="artist"
                                className="w-[22px] h-[22px]"
                              />
                              <p className="text-white text-[17px] font-Vazirmatn-400 pt-1">
                                Go to Album
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
                  <div className="grid grid-cols-1 relative gap-4 mb-4 pt-[12px] sm:hidden">
                    <div className="flex justify-between items-center bg-[#1E1E1E] w-full max-w-full gap-3">
                      {/* Song info */}
                      <div className="flex">
                        <img
                          src={image}
                          alt="m1"
                          className="w-[60px] h-[60px] rounded-[5px] border"
                        />
                        <div className="md:pl-[23px] pl-1 md:py-[5px] pt-[11px] ">
                          <p className="text-white md:text-[20px] font-Vazirmatn-600 text-[15px] truncate">
                            {title}
                          </p>
                          <p className="text-white text-[12px] font-Vazirmatn-300 pt-0.5 truncate">
                            {artist || filteredAlbum?.[0]?.name}
                          </p>
                        </div>
                      </div>

                      {/* Duration + voption */}
                      <div className="flex justify-end items-center gap-7">
                        <div>
                          <p className="text-white text-[16px] font-Vazirmatn-400">
                            {duration}
                          </p>
                        </div>
                        <div>
                          <img
                            src={dotp}
                            alt="options"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedIndex(
                                song._id === selectedIndex ? null : song._id
                              );
                            }}
                            className="cursor-pointer"
                          />

                          {selectedIndex === song._id && (
                            <div className="bg-[#282828] absolute z-50 top-[60px] right-0 max-w-[350px] max-h-[175px] p-4">
                              <div className="flex gap-2 items-center cursor-pointer">
                                {playlistSongs.some(
                                  (s) => s._id === song._id
                                ) ? (
                                  <div className="flex gap-2 items-center">
                                    <IoCheckmark />
                                    <p className="text-white text-[17px] font-Vazirmatn-400 pt-1">
                                      Added to your playlist
                                    </p>
                                    <BiSolidRightArrow className="ml-[5px] w-[22px] h-[22px]" />
                                  </div>
                                ) : (
                                  <div
                                    className="flex gap-2 items-center"
                                    onClick={() => onAddSong(song)}
                                  >
                                    <img src={plus} alt="add" />
                                    <p className="text-white text-[17px] font-Vazirmatn-400 pt-1">
                                      Add to your playlist
                                    </p>
                                    <BiSolidRightArrow className="ml-[5px] w-[22px] h-[22px]" />
                                  </div>
                                )}
                              </div>

                              <div
                                className="flex gap-2 items-center pt-2"
                                onClick={() => handleArtist(song._id)}
                              >
                                <img
                                  src={artistimage}
                                  alt="artist"
                                  className="w-[22px] h-[22px]"
                                />
                                <p className="text-white text-[17px] font-Vazirmatn-400 pt-1">
                                  Go to Album
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
                  </div>
                </>
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

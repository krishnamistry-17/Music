import React, { useEffect, useState } from "react";
import pfav from "../../assets/svgs/pfav.svg";
import pfull from "../../assets/svgs/pffav.svg";
import option from "../../assets/svgs/option.svg";
import bdot from "../../assets/svgs/bdot.svg";
import plus from "../../assets/svgs/plus.svg";
import artist from "../../assets/svgs/artist.svg";
import { CiSaveUp1 } from "react-icons/ci";
import { FaPause } from "react-icons/fa6";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoMdShare } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import music1 from "../../assets/images/music1.jpg";
import music2 from "../../assets/images/music2.jpg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import {
  addFavorites,
  getallAlbum,
  removeFromFavourites,
} from "../Redux/Action/action";
import { useAuth } from "../Context/AuthContext";
import { useFav } from "../Context/FavContext";
import { toast } from "react-toastify";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAlbum } from "../Context/AlbumContext";
import albumSingle from "../albumSingle";

const Song = () => {
  const {
    setSelectedAlbum,
    isPlaying,
    setIsPlaying,
    setSelectedAlbumId,
    selectedAlbumId,
  } = useAlbum();

  const { id } = useParams(); // URL param
  const [album, setAlbum] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);

  const { isGoogleLogin, isLoggedIn } = useAuth();
  const { selectedId, setSelectedId } = useFav();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);
  const removefav = useSelector((state) => state.removefav);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const data1 = [
    {
      id: 0,
      image: music1,
      head: "Sorfcore",
      para: " The neighberhood",
      rdate: "Nov 4, 2023",
      album: " Hard to Imagine Neighbourhood Ever Changing",
      fimg: pfav,
      ffull: pfull,
      ptime: "3:26",
      oimage: option,
      voption: bdot,
    },
    {
      id: 1,
      image: music2,
      head: "Skyfall Beats",
      para: " nightmares",
      rdate: "Oct 26, 2023",
      album: "nightmares",
      fimg: pfav,
      ffull: pfull,
      ptime: "2:45",
      oimage: option,
      voption: bdot,
    },
    // {
    //   id: 2,
    //   image: music2,
    //   head: "Skyfall Beats",
    //   para: " nightmares",
    //   rdate: "Oct 26, 2023",
    //   album: "nightmares",
    //   fimg: pfav,
    //   ffull: pfull,
    //   ptime: "2:45",
    //   oimage: option,
    //   voption: bdot,
    // },
    // {
    //   id: 3,
    //   image: music2,
    //   head: "Skyfall Beats",
    //   para: " nightmares",
    //   rdate: "Oct 26, 2023",
    //   album: "nightmares",
    //   fimg: pfav,
    //   ffull: pfull,
    //   ptime: "2:45",
    //   oimage: option,
    //   voption: bdot,
    // },
    // {
    //   id: 4,
    //   image: music2,
    //   head: "Skyfall Beats",
    //   para: " nightmares",
    //   rdate: "Oct 26, 2023",
    //   album: "nightmares",
    //   fimg: pfav,
    //   ffull: pfull,
    //   ptime: "2:45",
    //   oimage: option,
    //   voption: bdot,
    // },
    // {
    //   id: 5,
    //   image: music2,
    //   head: "Skyfall Beats",
    //   para: " nightmares",
    //   rdate: "Oct 26, 2023",
    //   album: "nightmares",
    //   fimg: pfav,
    //   ffull: pfull,
    //   ptime: "2:45",
    //   oimage: option,
    //   voption: bdot,
    // },
  ];

  useEffect(() => {
    localStorage.setItem(
      "accessToken",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NjM2ZTY1ZjRjYTNkYjIxNzcwMjg5YSIsImlhdCI6MTc1NDA1MjMwNywiZXhwIjoxNzU0MTM4NzA3fQ.5jEeWa51qYK4n-LNK-yMs0errkZBFyA7wm89AAjxQ8s"
    );
  }, []);

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
        const response = await apiInstance.get(apiRoutes.GET_ALL_DATA);
        const albums = response.data.data;
        setData(albums);
        setAlbum(albums);
        // setAllAlbums(albums);
        dispatch(getallAlbum());

        if (!id && albums.length > 0) {
          setSelectedAlbum(albums[0].songs || []);
          setSelectedAlbumId(0); // First song
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
      if (foundAlbum) {
        setSelectedAlbum(foundAlbum.songs || []);
        setSelectedAlbumId(0);
        setIsPlaying(true); //start-playing auto
      }
    }
  }, [id, data]);

  const filteredAlbum = Array.isArray(album)
    ? album.filter((a) => a._id === id)
    : [];

  if (error) {
    return <div>Error...</div>;
  }

  if (loading) {
    return <div>Loading..</div>;
  }

  const handleSelect = (index) => {
    if (!isLoggedIn && !isGoogleLogin) {
      toast.warn("Please Log In To Play Music.");
      return;
    }

    const song = filteredAlbum?.[0]?.songs?.[index];
    if (!song?.cloudinaryUrl) {
      toast.warn("This song has no playable audio.");
      return;
    }

    setSelectedAlbum(filteredAlbum?.[0]?.songs || []);
    setSelectedAlbumId(index);
    setIsPlaying(true);
  };

  const handleSongClick = (songId) => {
    const songs = albumSingle.songs;
    const index = songs.findIndex((s) => s._id === songId);
    if (index !== -1) {
      setSelectedAlbum(songs);
      setSelectedAlbumId(index);
      setIsPlaying(true);
    }
  };

  const handleClick = (song) => {
    if (!isLoggedIn && !isGoogleLogin) {
      toast.warn("Please log in to add favorites.");
      return;
    }
    // Dispatch action to add favorite song & remove song
    if (selectedId === song._id) {
      dispatch(removeFromFavourites(song));
      setSelectedId(null);
      toast.success("Song removed from favourites..");
    } else {
      dispatch(addFavorites(song));
      setSelectedId(song._id);
      toast.success("Song added to favourites");
    }
  };

  if (!id) {
    const defaultAlbum = album.find(
      (a) => a._id === "6864de81b5cb32f97e53b1b4"
    );
    if (defaultAlbum) {
      navigate(`/album/${defaultAlbum._id}`, { replace: true });
    } else if (album.length > 0) {
      navigate(`/album/${album[0]._id}`, { replace: true }); // fallback
    }
  }

  const albumsToShow = id ? album.filter((item) => item._id === id) : album;

  const togglePlay = () => setIsPlaying((p) => !p);

  return (
    <div>
      <div className="md:px-5 px-1 ">
        <div className="flex justify-between items-end md:px-5 ">
          <div>
            <p></p>
          </div>
          <div>
            <p className="text-[20px] font-Vazirmatn-400 text-white lg:block hidden">
              Relase Date
            </p>
          </div>
          <div>
            <p className="text-[20px] font-Vazirmatn-400 text-white lg:block hidden">
              Album
            </p>
          </div>
          <div>
            <p className="text-[20px] text-white font-Vazirmatn-400 lg:block hidden">
              Time
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-5 pt-5 lg:hidden">
          <div>
            <p className="text-[16px] font-Vazirmatn-600 text-white">Time</p>
          </div>
          <div>
            <p className="text-[16px] font-Vazirmatn-600 text-white pr-3 ">
              More
            </p>
          </div>
        </div>

        <div className="flex px-2">
          <div className="flex flex-col items-center mt-4 md:mr-4 mr-3">
            <div>
              {filteredAlbum?.map((album) =>
                album.songs?.map((song, index) => (
                  <p className="lg:text-[24px] text-[16px] font-Vazirmatn-600 text-white lg:py-[12px] py-[21px]">
                    <div
                      key={song._id}
                      className="flex items-center gap-3 py-2"
                    >
                      {(isLoggedIn || isGoogleLogin) && (
                        <div
                          onClick={() => {
                            togglePlay();
                            setSelectedAlbumId(index);
                          }}
                        >
                          {selectedAlbumId === index ? (
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
                ))
              )}
            </div>
          </div>
          <div className=" text-white w-full grid grid-cols-1">
            {filteredAlbum.map((albumItem, index) => {
              const extra = data1[index];
              return (
                <div key={albumItem._id || index} className="pt-[15px]">
                  {albumItem.songs?.map((song, songIndex) => (
                    <>
                      <div
                        key={song._id || songIndex}
                        className="sm:grid grid-cols-4 gap-6 bg-[#1E1E1E] relative mb-4 hidden"
                        onClick={() => handleSelect(index)}
                      >
                        {/* Song Image + Title + Artist */}
                        <div className="flex">
                          <img
                            src={song?.songImage?.[0]}
                            alt="m1"
                            className="w-[60px] h-[60px] rounded-[5px] border"
                          />
                          <div className="md:pl-[23px] pl-1 md:py-[5px] pt-[11px]">
                            <p className="text-white md:text-[20px] font-Vazirmatn-600 text-[15px] truncate">
                              {song?.title}
                            </p>
                            <p className="text-white text-[12px] font-Vazirmatn-300 pt-0.5 truncate">
                              {albumItem?.artistId?.name}
                            </p>
                          </div>
                        </div>

                        {/* Release Date */}
                        <div>
                          <p className="text-white text-[16px] font-Vazirmatn-400 py-[17.5px] lg:block hidden">
                            {albumItem.releaseDate?.split("T")[0]}
                          </p>
                        </div>

                        {/* Album Title */}
                        <div>
                          <p className="text-white text-[16px] font-Vazirmatn-400 py-[17.5px] w-[345px] lg:block hidden">
                            {extra?.album}
                          </p>
                        </div>

                        {/* Favorite + Duration + Options */}
                        <div className="flex justify-end lg:gap-2.5 gap-8 py-[17.5px] pr-[9px]">
                          <div onClick={() => handleClick(song)}>
                            {isLoggedIn || isGoogleLogin ? (
                              <img
                                src={
                                  favorites.some((fav) => fav._id === song._id)
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
                              {song?.duration}
                            </p>
                          </div>

                          <div>
                            <img
                              src={extra?.voption}
                              alt="op"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedIndex(
                                  song._id === selectedIndex ? null : song._id
                                );
                              }}
                              className=" cursor-pointer"
                            />
                            {selectedIndex === song._id && (
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
                        <div className="flex justify-between bg-[#1E1E1E] w-full max-w-full gap-3">
                          {/* Song info */}
                          <div className="flex">
                            <img
                              src={song?.songImage?.[0]}
                              alt="m1"
                              className="w-[60px] h-[60px] rounded-[5px] border"
                            />
                            <div className="md:pl-[23px] pl-1 md:py-[5px] pt-[11px]">
                              <p className="text-white md:text-[20px] font-Vazirmatn-600 text-[15px] truncate">
                                {song?.title}
                              </p>
                              <p className="text-white text-[12px] font-Vazirmatn-300 pt-0.5 truncate">
                                {albumItem?.artistId?.name}
                              </p>
                            </div>
                          </div>

                          {/* Duration + voption */}
                          <div className="flex justify-end items-center gap-4 relative">
                            <div>
                              <p className="text-white text-[16px] font-Vazirmatn-400">
                                {song?.duration}
                              </p>
                            </div>

                            {/* Options button + dropdown */}
                            <div className="relative">
                              <img
                                src={extra?.voption}
                                alt="op"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedIndex(
                                    song._id === selectedIndex ? null : song._id
                                  );
                                }}
                                className="w-[24px] h-[24px] cursor-pointer"
                              />

                              {/* Dropdown menu */}
                              {selectedIndex === song._id && (
                                <div className="bg-[#282828] absolute z-50 top-[40px] right-0 max-w-[300px] w-[250px] p-4 shadow-lg">
                                  <div className="flex gap-2 items-center">
                                    <img src={plus} alt="ps" />
                                    <p className="text-white text-[15px] font-Vazirmatn-400">
                                      Add to your playlist
                                    </p>
                                    <BiSolidRightArrow className="ml-[5px] w-[20px] h-[20px]" />
                                  </div>
                                  <div
                                    className="flex gap-2 items-center pt-2"
                                    onClick={() => handleClick(song)}
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
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        <div className=" flex justify-center items-center pb-8 pt-8">
          <button className="bg-darkpink px-4 py-[7px] text-white text-[14px] font-Vazirmatn-400 rounded-[4px]">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Song;

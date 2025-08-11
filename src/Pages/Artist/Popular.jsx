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
const Popular = () => {
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
    ? album.filter((a) => a._id === id)
    : [];
  console.log("filteredAlbum :", filteredAlbum);

  if (error) {
    return <div className="text-white">Error...</div>;
  }

  if (loading) {
    return <div className="text-white">Loading..</div>;
  }

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
    const defaultAlbum = album.find(
      (a) => a._id === "6864cf9a6c6f84ec2f487ebc"
    );
    console.log("defaultAlbum :", defaultAlbum);
    if (defaultAlbum) {
      navigate(`/artist/${defaultAlbum._id}`, { replace: true });
    } else if (album.length > 0) {
      navigate(`/artist/${album[0]._id}`, { replace: true }); // fallback
    }
  }
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
          <div className="flex flex-col items-center md:mr-4 mr-3 mt-4">
            {filteredAlbum?.map((album) =>
              album.songs?.map((song, index) => (
                <p
                  className="lg:text-[24px] text-[16px] font-Vazirmatn-600 text-white lg:py-[16px] py-[15px] lg:mt-0 mt-2
                "
                >
                  <div key={song._id} className="flex items-center gap-3 py-2">
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
              ))
            )}
          </div>

          <div className="pb-[15px] pt-[15px] grid grid-cols-1 w-full">
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
                              {albumItem?.name}
                            </p>
                          </div>
                        </div>

                        {/* Release Date */}
                        <div>
                          <p className="text-white text-[16px] font-Vazirmatn-400 py-[17.5px] xl:block hidden">
                            {song?.createdAt?.split("T")[0]}
                          </p>
                        </div>

                        {/* Album Title */}
                        <div>
                          <p className="text-white text-[16px] font-Vazirmatn-400 py-[17.5px] w-[345px] xl:block hidden">
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
                              src={extra?.oimage}
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
                                {albumItem?.name}
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
                                src={extra?.oimage}
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

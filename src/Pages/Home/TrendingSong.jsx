import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pfav from "../../assets/svgs/pfav.svg";
import pfull from "../../assets/svgs/pffav.svg";
import plus from "../../assets/svgs/plus.svg";
import { FaPause } from "react-icons/fa6";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import {
  addFavorites,
  getAllSong,
  removeFromFavourites,
} from "../Redux/Action/action";
import { useAuth } from "../Context/AuthContext";
import { FaPlay } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSong } from "../Context/SongContext";
import { useFav } from "../Context/FavContext";
import { useParams } from "react-router-dom";
// import useFetchData from "../Hooks/useFetchData";
import artist1 from "../../assets/images/artist11.png";
import artist3 from "../../assets/images/artist33.png";
import artist5 from "../../assets/images/artist55.png";
import artist6 from "../../assets/images/artist66.png";

const TrendingSong = ({ songRef }) => {
  const {
    songs,
    setSongs,
    playSongAt,
    isPlaying,
    setIsPlaying,
    setCurrentIndex,
    audioRef,
    currentIndex,
  } = useSong();

  const { id } = useParams();
  const { selectedId, setSelectedId } = useFav();

  const { isLoggedIn, isGoogleLogin } = useAuth();

  const favorites = useSelector((state) => state.favorites);

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isSmall, setIsSmall] = useState(false);

  const dispatch = useDispatch();

  const data1 = [
    {
      id: 0,
      image: artist3,
      artistname: "Adele",
      title: "Adele 21",
      rdate: "2025-07-02",
      bio: "British singer with a powerful, soulful voice.",
      fimg: pfav,
      fullimg: pfull,
      ptime: "3:26",
    },
    {
      id: 1,
      image: artist5,
      artistname: "Harry Styles",
      title: "Harry's House",
      rdate: "2025-07-02",
      bio: "British pop singer and former One Direction member.",
      fimg: pfav,
      fullimg: pfull,
      ptime: "2:45",
    },
    {
      id: 2,
      image: artist6,
      artistname: "Billie Eilish",
      title: "Born To Die",
      rdate: "2025-07-02",
      bio: "Singer of 'Bad Guy', known for her unique voice and style.",
      fimg: pfav,
      fullimg: pfull,
      ptime: "2:45",
    },
    {
      id: 3,
      image: artist1,
      artistname: "Eminem",
      title: "mockingbird",
      rdate: "2025-07-02",
      bio: "tate mcree, nightmares, the neighberhood, doja cat and ...",
      fimg: pfav,
      fullimg: pfull,
      ptime: "2:45",
    },
  ];

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1200) {
      setIsSmall(false);
    } else if (width <= 1024) {
      setIsSmall(true);
    } else {
      setIsSmall(true);
    }
  };

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
        const response = await apiInstance.get(apiRoutes.GET_ALL_SONG);
        const albums = response.data.data;
        setData(albums);
        setSongs(albums);
        dispatch(getAllSong());

        if (!id && albums.length > 0) {
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setSongs]);

  const handleSelect = (index, item) => {
    if (!item?.cloudinaryUrl) {
      toast.warn("This song has no playable audio.");
      return;
    }

    if (!isLoggedIn && !isGoogleLogin) {
      toast.warn("Please Log In To Play Music.");
    } else {
      playSongAt(index);
      setCurrentIndex(index);
    }
  };

  const showMessage = (index, item) => {
    toast.warn("Please Log In To Play Music.");
  };

  const handleClick = (song) => {
    if (!isGoogleLogin && !isLoggedIn) {
      toast.warn("Please log in to add favorites");
      return;
    }

    if (selectedId === song._id) {
      dispatch(removeFromFavourites(song));
      setSelectedId(null);
      toast.success("Song removed from favorites");
    } else {
      dispatch(addFavorites(song));
      setSelectedId(song._id);
      toast.success("Song added to favorites");
    }
  };

  const togglePlay = () => setIsPlaying((p) => !p);

  const isAuthenticated = isLoggedIn || isGoogleLogin;
  const songList = isAuthenticated ? data : data1;

  return (
    <div ref={songRef}>
      <div>
        <p className="text-white text-[32px] font-Vazirmatn-700">
          Trending <span className="text-darkpink">Songs</span>
        </p>
        <div>
          {isSmall ? (
            <div className=" w-full">
              <div className="flex justify-between items-end  ">
                <div>
                  <p></p>
                </div>
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
                    Time
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full">
              <div className="flex justify-between items-end md:px-3">
                <div>
                  <p></p>
                </div>
                <div>
                  <p className="text-[20px] font-Vazirmatn-400 text-white lg:block hidden">
                    Relase Date
                  </p>
                </div>
                <div>
                  <p className="text-[20px] font-Vazirmatn-400 text-white xl:block hidden">
                    Album
                  </p>
                </div>
                <div>
                  <p className="text-[20px] text-white font-Vazirmatn-400 lg:block hidden">
                    Time
                  </p>
                </div>
              </div>
            </div>
          )}

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

          <div className="flex pt-[15px] mt-[-17px] px-2">
            <div className="flex flex-col items-center mt-4 md:mr-4 mr-3">
              {songList?.map((item, index) => (
                <div
                  key={item._id}
                  className="lg:py-[20px] py-[25px] text-white flex items-center justify-center"
                >
                  {isAuthenticated ? (
                    <div onClick={togglePlay}>
                      {currentIndex === index ? (
                        isPlaying ? (
                          <FaPause className="text-white md:w-[20px] md:h-[20px]" />
                        ) : (
                          <FaPlay className="text-white md:w-[20px] md:h-[20px]" />
                        )
                      ) : (
                        <p className="lg:text-[24px] text-[16px] font-Vazirmatn-600 text-white">
                          #{index + 1}
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="lg:text-[24px] text-[16px] font-Vazirmatn-600 text-white">
                      #{index + 1}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="pb-[15px]">
              {songList.map((item, index) => (
                <div
                  key={item._id || item.id}
                  className="pt-[15px] cursor-pointer"
                >
                  <div className="grid xl:grid-cols-4 grid-cols-3 gap-6 bg-[#1E1E1E] relative">
                    <div
                      className="flex"
                      onClick={
                        isAuthenticated
                          ? () => handleSelect(index, item)
                          : () => showMessage(index, item)
                      }
                    >
                      <img
                        src={item?.artistId?.artistImage?.[0] || item.image}
                        alt="artist"
                        className="w-[60px] h-[60px] rounded-[5px] border"
                      />
                      <div className="md:pl-[23px] pl-1 md:py-[5px] pt-[11px]">
                        <p className="text-white md:text-[20px] font-Vazirmatn-600 text-[15px] truncate">
                          {item?.artistId?.name || item.artistname}
                        </p>
                        <p className="text-white text-[12px] font-Vazirmatn-300 truncate">
                          {item?.albumId?.title || item.title}
                        </p>
                      </div>
                    </div>

                    {isSmall ? (
                      <div>
                        {" "}
                        <p className="text-white text-[16px] pl-20 font-Vazirmatn-400 py-[17.5px] lg:block hidden">
                          {item?.artistId?.createdAt?.split("T")[0] ||
                            item?.rdate}
                        </p>
                      </div>
                    ) : (
                      <div>
                        {" "}
                        <p className="text-white text-[16px] font-Vazirmatn-400 py-[17.5px] lg:block hidden">
                          {item?.artistId?.createdAt?.split("T")[0] ||
                            item?.rdate}
                        </p>
                      </div>
                    )}

                    <p className="text-white text-[16px] font-Vazirmatn-400 py-[17.5px] w-[345px] xl:block hidden truncate">
                      {item?.artistId?.bio || item.bio}
                    </p>

                    <div className="flex justify-end lg:gap-2.5 gap-8 py-[17.5px] pr-[9px]">
                      {isAuthenticated ? (
                        <img
                          src={
                            favorites.some((fav) => fav._id === item._id)
                              ? pfull
                              : pfav
                          }
                          alt="fav"
                          className="lg:block hidden w-[24.24px] h-[25px]"
                          onClick={() => handleClick(item)}
                        />
                      ) : (
                        <img
                          src={item.fimg}
                          alt="fav"
                          className="lg:block hidden w-[24.24px] h-[25px] opacity-50"
                        />
                      )}
                      <p className="text-white text-[16px] font-Vazirmatn-400">
                        {item?.duration || item.ptime}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className=" flex justify-center items-center  pt-[15px]">
            <button className="bg-[#1E1E1E] py-[14px] px-[20px] text-white text-[16px] font-Vazirmatn-500 rounded-[4px] flex gap-1 items-center">
              <span>
                <img src={plus} alt="pls" />
              </span>
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingSong;

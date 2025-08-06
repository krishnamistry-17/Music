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

const TrendingSong = () => {
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

  const dispatch = useDispatch();

  const data1 = [
    { id: 0, fimg: pfav, fullimg: pfull, ptime: "3:26" },
    { id: 1, fimg: pfav, fullimg: pfull, ptime: "2:45" },
    { id: 2, fimg: pfav, fullimg: pfull, ptime: "2:11" },
    { id: 3, fimg: pfav, fullimg: pfull, ptime: "2:18" },
    { id: 4, fimg: pfav, fullimg: pfull, ptime: "3:26" },
    { id: 5, fimg: pfav, fullimg: pfull, ptime: "3:26" },
    { id: 6, fimg: pfav, fullimg: pfull, ptime: "3:26" },
    { id: 7, fimg: pfav, fullimg: pfull, ptime: "3:26" },
  ];

  // useEffect(() => {
  //   localStorage.setItem(
  //     "accessToken",
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NjM2ZTY1ZjRjYTNkYjIxNzcwMjg5YSIsImlhdCI6MTc1NDQ1MjQ5MiwiZXhwIjoxNzU0NTM4ODkyfQ.a-883BDizrLRnYzuKMEWWK4jwqj9oDKdC_zyMks-6To"
  //   );
  // }, []);

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
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [setSongs]);

  if (error) {
    return <div className="text-white">Error...</div>;
  }

  if (loading) {
    return <div className="text-white">Loading..</div>;
  }

  const handleSelect = (index, item) => {
    if (item?.cloudinaryUrl) {
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

  return (
    <div>
      <div>
        <p className="text-white text-[32px] font-Vazirmatn-700">
          Trending <span className="text-darkpink">Songs</span>
        </p>
        <div>
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

          <div className="flex pt-[15px] mt-[-17px] px-2">
            <div className="flex flex-col items-center mt-4 md:mr-4 mr-3">
              {data?.map((item, index) => (
                <div
                  key={item._id}
                  className="lg:py-[20px] py-[25px] text-white flex items-center justify-center"
                >
                  {isLoggedIn || isGoogleLogin ? (
                    <div onClick={togglePlay}>
                      {currentIndex === index ? (
                        isPlaying ? (
                          <FaPause className="text-white w-[20px] h-[20px]" />
                        ) : (
                          <FaPlay className="text-white w-[20px] h-[20px]" />
                        )
                      ) : (
                        <p className="lg:text-[24px] text-[16px] font-Vazirmatn-600">
                          #{index + 1}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div>
                      {" "}
                      <p className="lg:text-[24px] text-[16px] font-Vazirmatn-600">
                        #{index + 1}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pb-[15px]">
              {Array.isArray(data) &&
                data.map((item, index) => {
                  const extra = data1[index] || {};

                  return (
                    <div
                      key={item._id || index}
                      className="pt-[15px] cursor-pointer"
                    >
                      <div className="grid grid-cols-4 gap-6 bg-[#1E1E1E] relative">
                        <div
                          className="flex"
                          onClick={() => handleSelect(index, item._id)}
                        >
                          <img
                            src={item?.artistId?.artistImage?.[0]}
                            alt="artist"
                            className="w-[60px] h-[60px] rounded-[5px] border"
                          />
                          <div className="md:pl-[23px] pl-1 md:py-[5px] pt-[11px]">
                            <p className="text-white md:text-[20px] font-Vazirmatn-600 text-[15px] truncate">
                              {item?.artistId?.name}
                            </p>
                            <p className="text-white text-[12px] font-Vazirmatn-300 truncate">
                              {item?.albumId?.title}
                            </p>
                          </div>
                        </div>

                        <p className="text-white text-[16px] font-Vazirmatn-400 py-[17.5px] lg:block hidden">
                          {item?.artistId?.createdAt?.split("T")[0]}
                        </p>

                        <p className="text-white text-[16px] font-Vazirmatn-400 py-[17.5px] w-[345px] lg:block hidden truncate">
                          {item?.artistId?.bio}
                        </p>

                        <div
                          className="flex justify-end lg:gap-2.5 gap-8 py-[17.5px] pr-[9px]"
                          onClick={() => handleClick(item)}
                        >
                          {isLoggedIn || isGoogleLogin ? (
                            <div>
                              {" "}
                              <img
                                src={
                                  favorites.some((fav) => fav._id === item._id)
                                    ? extra?.fullimg
                                    : extra?.fimg
                                }
                                alt="fav"
                                className="lg:block hidden w-[24.24px] h-[25px]"
                              />
                            </div>
                          ) : (
                            <div>
                              <img src={extra?.fimg} alt="fav" />
                            </div>
                          )}

                          <p className="text-white text-[16px] font-Vazirmatn-400">
                            {item?.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
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

import React, { useEffect, useState } from "react";
import playmusic from "../../assets/svgs/playmusic.svg";
import dotp from "../../assets/svgs/dotp.svg";
import pfav from "../../assets/svgs/pfav.svg";
import pfull from "../../assets/svgs/pffav.svg";
import plus from "../../assets/svgs/plus.svg";
import artist from "../../assets/svgs/artist.svg";
import { CiSaveUp1 } from "react-icons/ci";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoMdShare } from "react-icons/io";
import music1 from "../../assets/images/music1.jpg";
import music2 from "../../assets/images/music2.jpg";
import music3 from "../../assets/images/music3.png";
import music4 from "../../assets/images/music4.png";
import music5 from "../../assets/images/music5.png";
import music6 from "../../assets/images/music6.jpg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { addFavorites, getAllArtitst } from "../Redux/Action/action";
import { useAuth } from "../Context/AuthContext";
import { useFav } from "../Context/FavContext";
import { toast } from "react-toastify";
import useFetchData from "../../Hooks/useFetchData";

const Popular = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [data, setData] = useState([]);
  const { isGoogleLogin, isLoggedIn } = useAuth();
  const { selectedId, setSelectedId } = useFav();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const data1 = [
    {
      id: 0,
      image: music1,
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
      image: music2,
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
      image: music3,
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
      image: music4,
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
      image: music5,
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
      image: music6,
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
      image: music6,
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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NjM2ZTY1ZjRjYTNkYjIxNzcwMjg5YSIsImlhdCI6MTc1Mzc2MTQ1MCwiZXhwIjoxNzUzODQ3ODUwfQ.D768Gk5N9HzV3FRXpsuJn90uSubsqmOabk1PmFDcfRI"
    );
  }, []);

  const { data, loading, error } = useFetchData({
    endpoint: apiRoutes.GET_ALL_ARTIST,
    onSuccess: (artists) => {
      dispatch(getAllArtitst());
    },
  });

  if (error) {
    return <div className="text-white">Error...</div>;
  }

  if (loading) {
    return <div className="text-white">Loading..</div>;
  }

  const handleClick = (song) => {
    if (!isGoogleLogin && !isLoggedIn) {
      toast.warn("Please log in to add favorites");
      return;
    }
    dispatch(addFavorites(song));
    setSelectedId(song._id);
    toast.success("Song added to favorites");
  };

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
          <div className="flex flex-col items-center mt-4 md:mr-4 mr-3">
            {data?.map((_, index) => (
              <p
                key={index}
                className="lg:text-[24px] text-[16px] text-white md:py-[20px] py-[25px]"
              >
                {index + 1}
              </p>
            ))}
          </div>

          <div className="pb-[15px]">
            {Array.isArray(data) &&
              data.map((item, index) => {
                const extra = data1[index];

                return (
                  <>
                    <div key={item.id || index} className="pt-[15px] ">
                      <div
                        className=" grid grid-cols-4 gap-6 bg-[#1E1E1E] relative"
                        onClick={() => setActiveIndex(index)}
                      >
                        <div className="flex">
                          <img
                            src={item.artistImage?.[0]}
                            alt="m1"
                            className="w-[60px] h-[60px] rounded-[5px] border"
                          />
                          <div className="md:pl-[23px] pl-1 md:py-[5px] pt-[11px]">
                            <p className="text-white md:text-[20px] font-Vazirmatn-600 text-[15px] truncate ">
                              {item.name}
                            </p>
                            <p className="text-white text-[12px] font-Vazirmatn-300 ">
                              {extra.para}
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="text-white text-[16px] font-Vazirmatn-400 py-[17.5px] lg:block hidden">
                            {extra?.rdate}
                          </p>
                        </div>

                        <div>
                          <p className="text-white text-[16px] font-Vazirmatn-400 py-[17.5px] truncate lg:block hidden">
                            {item.bio}
                          </p>
                        </div>

                        <div className="flex justify-end lg:gap-2.5 gap-9 py-[17.5px] lg:pr-5">
                          <div onClick={() => handleClick(item)}>
                            {isLoggedIn || isGoogleLogin ? (
                              <div>
                                {" "}
                                <img
                                  src={
                                    favorites.some(
                                      (fav) => fav._id === item._id
                                    )
                                      ? extra?.ffull
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
                          </div>
                          <div>
                            <p className="text-white text-[16px] font-Vazirmatn-400">
                              {extra?.ptime}
                            </p>
                          </div>
                          <div>
                            <img
                              src={extra?.oimage}
                              alt="op"
                              className=" w-[24px] h-[24px] "
                              onClick={() =>
                                setSelectedIndex(
                                  selectedIndex === index ? null : index
                                )
                              }
                            />
                            {selectedIndex === index && (
                              <div key={index}>
                                <div className="bg-[#282828] absolute z-50 top-[60px]  right-0 max-w-[350px] max-h-[175px] p-4">
                                  <div className="flex gap-2 items-center">
                                    <img src={plus} alt="ps" />
                                    <p className="text-white text-[17px] font-Vazirmatn-400 pt-1">
                                      Add to your playlist
                                    </p>
                                    <BiSolidRightArrow className="ml-[5px] w-[22px] h-[22px]" />
                                  </div>
                                  <div className="flex gap-2 items-center pt-2">
                                    <CiSaveUp1 className="text-white w-[22px] h-[22px]" />
                                    <p
                                      className="text-white text-[17px] font-Vazirmatn-400 pt-1"
                                      onClick={() => handleClick(index)}
                                    >
                                      Save to liked songs
                                    </p>
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

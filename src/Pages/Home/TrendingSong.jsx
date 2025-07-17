import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import pfav from "../../assets/svgs/pfav.svg";
import pfull from "../../assets/svgs/pffav.svg";
import plus from "../../assets/svgs/plus.svg";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { getAllSong } from "../Redux/Action/action";
import { useAuth } from "../Context/AuthContext";
import { toast } from "react-toastify";

const TrendingSong = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([]);
  const { isGoogleLogin, isLoggedIn } = useAuth();

  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id === selectedId ? null : id);
    toast.success("Item Selected");
  };

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  localStorage.setItem(
    "accessToken",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NmRmYTI3NmU5OTIzZjQxYmE3OGFhZiIsImlhdCI6MTc1MjcyNTc2NSwiZXhwIjoxNzUyODEyMTY1fQ.45cI-v-eD0yllWZsi8-RGG0w7BvMUtwsLOcZE6GUSJA"
  );

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
        setData(response.data.data);
        dispatch(getAllSong());
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div>Error...</div>;
  }

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <div>
        <p className="text-white text-[32px] font-Vazirmatn-700">
          Trending <span className="text-darkpink">Songs</span>
        </p>
        <div className=" ">
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
              {data?.map((_, index) => (
                <p
                  key={index}
                  className="lg:text-[24px] text-[16px] font-Vazirmatn-600 text-white lg:py-[18px] py-[25px]"
                >
                  #{index + 1}
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
                          className=" grid grid-cols-4 gap-6 bg-[#1E1E1E]"
                          onClick={() => setActiveIndex(index)}
                        >
                          <div className="flex">
                            <img
                              src={item?.artistId?.artistImage?.[0]}
                              alt="m1"
                              className="w-[60px] h-[60px] rounded-[5px] border"
                            />
                            <div className="md:pl-[23px] pl-1 md:py-[5px] pt-[11px]">
                              <p className="text-white md:text-[20px] font-Vazirmatn-600 text-[15px] truncate ">
                                {item?.artistId?.name}
                              </p>
                              <p className="text-white text-[12px] font-Vazirmatn-300  truncate">
                                {item?.albumId?.title}
                              </p>
                            </div>
                          </div>

                          <div>
                            <p className="text-white text-[16px] font-Vazirmatn-400 py-[17.5px] lg:block hidden">
                              {item?.artistId?.createdAt?.split("T")[0]}
                            </p>
                          </div>

                          <div>
                            <p className="text-white text-[16px] font-Vazirmatn-400  py-[17.5px] w-[345px] lg:block hidden truncate">
                              {item?.artistId?.bio}
                            </p>
                          </div>

                          <div className="flex justify-end lg:gap-2.5 gap-8 py-[17.5px] pr-[9px]">
                            {isLoggedIn || isGoogleLogin ? (
                              <div>
                                <div
                                  key={item.id || index[0]}
                                  onClick={() => handleClick(index)}
                                >
                                  <img
                                    src={
                                      selectedId === index
                                        ? extra?.fullimg
                                        : extra?.fimg
                                    }
                                    alt="pf"
                                    className="lg:block hidden w-[24.24px] h-[25px]"
                                  />
                                </div>
                              </div>
                            ) : (
                              <div>
                                <img src={extra?.fimg} alt="pf" />
                              </div>
                            )}

                            <p className="text-white text-[16px] font-Vazirmatn-400">
                              {extra?.ptime}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
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

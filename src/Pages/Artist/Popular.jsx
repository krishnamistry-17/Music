import React, { useEffect, useState } from "react";
import playmusic from "../../assets/svgs/playmusic.svg";
import dotp from "../../assets/svgs/dotp.svg";
import pfav from "../../assets/svgs/pfav.svg";

import music1 from "../../assets/images/music1.jpg";
import music2 from "../../assets/images/music2.jpg";
import music3 from "../../assets/images/music3.png";
import music4 from "../../assets/images/music4.png";
import music5 from "../../assets/images/music5.png";
import music6 from "../../assets/images/music6.jpg";
// import music7 from "../../assets/images/music7.png";
// import music8 from "../../assets/images/music8.jpg";
// import music9 from "../../assets/images/music9.jpg";
// import music10 from "../../assets/images/music10.jpg";
// import music11 from "../../assets/images/music11.jpg";
// import music12 from "../../assets/images/music12.jpg";
// import music13 from "../../assets/images/music13.jpg";
// import music14 from "../../assets/images/music14.png";
// import music15 from "../../assets/images/music15.png";
// import music16 from "../../assets/images/music16.jpg";
// import music17 from "../../assets/images/music17.png";
// import music18 from "../../assets/images/music18.jpg";
// import music19 from "../../assets/images/music19.png";
// import music20 from "../../assets/images/music20.jpg";
import axios from "axios";
import { useDispatch } from "react-redux";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { getallAlbum } from "../Redux/Action/action";

const Popular = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([]);

  console.log("data :", data);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  localStorage.setItem(
    "accessToken",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NmRmYTI3NmU5OTIzZjQxYmE3OGFhZiIsImlhdCI6MTc1MjIxNDM0NSwiZXhwIjoxNzUyMzAwNzQ1fQ.NzWP_mGi4cRX_Y0HFxcb2Dhmv_8huD_ICSUOwtbUxE4"
  );

  const data1 = [
    {
      id: 0,
      image: music1,
      head: "Sorfcore",
      para: " Eminem",
      rdate: "Nov 4, 2023",
      album: " Hard to Imagine Neighbourhood Ever Changing",
      fimg: pfav,
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
        setData(response.data.data);
        dispatch(getallAlbum());
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
      <div className="md:px-5 px-1">
        <p className="text-white text-[40px] font-Vazirmatn-800 lg:block hidden">
          Popular{" "}
        </p>
        <p className="text-white text-[24px] font-Vazirmatn-700 lg:hidden pl-4">
          Popular <span className="text-darkpink">Songs</span>{" "}
        </p>
        <div className="flex justify-between items-end md:px-10 ">
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
                        className=" grid grid-cols-4 gap-6 bg-[#1E1E1E]"
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
                          <p className="text-white text-[16px] font-Vazirmatn-400 pt-2 lg:block hidden">
                            {item.bio}
                          </p>
                        </div>

                        <div className="flex justify-end lg:gap-2.5 gap-9 py-[17.5px] lg:pr-5">
                          <img
                            src={extra?.fimg}
                            alt="pf"
                            className="lg:block hidden w-[25px] h-[25px]"
                          />
                          <p className="text-white text-[16px] font-Vazirmatn-400">
                            {extra?.ptime}
                          </p>
                          <img
                            src={extra?.oimage}
                            alt="op"
                            className=" w-[24px] h-[24px] mr-4"
                          />
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

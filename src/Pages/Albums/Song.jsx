import React, { useEffect, useState } from "react";
import playmusic from "../../assets/svgs/playmusic.svg";
import pfav from "../../assets/svgs/pfav.svg";
import option from "../../assets/svgs/option.svg";
import bdot from "../../assets/svgs/bdot.svg";

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

const Song = () => {
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
      para: " The neighberhood",
      rdate: "Nov 4, 2023",
      album: " Hard to Imagine Neighbourhood Ever Changing",
      fimg: pfav,
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
      ptime: "2:45",
      oimage: option,
      voption: bdot,
    },
    {
      id: 2,
      image: music3,
      head: "Greedy",
      para: " tate mcrae",
      rdate: "Nov 30, 2023",
      album: "Greedy",
      fimg: pfav,
      ptime: "2:11",
      oimage: option,
      voption: bdot,
    },
    {
      id: 3,
      image: music4,
      head: "Lovin On me",
      para: " jack harlow",
      rdate: "Dec 15, 2023",
      album: "Lovin On me",
      fimg: pfav,
      ptime: "2:18",
      oimage: option,
      voption: bdot,
    },
    {
      id: 4,
      image: music5,
      head: "pain the town red",
      para: " Doja Cat",
      rdate: "Dec 29, 2023",
      album: "Paint The Town Red",
      fimg: pfav,
      ptime: "3:51",
      oimage: option,
      voption: bdot,
    },
    {
      id: 5,
      image: music6,
      head: "Dancin On Night",
      para: " Dualipa",
      rdate: "may 27, 2023",
      album: "Dance The Night(From Barbie Movie)",
      fimg: pfav,
      ptime: "2:56",
      oimage: option,
      voption: bdot,
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
        const response = await apiInstance.get(apiRoutes.GET_ALL_DATA);
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

        <div className="flex pt-[15px] mt-[-17px] px-2">
          <div className="flex flex-col items-center mt-4 md:mr-4 mr-3">
            {data?.map((_, index) => (
              <p
                key={index}
                className="lg:text-[24px] text-[16px] font-Vazirmatn-600 text-white lg:py-[18px] py-[25px]"
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
                            src={item.albumImages?.[0]}
                            alt="m1"
                            className="w-[60px] h-[60px] rounded-[5px] border"
                          />
                          <div className="md:pl-[23px] pl-1 md:py-[5px] pt-[11px]">
                            <p className="text-white md:text-[20px] font-Vazirmatn-600 text-[15px] truncate ">
                              {item.title}
                            </p>
                            <p className="text-white text-[12px] font-Vazirmatn-300 pt-0.5 ">
                              {item.artist}
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="text-white text-[16px] font-Vazirmatn-400 py-[17.5px] lg:block hidden">
                            {item.releaseDate?.split("T")[0]}
                          </p>
                        </div>

                        <div>
                          <p className="text-white text-[16px] font-Vazirmatn-400  py-[17.5px] w-[345px] lg:block hidden">
                            {extra?.album}{" "}
                          </p>
                        </div>

                        <div className="flex justify-end lg:gap-2.5 gap-8 py-[17.5px] pr-[9px]">
                          <img
                            src={extra?.fimg}
                            alt="pf"
                            className="lg:block hidden"
                          />
                          <p className="text-white text-[16px] font-Vazirmatn-400">
                            {extra?.ptime}
                          </p>
                          <img src={extra?.voption} alt="op" />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        <div className=" flex justify-center items-center pb-8">
          <button className="bg-darkpink px-4 py-[7px] text-white text-[14px] font-Vazirmatn-400 rounded-[4px]">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Song;

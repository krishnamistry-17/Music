import React, { useEffect, useState } from "react";
import week1 from "../../assets/images/week1.png";
import week2 from "../../assets/images/week2.png";
import week3 from "../../assets/images/week3.png";
import week4 from "../../assets/images/week4.png";
import week5 from "../../assets/images/week5.png";
import plus from "../../assets/svgs/plus.svg";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { useNavigate, useParams } from "react-router-dom";
import { useView } from "../Context/ViewContext";
import { toast } from "react-toastify";
import { useAuth } from "../Context/AuthContext";
import { usePlayerSource } from "../Context/PlayerSourceContext";
import { useViewSong } from "../Context/ViewSongContext";

const WeeklyTop = () => {
  const { setViewSongs, playSongAt, setIsPlaying, setCurrentIndex } =
    useViewSong();
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);

  const navigate = useNavigate();
  const { setOpenSource } = useView();
  const { id } = useParams();
  const { isLoggedIn, isGoogleLogin } = useAuth();
  const { setSource } = usePlayerSource();

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const data3 = [
    { image: week1, para: "Whatever It Takes", head: "Imagne Dragons" },
    { image: week2, para: "Skyfall", head: "Adele" },
    { image: week3, para: "Superman", head: "Eminiem" },
    { image: week4, para: "Softcore", head: "The Neighberhood" },
    { image: week5, para: "The Lonliest", head: "Måneskin" },
  ];

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 1200) setVisibleCount(5);
      else if (width >= 1024) setVisibleCount(2);
      else if (width >= 768) setVisibleCount(3);
      else setVisibleCount(2);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.warn("No token found, skipping API call");
        setError("Unauthorized: Please login first");
        setLoading(false);
        return;
      }
      try {
        const response = await apiInstance.get(apiRoutes.GET_AUDIO);
        const albums = response.data.data;
        setData(albums);
        if (!id && albums.length > 0) {
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSelect = (index, item) => {
    if (item?.cloudinaryUrl) {
      toast.warn("This song has no playble audio");
      return;
    }
    if (!isGoogleLogin && !isLoggedIn) {
      toast.warn("Please Log In To Play Music.");
    } else {
      setViewSongs(data);
      playSongAt(index);
      setSource("allaudio");
      setCurrentIndex(index);
      setIsPlaying(true);
    }
  };

  const handleClick = () => {
    navigate("/viewsong");
    setOpenSource("viewaudio");
  };

  const isAuthenticated = isLoggedIn || isGoogleLogin;
  const songList = isAuthenticated ? data : data3;

  return (
    <div>
      <div>
        <h2
          className="text-white 
        lg:text-[32px] lg:font-Vazirmatn-700
        text-[20px] font-Vazirmatn-600 py-[10px]
        "
        >
          Weekly Top <span className="text-darkpink">Songs</span>
        </h2>
      </div>
      <div>
        <div
          className=" hidden md:grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-4 gap-[24px] overflow-x-auto "
          style={{ scrollbarWidth: "none" }}
        >
          {(isOpen ? songList : songList?.slice(0, visibleCount))?.map(
            (item, index) => {
              const extra = data3[index];
              return (
                <div key={item._id || index}>
                  <div
                    className="bg-[#1F1F1F] w-[174.4px] h-[214px] py-[4px] px-[15px]  rounded-[10px] "
                    onClick={() => handleSelect(index, item._id)}
                  >
                    <img
                      src={item?.songImage || extra?.image}
                      alt="a1"
                      className=""
                    />
                    <p className="text-white text-[16px] font-Vazirmatn-500 pt-[8px] ">
                      {item?.title || extra?.para}
                    </p>
                    <p className="text-white text-[12px] font-Vazirmatn-300 pt-[4px] opacity-80 ">
                      {item?.artistId?.nam || extra?.head}
                    </p>
                  </div>
                </div>
              );
            }
          )}

          <div
            className="pl-[22px] py-[64px] cursor-pointer "
            onClick={() => handleClick()}
          >
            <div className="h-[62px] w-[62px] rounded-[31px] bg-[#1E1E1E] flex items-center justify-center">
              <img src={plus} alt="pls" className="p-[19px]" />
            </div>
            <p className="text-white text-[16px] font-Vazirmatn-500 font-medium pt-1">
              {isOpen ? "View Less" : "View All"}
            </p>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div
          className=" flex gap-2 overflow-x-auto pt-5"
          style={{ scrollbarWidth: "none" }}
        >
          {songList?.map((item, index) => {
            const extra = data3[index];
            return (
              <div key={item._id || index}>
                <div
                  className="bg-[#1F1F1F] w-[130px] h-[185px]  rounded-[10px] py-[4px] px-[8px]"
                  onClick={() => handleSelect(index, item._id)}
                >
                  <img
                    src={item?.songImage || item?.image}
                    alt="a1"
                    className="]"
                  />
                  <div>
                    <p className="text-white text-[14px] font-Vazirmatn-500 pt-[8px]">
                      {item?.title || item?.para}
                    </p>
                    <p className="text-white text-[12px] font-Vazirmatn-300 pt-[8px] opacity-80">
                      {item?.artistId?.name || item?.head}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeeklyTop;

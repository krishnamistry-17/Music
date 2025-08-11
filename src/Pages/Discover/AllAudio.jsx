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

const AllAudio = () => {
  const { setViewSongs, playSongAt, setIsPlaying, setCurrentIndex } =
    useViewSong();
  const [visibleCount, setVisibleCount] = useState(2);

  const { isLoggedIn, isGoogleLogin } = useAuth();
  const { setSource } = usePlayerSource();

  const [data, setData] = useState([]);
  console.log("data>>>allaudio :", data);
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
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div className="text-white">Error..</div>;
  }

  if (loading) {
    return <div>Loading..</div>;
  }

  const combinedSong = [...data, ...data3];

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
          className=" hidden md:grid xl:grid-cols-6  md:grid-cols-4 gap-[24px] overflow-x-auto "
          style={{ scrollbarWidth: "none" }}
        >
          {combinedSong.map((item, index) => {
            const fallback = data3[index] || {};

            const image = item.songImage?.[0] || item.image || fallback.image;
            const title = item.title || item.para || fallback.para;
            const artist = item?.artistId?.name || item.head || fallback.head;
            const audio = item.audioUrl || fallback.audioUrl;
            return (
              <div key={item._id || index}>
                <div
                  className="bg-[#1F1F1F] w-[174.4px] h-[214px] py-[4px] px-[15px]  rounded-[10px] "
                  onClick={() => handleSelect(index, item._id)}
                >
                  <img src={image} alt="a1" className="" />
                  <p className="text-white text-[16px] font-Vazirmatn-500 pt-[8px] ">
                    {title}
                  </p>
                  <p className="text-white text-[12px] font-Vazirmatn-300 pt-[4px] opacity-80 ">
                    {artist}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllAudio;

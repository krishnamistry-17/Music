import React, { useEffect, useState } from "react";
import new1 from "../../assets/images/new1.png";
import new2 from "../../assets/images/new2.png";
import new3 from "../../assets/images/new3.png";
import new4 from "../../assets/images/new4.png";
import new5 from "../../assets/images/new5.png";
import { useDispatch } from "react-redux";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { getAllSong } from "../Redux/Action/action";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useSong } from "../Context/SongContext";
import { useAuth } from "../Context/AuthContext";
import { usePlayerSource } from "../Context/PlayerSourceContext";

const AllSongs = () => {
  const { setSongs, playSongAt, setIsPlaying, setCurrentIndex } = useSong();
  const { setSource } = usePlayerSource();
  const dispatch = useDispatch();
  const { isLoggedIn, isGoogleLogin } = useAuth();
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);

  const data3 = [
    { image: new1, para: "Time", head: "Luciano", audioUrl: "" },
    { image: new2, para: "112", head: "jazzek" },
    { image: new3, para: "We Don”t Care", head: "Kyanu & Dj Gullum" },
    { image: new4, para: "Who I Am", head: "Alan Walker &  Elias" },
    { image: new5, para: "Baixo", head: "XXAnteria" },
    { image: new3, para: "We Don”t Care", head: "Kyanu & Dj Gullum" },
    { image: new2, para: "112", head: "jazzek" },
    { image: new1, para: "Time", head: "Luciano" },
  ];

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCount(5);
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
        const response = await apiInstance.get(apiRoutes.GET_ALL_SONG);
        const albums = response.data.data;
        setData(albums);
        dispatch(getAllSong());
        if (!id && albums?.length > 0) {
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [dispatch]);

  const handleSelect = (index, item) => {
    if (item?.cloudinaryUrl) {
      toast.warn("This song has no playable audio.");
      return;
    }

    if (!isLoggedIn && !isGoogleLogin) {
      toast.warn("Please Log In To Play Music.");
    } else {
      setSongs(data);
      playSongAt(index);
      setSource("newrelease");
      setCurrentIndex(index);
      setIsPlaying(true);
    }
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
          New Release <span className="text-darkpink">Songs</span>
        </h2>
      </div>
      <div>
        <div
          className="hidden md:grid xl:grid-cols-6 md:grid-cols-4 gap-[24px] overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {songList?.map((item, index) => {
            const fallback = data3[index] || {};

            const image = item.songImage?.[0] || item.image || fallback.image;
            const title = item.title || item.para || fallback.para;
            const artist = item?.artistId?.name || item.head || fallback.head;
            const audio = item.audioUrl || fallback.audioUrl;

            return (
              <div key={item._id || index}>
                <div
                  className="bg-[#1F1F1F] w-[174.4px] h-[214px] py-[4px] px-[15px] rounded-[10px]"
                  onClick={() => handleSelect(index, item._id)}
                >
                  <img
                    src={image}
                    alt="song"
                    className="rounded-[10px]  w-[144.39px] h-[144.39px]"
                  />
                  <p className="text-white text-[16px] font-Vazirmatn-500 pt-[8px]">
                    {title}
                  </p>
                  <p className="text-white text-[12px] font-Vazirmatn-300 pt-[4px] opacity-80">
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

export default AllSongs;

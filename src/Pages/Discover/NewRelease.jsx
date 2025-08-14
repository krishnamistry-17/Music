import React, { useEffect, useState } from "react";
import new1 from "../../assets/images/new1.png";
import new2 from "../../assets/images/new2.png";
import new3 from "../../assets/images/new3.png";
import new4 from "../../assets/images/new4.png";
import new5 from "../../assets/images/new5.png";
import plus from "../../assets/svgs/plus.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { getAllSong } from "../Redux/Action/action";
import { toast } from "react-toastify";
import { useAuth } from "../Context/AuthContext";
import { useSong } from "../Context/SongContext";
import { usePlayerSource } from "../Context/PlayerSourceContext";
import { useView } from "../Context/ViewContext";

const NewRelease = () => {
  const { setSongs, playSongAt, setIsPlaying, setCurrentIndex } = useSong();
  const { setSource } = usePlayerSource();
  const { id } = useParams();
  const { isLoggedIn, isGoogleLogin } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  const { setOpenSource } = useView();
  const [data, setData] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data3 = [
    { image: new1, para: "Time", head: "Luciano" },
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
        const response = await apiInstance.get(apiRoutes.GET_ALL_SONG);
        const albums = response.data.data;
        setData(albums);
        dispatch(getAllSong());

        if (!id && albums.length > 0) {
        }
      } catch (error) {
        setError(error.message);
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

  const handleClick = () => {
    navigate("/viewsong");
    setOpenSource("allsong");
  };

  const combinedSong = [...data, ...data3];

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
          className=" hidden md:grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-4 gap-[24px] overflow-x-auto "
          style={{ scrollbarWidth: "none" }}
        >
          {Array.isArray(combinedSong) &&
            (isOpen ? combinedSong : combinedSong.slice(0, visibleCount)).map(
              (item, index) => {
                const extra = data3[index];
                return (
                  <div key={item._id || index}>
                    <div
                      className="bg-[#1F1F1F] w-[174.4px] h-[214px] py-[4px] px-[15px]  rounded-[10px] "
                      onClick={() => handleSelect(index, item._id)}
                    >
                      <img
                        src={item.songImage?.[0] || extra?.image}
                        alt="a1"
                        className=" rounded-[10px] w-[144.39px] h-[144.39px]"
                      />
                      <p className="text-white text-[16px] font-Vazirmatn-500 pt-[8px] ">
                        {item.title || extra?.para}
                      </p>
                      <p className="text-white text-[12px] font-Vazirmatn-300 pt-[4px] opacity-80 ">
                        {item?.artistId?.name || extra?.head}
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
          {data.map((item, index) => (
            <div key={item._id || index}>
              <div
                className="bg-[#1F1F1F] w-[130px] h-[185px]  rounded-[10px] py-[4px] px-[8px]"
                onClick={() => handleSelect(index, item._id)}
              >
                <img
                  src={item.songImage?.[0]}
                  alt="a1"
                  className="w-[124.39px] h-[124.39px]"
                />
                <div>
                  <p className="text-white text-[14px] font-Vazirmatn-500 pt-[8px]">
                    {item?.title}
                  </p>
                  <p className="text-white text-[12px] font-Vazirmatn-300 pt-[8px] opacity-80">
                    {item?.artistId?.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewRelease;

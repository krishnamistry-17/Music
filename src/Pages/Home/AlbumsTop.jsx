import React, { useEffect, useState } from "react";
import plus from "../../assets/svgs/plus.svg";
import { useDispatch } from "react-redux";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { getallAlbum } from "../Redux/Action/action";
import { useNavigate, useParams } from "react-router-dom";
import { useAlbum } from "../Context/AlbumContext";
import top1 from "../../assets/images/top1.png";
import top2 from "../../assets/images/top2.png";
import top3 from "../../assets/images/top3.png";
import top4 from "../../assets/images/top4.png";
import top5 from "../../assets/images/top5.png";
import { useView } from "../Context/ViewContext";
import { useAuth } from "../Context/AuthContext";
import { toast } from "react-toastify";

const AlbumsTop = () => {
  const { setSelectedAlbum } = useAlbum();

  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);

  const [data, setData] = useState([]);
  const { id } = useParams();
  const { isLoggedIn, isGoogleLogin } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setOpenSource } = useView();

  const data3 = [
    { image: top1, para: "I Got Heaven", head: "Mannequin" },
    { image: top2, para: "Saviors", head: "Green Day" },
    { image: top3, para: "Loss Of Life", head: "MGMT" },
    { image: top4, para: "All Quite On The ...", head: "The Liberitnes" },
    { image: top5, para: "Little Rope", head: "Sleater-Kinney" },
    { image: top3, para: "Loss Of Life", head: "MGMT" },
    { image: top2, para: "Saviors", head: "Green Day" },
    { image: top1, para: "I Got Heaven", head: "Mannequin" },
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
        setSelectedAlbum(response.data.data);
        dispatch(getallAlbum());
        if (!id && response?.data?.data?.length > 0) {
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [setSelectedAlbum]);

  const handleAlbum = (albumId) => {
    if (isAuthenticated) {
      navigate(`/album/${albumId}`);
    } else {
      toast.warn("Please Login to play music");
    }
  };

  const handleClick = () => {
    navigate("/viewsong");
    setOpenSource("allalbums");
  };

  const combinedAlbum = [...data, ...data3];
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
          Top <span className="text-darkpink">Albums</span>
        </h2>
      </div>
      <div>
        <div
          className=" hidden md:grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-4 gap-[24px] overflow-x-auto "
          style={{ scrollbarWidth: "none" }}
        >
          {(isOpen ? songList : songList.slice(0, visibleCount)).map(
            (item, index) => {
              const extra = data3[index];
              return (
                <div key={item._id || index}>
                  <div
                    className="bg-[#1F1F1F] w-[174.4px] h-[222px] p-[8px]  rounded-[8px] "
                    onClick={() => handleAlbum(item._id)}
                  >
                    <img
                      src={item.albumImages?.[0] || item?.image}
                      alt="a1"
                      className=""
                    />
                    <p className="text-white text-[16px] font-Vazirmatn-500 pt-[8px] ">
                      {item?.title || item?.para}
                    </p>
                    <p className="text-white text-[12px] font-Vazirmatn-300 pt-[4px] opacity-80 ">
                      {item?.artistId?.name || item?.head}
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
          className=" flex gap-3 overflow-x-auto pt-5"
          style={{ scrollbarWidth: "none" }}
        >
          {songList.map((item, index) => {
            return (
              <div key={item._id || index}>
                <div
                  className="bg-[#1F1F1F] w-[140px] h-[185px]  rounded-[10px] py-[4px] px-[8px]"
                  onClick={() => handleAlbum(item._id)}
                >
                  <img
                    src={item.albumImages?.[0] || item?.image}
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

export default AlbumsTop;

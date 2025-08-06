import React, { useEffect, useState } from "react";
import plus from "../../assets/svgs/plus.svg";
import { useDispatch } from "react-redux";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { getallAlbum } from "../Redux/Action/action";
import { useNavigate } from "react-router-dom";
import { useAlbum } from "../Context/AlbumContext";
import top1 from "../../assets/images/top1.png";
import top2 from "../../assets/images/top2.png";
import top3 from "../../assets/images/top3.png";
import top4 from "../../assets/images/top4.png";
import top5 from "../../assets/images/top5.png";
import { useView } from "../Context/ViewContext";

const AllAlbum = () => {
  const { setSelectedAlbum } = useAlbum();

  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);

  const [data, setData] = useState([]);

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
      if (width >= 1024) setVisibleCount(5);
      else if (width >= 768) setVisibleCount(3);
      else setVisibleCount(2);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

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
        const response = await apiInstance.get(apiRoutes.GET_ALL_DATA);
        setData(response.data.data);
        setSelectedAlbum(response.data.data);
        dispatch(getallAlbum());
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [setSelectedAlbum]);

  const handleAlbum = (albumId) => {
    navigate(`/album/${albumId}`);
  };

  const combinedAlbum = [...data, ...data3];

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
          className=" hidden md:grid lg:grid-cols-6 md:grid-cols-4 gap-[24px] overflow-x-auto "
          style={{ scrollbarWidth: "none" }}
        >
          {combinedAlbum.map((item, index) => {
            const fallback = data3[index] || {};

            const image = item.albumImages?.[0] || item.image || fallback.image;
            const title = item.title || item.para || fallback.para;
            const artist = item?.artistId?.name || item.head || fallback.head;
            return (
              <div key={item._id || index}>
                <div
                  className="bg-[#1F1F1F] w-[174.4px] h-[222px] p-[8px]  rounded-[8px] "
                  onClick={() => handleAlbum(item._id)}
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

export default AllAlbum;

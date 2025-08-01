import React, { useEffect, useState } from "react";
import plus from "../../assets/svgs/plus.svg";
import { useDispatch } from "react-redux";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { getallAlbum } from "../Redux/Action/action";
import { useNavigate } from "react-router-dom";
import { useAlbum } from "../Context/AlbumContext";

const AlbumsTop = () => {
  const { setSelectedAlbum } = useAlbum();

  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);

  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    localStorage.setItem(
      "accessToken",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NjM2ZTY1ZjRjYTNkYjIxNzcwMjg5YSIsImlhdCI6MTc1NDAyMDczMywiZXhwIjoxNzU0MTA3MTMzfQ.p9ci-JSZgmKB_tRVzhjtgKb9cwDFZFb5VJfW0VQKwI0"
    );
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
          {Array.isArray(data) &&
            (isOpen ? data : data.slice(0, visibleCount)).map((item, index) => {
              return (
                <div key={item._id || index}>
                  <div
                    className="bg-[#1F1F1F] w-[174.4px] h-[222px] p-[8px]  rounded-[8px] "
                    onClick={() => handleAlbum(item._id)}
                  >
                    <img src={item.albumImages?.[0]} alt="a1" className="" />
                    <p className="text-white text-[16px] font-Vazirmatn-500 pt-[8px] ">
                      {item?.title}
                    </p>
                    <p className="text-white text-[12px] font-Vazirmatn-300 pt-[4px] opacity-80 ">
                      {item?.artistId?.name}
                    </p>
                  </div>
                </div>
              );
            })}

          <div
            className="pl-[22px] py-[64px] cursor-pointer "
            onClick={() => setIsOpen(!isOpen)}
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
          {Array.isArray(data) &&
            data.map((item, index) => {
              return (
                <div key={item._id || index}>
                  <div
                    className="bg-[#1F1F1F] w-[140px] h-[185px]  rounded-[10px] py-[4px] px-[8px]"
                    onClick={() => handleAlbum(item._id)}
                  >
                    <img src={item.albumImages?.[0]} alt="a1" className="]" />
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
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AlbumsTop;

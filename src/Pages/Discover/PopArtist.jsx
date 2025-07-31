import React, { useEffect, useState } from "react";
import artist11 from "../../assets/images/artist11.png";
import artist22 from "../../assets/images/artist22.png";
import artist33 from "../../assets/images/artist33.png";
import artist44 from "../../assets/images/artist44.png";
import artist55 from "../../assets/images/artist55.png";
import artist66 from "../../assets/images/artist66.png";
import plus from "../../assets/svgs/plus.svg";
import useFetchData from "../../Hooks/useFetchData";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { useDispatch } from "react-redux";
import { getAllArtitst } from "../Redux/Action/action";
import apiInstance from "../../../utils/axios";
import { useArtist } from "../Context/ArtistContext";
import { useNavigate } from "react-router-dom";
import { usePlayerSource } from "../Context/PlayerSourceContext";

const PopArtist = ({ searchQuery }) => {
  const { selectedArtist, setSelectedArtist } = useArtist();
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  const { setSource } = usePlayerSource();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const data3 = [
    { image: artist11, para: "Eminiem" },
    { image: artist22, para: "The Weekend" },
    { image: artist66, para: "Billie Eilish" },
    { image: artist33, para: "Adele" },
    { image: artist44, para: "Lana Del Ray" },
    { image: artist55, para: "Harry Styles" },
    { image: artist33, para: "Adele" },
    { image: artist22, para: "The Weekend" },
    { image: artist11, para: "Eminiem" },
  ];

  const navigate = useNavigate();

  const dispatch = useDispatch();

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
        setSelectedArtist(response.data.data);
        dispatch(getAllArtitst());
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [setSelectedArtist]);

  if (error) {
    return <div className="text-white">Error...</div>;
  }

  if (loading) {
    return <div className="text-white">Loading..</div>;
  }

  const handleArtist = (artistId) => {
    navigate(`/artist/${artistId}`);
    setSource("popular");
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
          Popular <span className="text-darkpink">Artists</span>
        </h2>
      </div>

      <div>
        <div
          className=" hidden md:grid lg:grid-cols-6 md:grid-cols-4 gap-[24px] overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {Array.isArray(data) &&
            (isOpen ? data : data.slice(0, visibleCount)).map((item, index) => (
              <div key={item._id || index}>
                <div onClick={() => handleArtist(item._id)}>
                  <img src={item.artistImage?.[0]} alt="a1" className="pl-4" />
                  <p className="text-white text-[16px] font-Vazirmatn-500 pt-[23px] text-center">
                    {item?.name}
                  </p>
                </div>
              </div>
            ))}

          <div
            className="pl-[24px] py-[64px] cursor-pointer "
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
          {data.map((item, index) => (
            <div key={item._id || index}>
              <div onClick={() => handleArtist(item._id)}>
                <div className="p-2">
                  <img
                    src={item.artistImage?.[0]}
                    alt="a1"
                    className="  max-w-[175px] max-h-[100px]"
                  />
                  <p className="text-white text-[12px] font-Vazirmatn-300 pt-[23px]  text-center">
                    {item.name}
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

export default PopArtist;

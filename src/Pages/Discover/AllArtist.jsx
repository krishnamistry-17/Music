import React, { useEffect, useState } from "react";
import artist11 from "../../assets/images/artist11.png";
import artist22 from "../../assets/images/artist22.png";
import artist33 from "../../assets/images/artist33.png";
import artist44 from "../../assets/images/artist44.png";
import artist55 from "../../assets/images/artist55.png";
import artist66 from "../../assets/images/artist66.png";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { useDispatch } from "react-redux";
import { getAllArtitst } from "../Redux/Action/action";
import apiInstance from "../../../utils/axios";
import { useArtist } from "../Context/ArtistContext";
import { useNavigate } from "react-router-dom";
import { usePlayerSource } from "../Context/PlayerSourceContext";
import { useView } from "../Context/ViewContext";
import { useAuth } from "../Context/AuthContext";

const AllArtist = () => {
  const { selectedArtist, setSelectedArtist } = useArtist();
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  const { setSource } = usePlayerSource();
  const { isLoggedIn, isGoogleLogin } = useAuth();
  const { setOpenSource } = useView();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const data3 = [
    { image: artist33, para: "Adele" },
    { image: artist55, para: "Harry Styles" },
    { image: artist44, para: "Lana Del Ray" },
    { image: artist22, para: "The Weekend" },
    { image: artist66, para: "Billie Eilish" },
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

  const handleArtist = (artistId) => {
    navigate(`/artist/${artistId}`);
    setSource("popular");
  };

  const combinedArtist = [...data, ...data3];
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
          Popular <span className="text-darkpink">Artists</span>
        </h2>
      </div>

      <div>
        <div
          className=" hidden md:grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 gap-[24px] overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {songList.map((item, index) => {
            const fallback = data3[index] || {};

            const image = item.artistImage?.[0] || item.image || fallback.image;
            const title = item?.name || item.para || fallback.para;

            return (
              <div key={item._id || index}>
                <div
                  onClick={() => handleArtist(item._id)}
                  className="flex flex-col justify-center items-center"
                >
                  <img src={image} alt="a1" className=" rounded-full " />
                  <p className="text-white text-[16px] font-Vazirmatn-500 pt-[23px] ">
                    {title}
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

export default AllArtist;

import React, { useEffect, useState } from "react";
import gen1 from "../../assets/images/gen1.png";
import gen2 from "../../assets/images/gen2.png";
import gen3 from "../../assets/images/gen3.png";
import gen4 from "../../assets/images/gen4.png";
import plus from "../../assets/svgs/plus.svg";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { useDispatch } from "react-redux";
import { getAllGenere } from "../Redux/Action/action";
import { useNavigate, useParams } from "react-router-dom";
import { useGenere } from "../Context/GenereContext";
import { useAuth } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { usePlayerSource } from "../Context/PlayerSourceContext";
import { useView } from "../Context/ViewContext";

const MusicGeners = () => {
  const { setSelectedAlbumGenere, setSelectedAlbumGenId, setIsPlaying } =
    useGenere();

  const { id } = useParams();
  const { setOpenSource } = useView();
  const { setSource } = usePlayerSource();
  const { isGoogleLogin, isLoggedIn } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  const [album, setAlbum] = useState(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data3 = [
    { image: gen1, para: "Rap Songs" },
    { image: gen2, para: "Pop Songs" },
    { image: gen3, para: "Rock Songs" },
    { image: gen4, para: "Classic Songs" },
    { image: gen3, para: "Rock Songs" },
    { image: gen2, para: "Pop Songs" },
    { image: gen1, para: "Rap Songs" },
  ];

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 1200) setVisibleCount(4);
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
        const response = await apiInstance.get(apiRoutes.GET_GENRE);
        const albums = response.data.data;
        setData(albums);
        setAlbum(albums);

        dispatch(getAllGenere());

        if (!id && albums.length > 0) {
          setSelectedAlbumGenere(albums[0].songs || []);
          setSelectedAlbumGenId(0); // by-default 0 show
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [dispatch]);

  const handleSelect = (index) => {
    if (!isLoggedIn && !isGoogleLogin) {
      toast.warn("Please Log In To Play Music.");
      return;
    }

    const selectedGenre = data[index];

    if (!selectedGenre) {
      toast.warn("Selected genre is invalid.");
      return;
    }

    const songToPlay = selectedGenre.songs?.[0];

    if (!songToPlay?.cloudinaryUrl) {
      toast.warn("This song has no playable audio.");
      return;
    }

    setSelectedAlbumGenere(selectedGenre.songs);
    setSelectedAlbumGenId(index);
    setSource("musicgeners");
    setIsPlaying(true);
    setCurrentSongIndex(0);
  };

  const handleClick = () => {
    navigate("/viewsong");
    setOpenSource("allgenere");
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
          Music <span className="text-darkpink">Genres</span>
        </h2>
      </div>
      <div
        className=" hidden md:grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-4 gap-[24px] overflow-x-auto "
        style={{ scrollbarWidth: "none" }}
      >
        {(isOpen ? songList : songList.slice(0, visibleCount)).map(
          (item, index) => {
            const extra = data3[index];
            return (
              <div key={item._id || index} onClick={() => handleSelect(index)}>
                <img src={item.genreImage?.[0] || item?.image} alt="img1" />
              </div>
            );
          }
        )}

        <div
          className="pl-[69px] py-[31px] cursor-pointer "
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

      <div className="md:hidden">
        <div
          className=" flex gap-3 overflow-x-auto pt-5"
          style={{ scrollbarWidth: "none" }}
        >
          {songList.map((item, index) => {
            const extra = data3[index];
            return (
              <div key={item._id || index} onClick={() => handleSelect(index)}>
                <div className="bg-[#1F1F1F] w-[150.67px] h-[165px] p-2 rounded-[8px] ">
                  <div className="p-2">
                    <img
                      src={item.genreImage?.[0] || item?.image}
                      alt="a1"
                      className="w-[124.67px] h-[110px]"
                    />
                    <p className="text-white text-[14px] font-Vazirmatn-500 pt-[8px] pl-[8px]">
                      {extra.para}
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

export default MusicGeners;

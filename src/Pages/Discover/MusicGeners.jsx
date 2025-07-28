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
import { useParams } from "react-router-dom";
import { useGenere } from "../Context/GenereContext";
import { useAuth } from "../Context/AuthContext";
import { toast } from "react-toastify";

const MusicGeners = () => {
  const {
    selectedAlbumGenere,
    setSelectedAlbumGenere,
    selectedAlbumGenId,
    setSelectedAlbumGenId,
    setIsPlaying,
  } = useGenere();

  console.log("selectedAlbumGenere :", selectedAlbumGenere);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  const [album, setAlbum] = useState(null);
  const [data, setData] = useState([]);
  console.log("data>>>>genree :", data);
  const { isGoogleLogin, isLoggedIn } = useAuth();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = selectedAlbumGenere?.[currentSongIndex];

  const dispatch = useDispatch();

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
      if (width >= 1024) setVisibleCount(4);
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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NjM2ZTY1ZjRjYTNkYjIxNzcwMjg5YSIsImlhdCI6MTc1MzY3NTY3OCwiZXhwIjoxNzUzNzYyMDc4fQ.hI-LhoC-TG1lK8fEqATg7LB8GrCZV8qIRN58w_lYAx0"
    );
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

  if (error) {
    return <p className="text-white">Error..</p>;
  }

  if (loading) {
    return <p className="text-white">Loading</p>;
  }

  // const filteredAlbum = Array.isArray(album)
  //   ? album.filter((a) => a._id === id)
  //   : [];

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

    // Assuming each genre has a 'songs' array
    const songToPlay = selectedGenre.songs?.[0]; // pick first song in that genre, or add UI to pick song later

    if (!songToPlay?.cloudinaryUrl) {
      toast.warn("This song has no playable audio.");
      return;
    }

    setSelectedAlbumGenere(selectedGenre.songs); // store array of songs
    setSelectedAlbumGenId(index);
    setIsPlaying(true);
    setCurrentSongIndex(0); // You need this state in your context or component to track which song is playing
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
          Music <span className="text-darkpink">Genres</span>
        </h2>
      </div>
      <div
        className=" hidden md:grid lg:grid-cols-5 md:grid-cols-4 gap-[24px] overflow-x-auto "
        style={{ scrollbarWidth: "none" }}
      >
        {Array.isArray(data) &&
          (isOpen ? data : data.slice(0, visibleCount)).map((item, index) => (
            <div
              key={item._id || index}
              className=""
              onClick={() => handleSelect(index)}
            >
              <img src={item.genreImage?.[0]} alt="img1" />
            </div>
          ))}
        <div
          className="pl-[69px] py-[31px] cursor-pointer "
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

      <div className="md:hidden">
        <div
          className=" flex gap-3 overflow-x-auto pt-5"
          style={{ scrollbarWidth: "none" }}
        >
          {Array.isArray(data) &&
            data.map((item, index) => {
              const extra = data3[index];
              return (
                <div key={item._id || index}>
                  <div className="bg-[#1F1F1F] w-[150.67px] h-[165px] p-2 rounded-[8px] ">
                    <div className="p-2">
                      <img
                        src={item.genreImage?.[0]}
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

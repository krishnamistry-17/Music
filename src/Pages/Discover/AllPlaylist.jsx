import React, { useEffect, useState } from "react";
import song1 from "../../assets/images/song1.png";
import song2 from "../../assets/images/song2.png";
import song3 from "../../assets/images/song3.png";
import song4 from "../../assets/images/song4.png";
import song5 from "../../assets/images/song5.png";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { useDispatch } from "react-redux";
import { getAllPlaylist } from "../Redux/Action/action";
import { useMood } from "../Context/MoodContext";
import { useParams } from "react-router-dom";
import { usePlayerSource } from "../Context/PlayerSourceContext";
import { useAuth } from "../Context/AuthContext";
import { toast } from "react-toastify";

const AllPlaylist = () => {
  const { setSelectedAlbumMood, setSelectedAlbumMoodId, setIsPlaying } =
    useMood();
  const { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  const { setSource } = usePlayerSource();
  const { isGoogleLogin, isLoggedIn } = useAuth();

  const [data, setData] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const dispatch = useDispatch();

  const data3 = [
    { image: song1, para: "Sad Playlist" },
    { image: song2, para: "Chill Playlist" },
    { image: song3, para: "Workout Playlist" },
    { image: song4, para: "Love Playlist" },
    { image: song5, para: "Happy Playlist" },
    { image: song3, para: "Workout Playlist" },
    { image: song2, para: "Chill Playlist" },
    { image: song1, para: "Sad Playlist" },
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
        const response = await apiInstance.get(apiRoutes.GET_ALLPLAYLIST);
        const albums = response.data.data;
        setData(albums);
        dispatch(getAllPlaylist());

        if (!id && albums.length > 0) {
          setSelectedAlbumMood(albums[0].songs || []);
          setSelectedAlbumMoodId(0); // by-default 0
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
    if (!isGoogleLogin && !isLoggedIn) {
      toast.warn("Please log in to play music");
      return;
    }

    const selectedMood = data[index];

    if (!selectedMood) {
      toast.warn("Selected mood is invalid");
      return;
    }

    const songToPlay = selectedMood.songs?.[0];

    if (!songToPlay?.cloudinaryUrl) {
      toast.warn("This song has no playback audio.");
      return;
    }
    setSelectedAlbumMood(selectedMood.songs);
    setSelectedAlbumMoodId(index);
    setSource("moodplay");
    setIsPlaying(true);
    setCurrentSongIndex(0);
  };

  const combinedPlayList = [...data, ...data3];
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
          Mood <span className="text-darkpink">Playlist</span>
        </h2>
      </div>
      <div>
        <div
          className=" hidden md:grid xl:grid-cols-6 md:grid-cols-4 gap-[24px] overflow-x-auto "
          style={{ scrollbarWidth: "none" }}
        >
          {songList.map((item, index) => {
            const fallback = data3[index] || {};

            const image = item?.playlistImage || item.image || fallback.image;
            const title = item.title || item.para || fallback.para;

            return (
              <div key={item._id || index} onClick={() => handleSelect(index)}>
                <div className="bg-[#1F1F1F] w-[174.67px] h-[195px]  rounded-[8px] ">
                  <div>
                    <img
                      src={image}
                      alt="a1"
                      className="w-[174.67px] h-[150px]"
                    />
                    <p className="text-white text-[16px] font-Vazirmatn-500 pt-[12px] pl-[4px]">
                      {title}
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

export default AllPlaylist;

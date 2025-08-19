import React, { useEffect, useState } from "react";
import newmusic1 from "../../assets/images/newmusic1.png";
import newmusic2 from "../../assets/images/newmusic2.png";
import newmusic3 from "../../assets/images/newmusic3.png";
import newmusic4 from "../../assets/images/newmusic4.png";
import newmusic5 from "../../assets/images/newmusic5.png";
import newmusic6 from "../../assets/images/newmusic6.png";
import plus from "../../assets/svgs/plus.svg";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { useVideo } from "../Context/VideoContext";
import { toast } from "react-toastify";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useView } from "../Context/ViewContext";
import { usePlayerSource } from "../Context/PlayerSourceContext";

const AllVideo = () => {
  const {
    isPlaying,
    setIsPlaying,
    videos,
    setVideos,
    videoRefs,
    playVideoAt,
    currentIndex,
    setCurrentIndex,
  } = useVideo();

  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  const { isLoggedIn, isGoogleLogin } = useAuth();
  const { setSource } = usePlayerSource();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setOpenSource } = useView();
  const navigate = useNavigate();

  const data3 = [
    {
      image: newmusic1,
      para: "Shape Of You",
      head: "Ed Sheeran",
      view: "5M views",
    },
    { image: newmusic2, para: "Roar", head: "Katy Perry", view: "4.6M views" },
    {
      image: newmusic6,
      para: "Waka Waka",
      head: "Shakira",
      view: "3.5M views",
    },
    {
      image: newmusic3,
      para: "Shake It Off",
      head: "Taylor Swift",
      view: "4.2M views",
    },
    {
      image: newmusic4,
      para: "Someone Like You",
      head: "Adele",
      view: "3M views",
    },
    {
      image: newmusic5,
      para: "New Rules",
      head: "Dualipa",
      view: "3.7M views",
    },
    {
      image: newmusic3,
      para: "Shake It Off",
      head: "Taylor Swift",
      view: "4.2M views",
    },
    { image: newmusic2, para: "Roar", head: "Katy Perry", view: "4.6M views" },
    {
      image: newmusic1,
      para: "Shape Of You",
      head: "Ed Sheeran",
      view: "5M views",
    },
  ];

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 1200) setVisibleCount(3);
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
        const response = await apiInstance.get(apiRoutes.GET_VIDEO);
        const videos = response.data.data;
        setData(videos);
        setVideos(videos);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    videoRefs.current = data?.map(
      (_, i) => videoRefs.current[i] ?? React.createRef()
    );
  }, [data]);

  if (error) {
    return <div className="text-white">Error..</div>;
  }

  if (loading) {
    return <div>Loading..</div>;
  }

  const handleSelect = (index, item) => {
    if (item?.cloudinaryUrl) {
      toast.warn("This has no video preview");
      return;
    }
    if (!isGoogleLogin && !isLoggedIn) {
      toast.warn("Please Log In To Play Music.");
    } else {
      setVideos(data);
      playVideoAt(index);
      setCurrentIndex(index);
      setSource("allvideo");
      setIsPlaying(true);
    }
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
          Music <span className="text-darkpink">Video</span>
        </h2>
      </div>

      <div
        className=" hidden md:grid   xl:grid-cols-3 grid-cols-2  gap-[24px] overflow-x-auto "
        style={{ scrollbarWidth: "none" }}
      >
        {data?.map((item, index) => {
          const fallback = data3[index] || {};

          const image = item.songImage?.[0] || item.image || fallback.image;
          const title = item.title || item.para || fallback.para;
          const artist = item?.artistId?.name || item.head || fallback.head;
          const view = item.view || fallback.view;
          return (
            <div key={item._id || index}>
              <div
                className="bg-[#1F1F1F] w-[302px] h-fit  rounded-[5px] p-[8px] object-cover"
                onClick={() => handleSelect(index, item._id)}
              >
                <div>
                  <div>
                    <video
                      src={item?.cloudinaryUrl}
                      ref={videoRefs.current[index]}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-auto"
                    />
                  </div>

                  <div>
                    <p className="text-white text-[20px] font-Vazirmatn-600 pt-[4px] ">
                      {title}
                    </p>
                    <div className="flex justify-between">
                      <div className="text-white text-[12px] font-Vazirmatn-300 ">
                        {artist}
                      </div>
                      <div className="text-white text-[12px] font-Vazirmatn-300 ">
                        {view}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllVideo;

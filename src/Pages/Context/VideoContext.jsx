import { createContext, useContext, useEffect, useRef, useState } from "react";

const VideoContext = createContext();

export const VideoSongProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef([]);

  const playVideoAt = (index) => {
    if (index >= 0 && index < videos.length) {
      setCurrentIndex(index);
      setIsPlaying(true);
    }
  };

  return (
    <VideoContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        videos,
        setVideos,
        playVideoAt,
        videoRefs,
        currentIndex,
        setCurrentIndex,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => useContext(VideoContext);

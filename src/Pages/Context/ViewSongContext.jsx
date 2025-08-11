import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";

const viewSongContext = createContext();

export const ViewSongProvider = ({ children }) => {
  const [viewSongs, setViewSongs] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [allplay, setAllPlay] = useState([]);
  const audioRef = useRef(null);

  const currentSong = viewSongs[currentIndex] || null;


  const playSongAt = (index) => {
    if (index >= 0 && index < viewSongs.length) {
      setCurrentIndex(index);
      setIsPlaying(true);
    }
  };

  const playNext = () => {
    if (viewSongs.length === 0) return;
    if (isShuffle) {
      const rand = Math.floor(Math.random() * viewSongs.length);
      setCurrentIndex(rand);
    } else {
      setCurrentIndex((prev) => (prev + 1) % viewSongs.length);
    }
  };

  const playPrevious = () => {
    if (viewSongs.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + viewSongs.length) % viewSongs.length);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.load();
    if (isPlaying) {
      audio.play().catch((err) => {
        console.warn("Playback failed:", err);
        setIsPlaying(false);
      });
    }
  }, [currentIndex, isPlaying, viewSongs]);

  return (
    <viewSongContext.Provider
      value={{
        viewSongs,
        setViewSongs,
        currentSong,
        currentIndex,
        setCurrentIndex,
        playSongAt,
        playNext,
        playPrevious,
        isPlaying,
        setIsPlaying,
        isShuffle,
        setIsShuffle,
        isRepeat,
        setIsRepeat,
        audioRef,
        allplay,
        setAllPlay,
      }}
    >
      {children}
    </viewSongContext.Provider>
  );
};

export const useViewSong = () => useContext(viewSongContext);

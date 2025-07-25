import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";

const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [allplay, setAllPlay] = useState([]);
  const audioRef = useRef(null);

  const currentSong = songs[currentIndex] || null;

  const playSongAt = (index) => {
    if (index >= 0 && index < songs.length) {
      setCurrentIndex(index);
      setIsPlaying(true);
    }
  };

  const playNext = () => {
    if (songs.length === 0) return;
    if (isShuffle) {
      const rand = Math.floor(Math.random() * songs.length);
      setCurrentIndex(rand);
    } else {
      setCurrentIndex((prev) => (prev + 1) % songs.length);
    }
  };

  const playPrevious = () => {
    if (songs.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
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
  }, [currentIndex, isPlaying, songs]);

  return (
    <SongContext.Provider
      value={{
        songs,
        setSongs,
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
    </SongContext.Provider>
  );
};

export const useSong = () => useContext(SongContext);

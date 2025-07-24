import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
  const { id } = useParams();
  const [selectedAlbum, setSelectedAlbum] = useState([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const audioRef = useRef(null);
  const [album, setAlbum] = useState(null);

  const currentSong = selectedAlbum[selectedAlbumId];
  console.log("currentSong :", currentSong);

  const filteredAlbum = Array.isArray(album)
    ? album.filter((a) => a._id === id)
    : [];

  const playSongAt = (index) => {
    if (index >= 0 && index < selectedAlbum.length) {
      setSelectedAlbumId(index);
      setIsPlaying(true);
    }
  };

  const playNext = () => {
    if (selectedAlbum.length === 0) return;

    if (isShuffle) {
      const rand = Math.floor(Math.random() * selectedAlbum.length);
      setSelectedAlbumId(rand);
    } else {
      setSelectedAlbumId((prev) => (prev + 1) % selectedAlbum.length);
    }
  };
  const playPrevious = () => {
    if (selectedAlbum.length === 0) return;
    setSelectedAlbumId(
      (prev) => (prev - 1 + selectedAlbum.length) % selectedAlbum.length
    );
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
  }, [selectedAlbumId, isPlaying, selectedAlbum]);

  return (
    <AlbumContext.Provider
      value={{
        selectedAlbum,
        setSelectedAlbum,
        selectedAlbumId,
        setSelectedAlbumId,
        currentSong,
        playNext,
        playPrevious,
        playSongAt,
        isPlaying,
        setIsPlaying,
        isRepeat,
        setIsRepeat,
        isShuffle,
        setIsShuffle,
        audioRef,
        album,
        setAlbum,
        filteredAlbum,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
};

export const useAlbum = () => useContext(AlbumContext);

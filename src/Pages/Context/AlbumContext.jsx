import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";

const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
  const { id } = useParams();
  const [selectedAlbum, setSelectedAlbum] = useState([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const audioRef = useRef(null);
  const [album, setAlbum] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentSong = selectedAlbum[selectedAlbumId];
  
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
        const response = await apiInstance.get(apiRoutes.GET_ALL_DATA);
        const albums = response.data.data;
        setAlbum(albums);
        setSelectedAlbum(albums.length > 0 ? albums[0].songs : []);
        setSelectedAlbumId(0);
      } catch (error) {
        setError(error.message || "Failed to fetch albums");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

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
        loading,
        error,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
};

export const useAlbum = () => useContext(AlbumContext);

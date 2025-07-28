import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";

const GenereContext = createContext();

export const GenereProvider = ({ children }) => {
  const { id } = useParams();
  const [selectedAlbumGenere, setSelectedAlbumGenere] = useState([]);
  const [selectedAlbumGenId, setSelectedAlbumGenId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const audioRef = useRef(null);
  const [album, setAlbum] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [selectedAlbumGenere, setSelectedAlbumGenere] = useState([]); // array of songs
  // const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(false);

  const currentSong = selectedAlbumGenere[selectedAlbumGenId];

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
        const response = await apiInstance.get(apiRoutes.GET_GENRE);
        const albums = response.data.data;
        setAlbum(albums);
        setSelectedAlbumGenere(albums.length > 0 ? albums[0].songs : []);
        setSelectedAlbumGenId(0);
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
      setSelectedAlbumGenId(index);
      setIsPlaying(true);
    }
  };

  const playNext = () => {
    if (selectedAlbumGenere.length === 0) return;

    if (isShuffle) {
      const rand = Math.floor(Math.random() * selectedAlbumGenere.length);
      setSelectedAlbumGenId(rand);
    } else {
      setSelectedAlbumGenId((prev) => (prev + 1) % selectedAlbumGenere.length);
    }
  };
  const playPrevious = () => {
    if (selectedAlbum.length === 0) return;
    setSelectedAlbumGenId(
      (prev) =>
        (prev - 1 + selectedAlbumGenere.length) % selectedAlbumGenere.length
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
  }, [selectedAlbumGenId, isPlaying, selectedAlbumGenere]);

  return (
    <GenereContext.Provider
      value={{
        selectedAlbumGenere,
        setSelectedAlbumGenere,
        selectedAlbumGenId,
        setSelectedAlbumGenId,
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
    </GenereContext.Provider>
  );
};

export const useGenere = () => useContext(GenereContext);

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";

const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const { id } = useParams();
  const [selectedAlbumMood, setSelectedAlbumMood] = useState([]);
  const [selectedAlbumMoodId, setSelectedAlbumMoodId] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const audioRef = useRef(null);
  const [album, setAlbum] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentSong = selectedAlbumMood?.[currentSongIndex];

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
        const response = await apiInstance.get(apiRoutes.GET_ALLPLAYLIST);
        const albums = response.data.data;
        setAlbum(albums);
        setSelectedAlbumMood(albums.length > 0 ? albums[0].songs : []);
        setSelectedAlbumMoodId(0);
      } catch (error) {
        setError(error.message || "Failed to fetch albums");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  const playSongAt = (index) => {
    if (index >= 0 && index < selectedAlbumMood.length) {
      setSelectedAlbumMoodId(index);
      setIsPlaying(true);
    }
  };

  const playNext = () => {
    if (currentSongIndex < selectedAlbumMood.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1); //next song
      setIsPlaying(true); //play next song auto
    } else {
      setCurrentSongIndex(0);
      setIsPlaying(true);
    }
  };
  const playPrevious = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
      setIsPlaying(true);
    }
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
  }, [selectedAlbumMoodId, isPlaying, selectedAlbumMood]);

  return (
    <MoodContext.Provider
      value={{
        selectedAlbumMood,
        setSelectedAlbumMood,
        selectedAlbumMoodId,
        setSelectedAlbumMoodId,
        currentSongIndex,
        setCurrentSongIndex,
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
    </MoodContext.Provider>
  );
};

export const useMood = () => useContext(MoodContext);

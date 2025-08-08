import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { useLocation } from "react-router-dom";

const ArtistContext = createContext();

export const ArtistProvider = ({ children }) => {
  const location = useLocation();
  const id = location.pathname.split("/artist/")[1]; // works for /artist/:id or undefined

  const [selectedArtist, setSelectedArtist] = useState([]);

  const [selectedArtistId, setSelectedArtistId] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState(null);

  const [isRepeat, setIsRepeat] = useState(false);
  const audioRef = useRef(null);
  const [album, setAlbum] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allArtist, setAllArtist] = useState([]);
  const [currentArtistId, setCurrentArtistId] = useState(0);

  const currentSong =
    Array.isArray(selectedArtist) && selectedArtist.length > 0
      ? selectedArtist[selectedArtistId]
      : null;

  const currentArtist = useMemo(() => {
    return selectedArtist?.[selectedArtistId] ?? null;
  }, [selectedArtist, selectedArtistId]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const token = localStorage.getItem("accessToken");
  //     if (!token) {
  //       setError("Unauthorized: Please login first");
  //       setLoading(false);
  //       return;
  //     }

  //     try {
  //       const response = await apiInstance.get(apiRoutes.GET_ALL_ARTIST);
  //       const albums = response.data.data;
  //       setAlbum(albums);
  //       setAllArtist(albums);
  //       setSelectedArtist(albums.length > 0 ? albums[0].songs : []);
  //       setSelectedArtistId(0);
  //     } catch (error) {
  //       setError(error.message || "Failed to fetch albums");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, [id]);

  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setError("Unauthorized: Please login first");
        setLoading(false);
        return;
      }

      try {
        const response = await apiInstance.get(apiRoutes.GET_ALL_ARTIST);
        const albums = response.data.data;
        setAlbum(albums);
        setAllArtist(albums);

        // Filter album for specific artist
        const artistAlbum = albums.find((album) => album._id === id); // `id` from URL

        if (artistAlbum?.songs?.length > 0) {
          setSelectedArtist(artistAlbum.songs);
          setSelectedArtistId(0); // First song
          setIsPlaying(true); //  Autoplay if needed
        }
      } catch (error) {
        setError(error.message || "Failed to fetch albums");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  const playSongAt = (index) => {
    if (index >= 0 && index < selectedArtist.length) {
      setSelectedArtistId(index);
      setIsPlaying(true);
    }
  };

  const playNext = () => {
    if (selectedArtist.length === 0) return;

    if (isShuffle) {
      const rand = Math.floor(Math.random() * selectedArtist.length);
      setSelectedArtistId(rand);
    } else {
      setSelectedArtistId((prev) => (prev + 1) % selectedArtist.length);
    }
  };
  const playPrevious = () => {
    if (selectedArtist.length === 0) return;
    setSelectedArtistId(
      (prev) => (prev - 1 + selectedArtist.length) % selectedArtist.length
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
  }, [selectedArtistId, isPlaying, selectedArtist]);

  return (
    <ArtistContext.Provider
      value={{
        selectedArtist,
        setSelectedArtist,
        selectedArtistId,
        setSelectedArtistId,
        currentSong,
        currentAlbum,
        currentArtist,
        setCurrentAlbum,
        playNext,
        playPrevious,
        playSongAt,
        currentArtistId,
        setCurrentArtistId,
        isPlaying,
        setIsPlaying,
        isRepeat,
        setIsRepeat,
        allArtist,
        setAllArtist,
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
    </ArtistContext.Provider>
  );
};

export const useArtist = () => useContext(ArtistContext);

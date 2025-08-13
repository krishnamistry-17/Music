import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import apiInstance from "../../../utils/axios";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchParams] = useSearchParams();
  const [selectedAlbum, setSelectedAlbum] = useState([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const audioRef = useRef(null);
  const query = searchParams.get("query");
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 5;

  const [results, setResults] = useState(null);

  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const currentSong = selectedAlbum[selectedAlbumId];

  useEffect(() => {
    if (query) {
      setLoading(true);
      async function fetchResults() {
        try {
          const response = await apiInstance.get(
            `/global-search?query=${query}&page=${page}&limit=${limit}`
          );
          setResults(response.data.results);
          setSelectedAlbum(response.data.results?.songs || []);
        } catch (error) {
          console.error("Error fetching search results:", error.message);
          setResults(null);
        } finally {
          setLoading(false);
        }
      }
      fetchResults();
    } else {
      setResults(null);
    }
  }, [query, page, limit]);

  const playSongAt = (index) => {
    if (index >= 0 && index < selectedAlbum.length) {
      setSelectedAlbumId(index);
      setIsPlaying(true);
    }
  };

  const playNext = () => {
    const nextIndex = isShuffle
      ? Math.floor(Math.random() * selectedAlbum.length)
      : selectedAlbumId + 1;
    if (nextIndex < selectedAlbum.length) {
      setSelectedAlbumId(nextIndex);
      setIsPlaying(true);
    }
  };

  const playPrevious = () => {
    const prevIndex = selectedAlbumId - 1;
    if (prevIndex >= 0) {
      setSelectedAlbumId(prevIndex);
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
  }, [selectedAlbumId, isPlaying, selectedAlbum]);

  return (
    <SearchContext.Provider
      value={{
        results,
        setResults,
        loading,
        suggestions,
        setSuggestions,
        selectedAlbum,
        setSelectedAlbum,
        selectedAlbumId,
        setSelectedAlbumId,
        playNext,
        playPrevious,
        isPlaying,
        setIsPlaying,
        isShuffle,
        setIsShuffle,
        audioRef,
        playSongAt,
        currentSong,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);

import React, { useEffect, useState } from "react";
import search from "../../assets/svgs/search.svg";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import apiInstance from "../../../utils/axios";
import { usePlayerSource } from "../Context/PlayerSourceContext";
import AllAddPlayList from "../PlayList/AllPlayList/AllAddPlayList";
import { usePlayList } from "../Context/AddPlayListContext";
import { toast } from "react-toastify";

const SearchSong = ({ onAddSong }) => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  console.log("suggestions :", suggestions);
  const { setSelectedSongId, selectedSongId } = usePlayList();
  const [searchParams, setSearchParams] = useSearchParams();

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setSource } = usePlayerSource();

  useEffect(() => {
    const query = searchParams.get("query") || "";
    setSearchInput(query);
  }, [searchParams]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchInput.trim().length > 1) {
        fetchSuggestions(searchInput);
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchInput]);

  const fetchSuggestions = async (query) => {
    try {
      const response = await apiInstance.get(
        `/global-search?query=${encodeURIComponent(query)}&page=1&limit=5`
      );
      setSuggestions(response.data.results || []);
    } catch (error) {
      console.error("Suggestion fetch failed:", error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;

    setLoading(true);
    try {
      const response = await apiInstance.get(
        `/global-search?query=${encodeURIComponent(searchInput)}&page=1&limit=5`
      );
      setResults(response.data.results);
    } catch (error) {
      console.error("Search failed:", error);
      setResults(null);
    } finally {
      setLoading(false);
    }

    setSource("searchsong");
  };

  const { artists, albums, playlists, songs, genres } = results;
  console.log("results :", results);

  const handleSuggestionClick = async (text) => {
    setSearchInput(text);
    setSuggestions([]);
    setLoading(true);

    try {
      const response = await apiInstance.get(
        `/global-search?query=${encodeURIComponent(text)}&page=1&limit=5`
      );
      setResults(response.data.results);
      console.log("response.data.results :", response.data.results);
    } catch (error) {
      console.error("Search failed:", error);
      setResults(null);
    } finally {
      setLoading(false);
    }

    setSource("searchsong");
  };

  const handleAdd = (item) => {
    setSelectedSongId(item._id);
    toast.success("Song added to playlist");
  };

  return (
    <div className="relative text-white">
      <form onSubmit={handleSearch}>
        <div className="md:w-[335.67px] w-[275px] h-[38px] rounded-[10px] bg-blackbg">
          <div className="py-[6.5px] px-[8px] w-[319px]">
            <div className="flex gap-[3px] items-center">
              <img src={search} alt="search" />
              <input
                type="search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search For Musics, Artists,..."
                className="text-[12px] text-white font-Vazirmatn-300 
                  focus:ring-0 focus:outline-none focus:shadow-none
                  w-[275px]"
              />
            </div>
          </div>
        </div>
      </form>

      {suggestions && Object.keys(suggestions).length > 0 && (
        <div
          className="absolute bg-[#1f1f1f] text-white 
        md:w-[335.67px] w-[275px] z-50 rounded-md mt-4 max-h-fit overflow-y-auto shadow-lg border border-gray-700"
          style={{ scrollbarWidth: "none" }}
        >
          {["songs", "artists", "albums", "genres", "playlists"].map(
            (category) =>
              suggestions[category]?.length > 0 ? (
                <div key={category} className="p-2 border-b border-gray-600">
                  <p className="text-xs text-gray-400 mb-1 capitalize">
                    {category}
                  </p>
                  {suggestions[category].map((item, index) => (
                    <div
                      key={item._id || index}
                      className="flex justify-between items-center cursor-pointer p-1 text-sm rounded"
                    >
                      <div
                        onClick={() =>
                          handleSuggestionClick(item.name || item.title)
                        }
                        className="flex gap-2 items-center"
                      >
                        <img
                          src={
                            item?.songImage?.[0] ||
                            item?.artistImage?.[0] ||
                            item?.albumImages?.[0] ||
                            item?.playlistImage?.[0] ||
                            item?.genreImage?.[0] ||
                            ""
                          }
                          alt={item?.title || item?.name}
                          className="w-[42px] h-[42px] rounded"
                        />
                        <p className="text-white">
                          {item?.title || item?.name}
                        </p>
                      </div>
                      <button
                        className="text-white text-[14px] border border-white rounded-lg px-3 py-1 ml-2"
                        onClick={() => onAddSong(item)}
                      >
                        Add
                      </button>
                    </div>
                  ))}
                </div>
              ) : null
          )}
        </div>
      )}

      {loading && <p className="text-white mt-2">Loading...</p>}

      {/* {results?.songs?.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg mb-2">Songs</h2>
          {results.songs.map((song) => (
            <div
              key={song._id}
              className="flex items-center justify-between bg-gray-700 p-2 mb-2 rounded"
            >
              <div className="flex items-center gap-3">
                <img
                  src={
                    song?.songImage?.[0] ||
                    song?.artistImage?.[0] ||
                    song?.albumImages?.[0] ||
                    song?.playlistImage?.[0] ||
                    song?.genreImage?.[0] ||
                    ""
                  }
                  alt={song?.title || song?.name}
                  className="w-[42px] h-[42px] rounded"
                />
                <p>{song?.title || song?.name}</p>
              </div>
              <button
                className="text-sm border px-3 py-1 rounded"
                onClick={() => onAddSong(song)}
              >
                Add
              </button>
            </div>
          ))}
        </div>
      )}

      {results?.albums?.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg mb-2">Albums</h2>
          {results.albums.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-gray-700 p-2 mb-2 rounded"
            >
              <div className="flex items-center gap-3">
                <img
                  src={
                    item?.songImage?.[0] ||
                    item?.artistImage?.[0] ||
                    item?.albumImages?.[0] ||
                    item?.playlistImage?.[0] ||
                    item?.genreImage?.[0] ||
                    ""
                  }
                  alt={item?.title || item?.name}
                  className="w-[42px] h-[42px] rounded"
                />
                <p>{item?.title || item?.name}</p>
              </div>
              <button
                className="text-sm border px-3 py-1 rounded"
                onClick={() => onAddSong(item)}
              >
                Add
              </button>
            </div>
          ))}
        </div>
      )}

      {results?.artists?.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg mb-2">Artists</h2>
          {results.artists.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-gray-700 p-2 mb-2 rounded"
            >
              <div className="flex items-center gap-3">
                <img
                  src={
                    item?.songImage?.[0] ||
                    item?.artistImage?.[0] ||
                    item?.albumImages?.[0] ||
                    item?.playlistImage?.[0] ||
                    item?.genreImage?.[0] ||
                    ""
                  }
                  alt={item?.title || item?.name}
                  className="w-[42px] h-[42px] rounded"
                />
                <p>{item?.title || item?.name}</p>
              </div>
              <button
                className="text-sm border px-3 py-1 rounded"
                onClick={() => onAddSong(item)}
              >
                Add
              </button>
            </div>
          ))}
        </div>
      )}

      {results?.playlists?.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg mb-2">Playlists</h2>
          {results.playlists.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-gray-700 p-2 mb-2 rounded"
            >
              <div className="flex items-center gap-3">
                <img
                  src={
                    item?.songImage?.[0] ||
                    item?.artistImage?.[0] ||
                    item?.albumImages?.[0] ||
                    item?.playlistImage?.[0] ||
                    item?.genreImage?.[0] ||
                    ""
                  }
                  alt={item?.title || item?.name}
                  className="w-[42px] h-[42px] rounded"
                />
                <p>{item?.title || item?.name}</p>
              </div>
              <button
                className="text-sm border px-3 py-1 rounded"
                onClick={() => onAddSong(item)}
              >
                Add
              </button>
            </div>
          ))}
        </div>
      )}

      {results?.genres?.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg mb-2">Genres</h2>
          {results.genres.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-gray-700 p-2 mb-2 rounded"
            >
              <div className="flex items-center gap-3">
                <img
                  src={
                    item?.songImage?.[0] ||
                    item?.artistImage?.[0] ||
                    item?.albumImages?.[0] ||
                    item?.playlistImage?.[0] ||
                    item?.genreImage?.[0] ||
                    ""
                  }
                  alt={item?.title || item?.name}
                  className="w-[42px] h-[42px] rounded"
                />
                <p>{item?.title || item?.name}</p>
              </div>
              <button
                className="text-sm border px-3 py-1 rounded"
                onClick={() => onAddSong(item)}
              >
                Add
              </button>
            </div>
          ))}
        </div>
      )} */}

      {/* display here searched result */}
      <div>
        <AllAddPlayList />
      </div>
    </div>
  );
};

export default SearchSong;

import React, { useEffect, useState } from "react";
import search from "../../assets/svgs/search.svg";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import apiInstance from "../../../utils/axios";
import { usePlayerSource } from "../Context/PlayerSourceContext";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(
        `/search?query=${encodeURIComponent(searchInput)}&page=1&limit=5`
      );
    }
    setSource("searchsong");
  };

  const handleSuggestionClick = (text) => {
    navigate(`/search?query=${encodeURIComponent(text)}&page=1&limit=5`);
    setSuggestions([]);
    setSource("searchsong");
  };

  return (
    <div className="relative text-white">
      <form onSubmit={handleSearch}>
        <div className="lg:w-[335.67px] w-[275px] h-[38px] rounded-[10px] bg-blackbg">
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
        md:w-[335.67px] w-[275px] z-50 rounded-md mt-1 max-h-[300px] overflow-y-auto shadow-lg border border-gray-700"
        >
          {["songs", "artists", "albums", "genres", "playlists"].map(
            (category) =>
              suggestions[category]?.length > 0 && (
                <div key={category} className="p-2 border-b border-gray-600">
                  <p className="text-xs text-gray-400 mb-1 capitalize">
                    {category}
                  </p>
                  {suggestions[category].map((item) => (
                    <div
                      key={item._id}
                      className="cursor-pointer hover:bg-gray-700 p-1 text-sm rounded"
                      onClick={() =>
                        handleSuggestionClick(item.name || item.title)
                      }
                    >
                      {item.name || item.title}
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Search;

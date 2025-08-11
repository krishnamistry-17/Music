import React, { useEffect, useState } from "react";
import search from "../../assets/svgs/search.svg";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");
  console.log("searchInput :", searchInput);

  useEffect(() => {
    const query = searchParams.get("get") || [];
    setSearchInput(query);
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();

    setSearchParams({ query: searchInput, page: 1, limit: 5 });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="w-[335.67px] h-[38px] rounded-[10px] bg-blackbg">
          <div className="py-[6.5px] px-[8px]  w-[319px]">
            <div className="flex gap-[3px] items-center">
              <div>
                <img src={search} alt="serach" />
              </div>
              <div>
                <input
                  type="search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search For Musics, Artists,..."
                  className="text-[12px] text-white font-Vazirmatn-300 
                  focus:ring-0 focus:outline-none focus:shadow-none
                  w-[275px] "
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;

import React from "react";
import search from "../../assets/svgs/search.svg";

const Search = () => {
  return (
    <div>
      <div className="lg:flex hidden gap-[12px]">
        <div className="w-[335.67px] h-[38px] rounded-[10px] bg-blackbg">
          <div className="py-[6.5px] px-[8px]  w-[319px]">
            <div className="flex gap-[3px]">
              <div>
                <img src={search} alt="serach" />
              </div>
              <div>
                <input
                  type="search"
                  placeholder="Search For Musics, Artists,..."
                  className="text-[12px] text-white font-Vazirmatn-300 focus:ring-0 focus:outline-none focus:shadow-none w-[155px] h-[19px] opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-[6.5px] px-[12px]">
          <div className="w-[111.89px] h-[25px]">
            <a
              href="/about"
              className="text-white text-[16px] font-Vazirmatn-500 text-center"
            >
              About Us
            </a>
          </div>
          <div className="w-[111.89px] h-[25px]">
            <a
              href="/contact"
              className="text-white text-[16px] font-Vazirmatn-500 text-center"
            >
              Contact
            </a>
          </div>
          <div className="w-[111.89px] h-[25px]">
            <a
              href="/premium"
              className="text-white text-[16px] font-Vazirmatn-500 text-center"
            >
              Premuim
            </a>
          </div>
        </div>
        <div>
          <div className="flex gap-[12px]">
            <div>
              <button className="px-[63.42px] py-[7px] border-darkpink border-[1px] rounded-[4px] text-[14px] text-darkpink font-Vazirmatn-300">
                Login
              </button>
            </div>
            <div>
              <button className="px-[56.92px] py-[7px] bg-darkpink rounded-[4px] text-[14px] text-white font-Vazirmatn-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

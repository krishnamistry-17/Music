import React, { useEffect } from "react";
import whiteback from "../../assets/svgs/whitearrow.svg";
import { useNavigate } from "react-router-dom";
import { useArtist } from "../Context/ArtistContext";
import option from "../../assets/svgs/option.svg";
const Library = () => {
  const navigate = useNavigate();
  const { followedArtist } = useArtist();
  console.log("followedArtist :", followedArtist);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div>
      <div className="flex gap-3 items-center">
        <div className="lg:hidden items-center py-4 pl-1">
          <img
            onClick={() => navigate("/")}
            src={whiteback}
            alt="back"
            className="w-[36px] h-[43px]"
          />
        </div>
        <h2
          className="md:text-[42px] text-[32px]  font-Vazirmatn-600 py-4 px-3
            bg-gradient-to-r from-darkpink to-blue text-transparent bg-clip-text
           "
        >
          Followed Artist
        </h2>
      </div>
      <div className="w-full">
        <div
          className="border border-gray-700 p-4 rounded bg-[#1E1E1E] 
                 flex justify-between"
        >
          <div className="flex items-center gap-4">
            <img
              src={
                followedArtist?.artistImage || followedArtist?.[0]?.artistImage
              }
              alt={followedArtist?.name || followedArtist?.[0]?.name}
              className="w-[80px] h-[80px] rounded object   -cover border"
            />
            <div>
              <p className="text-white text-[22px]">
                {followedArtist?.name || followedArtist?.[0]?.name}
              </p>
              <p className="text-white text-[18px] truncate sm:w-[315px] w-[141px]">
                {followedArtist?.bio || followedArtist?.[0]?.bio}
              </p>
            </div>
          </div>

          <div className="flex justify-end items-center">
            <img src={option} alt="op" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;

import React from "react";
import { useSelector } from "react-redux";

const AllFavorites = () => {
  // Access favorites from Redux store
  const favorites = useSelector((state) => state.favorites);
  console.log("favorites :", favorites);

  if (!favorites.length) {
    return <div className="text-white">No favorite songs yet.</div>;
  }

  return (
    <div className="text-white">
      <h2
        className="text-[42px]  font-Vazirmatn-600 py-4
       bg-gradient-to-r from-darkpink to-blue text-transparent bg-clip-text
      "
      >
        Favorite Songs
      </h2>
      <div className=" grid grid-cols-1 gap-4">
        {favorites.map((song) => (
          <div
            key={song._id}
            className="border border-gray-700 p-4 rounded bg-[#1E1E1E]"
          >
            <div className="flex items-center gap-4">
              <img
                src={song.songImage?.[0]}
                alt={song.title}
                className="w-[80px] h-[80px] rounded object-cover border"
              />
              <div>
                <p className="text-white text-[22px]">{song.title}</p>
                <p className="text-white text-[18px]">{song.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFavorites;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import pfav from "../../assets/svgs/pfav.svg";
import pfull from "../../assets/svgs/pffav.svg";
import { removeFromFavourites } from "../Redux/Action/action";
import { useFav } from "../Context/FavContext";
import { toast } from "react-toastify";
import whiteback from "../../assets/svgs/whitearrow.svg";
import { useNavigate } from "react-router-dom";

const AllFavorites = () => {
  const { selectedId, setSelectedId } = useFav();

  const navigate = useNavigate();
  // Access favorites from Redux store
  const favorites = useSelector((state) => state.favorites);

  const removefav = useSelector((state) => state.removefav);

  const dispatch = useDispatch();

  if (!favorites.length === 0) {
    return <div className="text-white">No favorite songs yet.</div>;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleClick = (song) => {
    dispatch(removeFromFavourites(song));
    setSelectedId(song._id);
    toast.success("Song Removed from favorites..");
  };
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="flex gap-3 overflow-visible">
        <div className="lg:hidden items-center py-4 pl-1">
          <img
            onClick={handleBack}
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
          Favorite Songs
        </h2>
      </div>

      <div className=" grid grid-cols-1 gap-4 px-3">
        {favorites.map((song) => (
          <div
            key={song._id}
            className="border border-gray-700 p-4 rounded bg-[#1E1E1E] 
            flex justify-between"
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

            <div
              className="flex justify-end items-center"
              onClick={() => handleClick(song)}
            >
              {favorites ? (
                <div>
                  <img src={pfull} alt="pf" />
                </div>
              ) : (
                <div>
                  {removefav && (
                    <div>
                      <img src={pfav} alt="pf" />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFavorites;

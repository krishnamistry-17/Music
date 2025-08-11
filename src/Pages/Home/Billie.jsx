import React, { useEffect, useState } from "react";
import billie from "../../assets/images/billie.png";
import previous from "../../assets/svgs/previous.svg";
import next from "../../assets/svgs/next.svg";
import { useArtist } from "../Context/ArtistContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Billie = () => {
  const {
    allArtist: artist,
    setSelectedArtistId,
    selectedArtist,
    currentArtist,
  } = useArtist();

  const navigate = useNavigate();

  useEffect(() => {
    if (!artist || artist.length === 0) return;
  }, [artist]);

  const handleNext = () => {
    if (!selectedArtist || selectedArtist.length === 0) return;

    setSelectedArtistId((prev) => (prev + 1) % selectedArtist.length);
  };

  const handlePrevious = () => {
    if (!selectedArtist || selectedArtist.length === 0) return;

    setSelectedArtistId(
      (prev) => (prev - 1 + selectedArtist.length) % selectedArtist.length
    );
  };

  const handleClick = (artistId) => {
    navigate(`/artist/${artistId}`);
  };

  const handleFollow = () => {
    toast.success(`Followed the Artist ${currentArtist.name}`);
  };

  return (
    <div>
      <div className=" sm:px-6 px-2 py-4 bg-gradient-to-r from-black to-[#8c5f1f]">
        <div className="flex  items-center">
          <div>
            <img
              src={currentArtist?.artistImage}
              alt="bile"
              className=" rounded-[5px] "
            />
          </div>
          <div className="sm:pl-8 pl-4">
            <p className="sm:text-[22px] text-[20px] font-Vazirmatn-600 text-white">
              {currentArtist?.name}
            </p>
            <p className="text-white sm:text-[18px] text-[12px] font-Vazirmatn-300 sm:w-[325px] w-[177px] text-justify sm:pt-4 pt-[4px]">
              {currentArtist?.bio}
            </p>

            <div className="sm:flex items-center justify-between">
              <div className="flex sm:pt-4 pt-[8px]">
                <div className="flex">
                  <button
                    onClick={() => {
                      handleClick(currentArtist._id);
                    }}
                    className="sm:text-[14px] text-[12px] text-darkpink font-Vazirmatn-300 text-center sm:w-[150px] sm:h-[40px] w-[82.5px] h-[34px] rounded-[5px] border-[1px] border-darkpink"
                  >
                    Listen Now
                  </button>
                  <button
                    onClick={() => {
                      handleFollow();
                    }}
                    className="sm:text-[14px] text-[12px] text-bluearrow font-Vazirmatn-300 text-center sm:w-[150px] sm:h-[40px] w-[82.5px] h-[34px] rounded-[5px] border-[1px] border-bluearrow ml-[12px]"
                  >
                    Follow
                  </button>
                </div>
              </div>
              <div>
                <div className="flex pl-4 pt-4">
                  <div onClick={handlePrevious}>
                    <img
                      src={previous}
                      alt="pre"
                      className=" sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]"
                    />
                  </div>
                  <div className="ml-[9px]" onClick={handleNext}>
                    <img
                      src={next}
                      alt="nxt"
                      className="  sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billie;

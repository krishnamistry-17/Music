import React, { useEffect, useState } from "react";
import billie from "../../assets/images/billie.png";
import previous from "../../assets/svgs/previous.svg";
import next from "../../assets/svgs/next.svg";
import { useArtist } from "../Context/ArtistContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import artist11 from "../../assets/images/artist11.png";
import artist22 from "../../assets/images/artist22.png";
import artist33 from "../../assets/images/artist33.png";
import artist44 from "../../assets/images/artist44.png";
import artist55 from "../../assets/images/artist55.png";
import artist66 from "../../assets/images/artist66.png";
import { useAuth } from "../Context/AuthContext";

const Billie = () => {
  const {
    allArtist: artist,
    setSelectedArtistId,
    selectedArtist,
    currentArtist,
    followedArtistDetail,
    followedArtist,
    setFollowedArtist,
  } = useArtist();

  const { isLoggedIn, isGoogleLogin } = useAuth();
  const navigate = useNavigate();

  const data3 = [
    { image: artist33, para: "Adele" },
    { image: artist55, para: "Harry Styles" },
    { image: artist44, para: "Lana Del Ray" },
    { image: artist22, para: "The Weekend" },
    { image: artist66, para: "Billie Eilish" },
    { image: artist11, para: "Eminiem" },
  ];

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
    if (isGoogleLogin || isLoggedIn) {
      navigate(`/artist/${artistId}`);
    } else {
      toast.warn("Please login to play music");
    }
  };

  const handleFollow = () => {
    if (isGoogleLogin || isLoggedIn) {
      setFollowedArtist(followedArtistDetail);
      toast.success(`Followed the  ${currentArtist.name} Artist`);
      navigate("/library");
    } else {
      toast.warn("Please login to follow artist");
    }
  };

  return (
    <div>
      <div className=" sm:px-6 px-2 py-4 bg-gradient-to-r from-black to-[#8c5f1f]">
        <div className="flex  items-center">
          <div>
            <img
              src={currentArtist?.artistImage || artist66}
              alt="bile"
              className="  rounded-full"
              onClick={() => {
                handleClick(currentArtist._id);
              }}
            />
          </div>
          <div className="sm:pl-8 pl-4">
            <p className="sm:text-[22px] text-[20px] font-Vazirmatn-600 text-white">
              {currentArtist?.name || "Billie Eilish"}
            </p>
            <p className="text-white sm:text-[18px] text-[12px] font-Vazirmatn-300 sm:w-[325px] w-[177px] text-justify sm:pt-4 pt-[4px]">
              {currentArtist?.bio ||
                "Singer of 'Bad Guy', known for her unique voice and style"}
            </p>

            <div className="sm:flex items-center justify-between">
              <div className="flex sm:pt-4 pt-[8px]">
                <div className="flex">
                  <button
                    onClick={() => {
                      handleClick(currentArtist?._id);
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

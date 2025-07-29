import React, { useEffect, useRef, useState } from "react";
import { useSong } from "../Context/SongContext";
import { FaShuffle } from "react-icons/fa6";
import { GiPreviousButton } from "react-icons/gi";
import { GiNextButton } from "react-icons/gi";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { MdLyrics } from "react-icons/md";
import { MdOutlineQueueMusic } from "react-icons/md";
import { MdOutlineFullscreen } from "react-icons/md";
import { IoMdVolumeMute } from "react-icons/io";
import { IoMdVolumeOff } from "react-icons/io";
import pfav from "../../assets/svgs/pfav.svg";
import pfull from "../../assets/svgs/pffav.svg";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, removeFromFavourites } from "../Redux/Action/action";
import { toast } from "react-toastify";
import { useFav } from "../Context/FavContext";

const AudioMusic = () => {
  const {
    currentSong,
    isPlaying,
    setIsPlaying,
    playNext,
    playPrevious,
    isShuffle,
    setIsShuffle,
    isRepeat,
    setIsRepeat,
    audioRef,
  } = useSong();

  const progressRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0);
  const [ismuted, setIsMuted] = useState(false);
  const { selectedId, setSelectedId } = useFav();
  const favourites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const handleVolumeChange = (e) => {
    //handle the volume change
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  const togglePlay = () => setIsPlaying((p) => !p);

  const onVolumeChange = (e) =>
    (audioRef.current.volume = parseFloat(e.target.value));

  const handleClick = (song) => {
    const isFav = favourites.some((fav) => fav._id === song._id);

    if (isFav) {
      dispatch(removeFromFavourites(song));
      setSelectedId(null);
      toast.success("Song removed from favourites..");
    } else {
      dispatch(addFavorites(song));
      setSelectedId(song._id);
      toast.success("Song added to favourites");
    }
  };

  return (
    <div
      className=" text-white p-4 gap-6
    grid md:grid-cols-3 grid-cols-2 
    justify-between items-center 
    lg:gap-60 rounded-md shadow-md "
    >
      <div className="flex gap-2 items-center">
        <img
          src={currentSong?.songImage}
          alt={currentSong?.title || "Song"}
          className="w-[50px] h-[50px] rounded-[5px] object-cover"
        />
        <div className="flex flex-col py-1">
          <p className="lg:text-[18px] text-[16px] font-Vazirmatn-500  truncate max-w-xs">
            {currentSong?.title}
          </p>
          <div className="flex gap-2">
            <p className="lg:text-[14px] text-[12px] font-Vazirmatn-300 text-white truncate max-w-xs">
              {currentSong?.artistId?.name}
            </p>
            {/*Fav */}
            <div>
              <div onClick={() => handleClick(currentSong)}>
                <img
                  src={
                    favourites.some((fav) => fav._id === currentSong._id)
                      ? pfull
                      : pfav
                  }
                  alt="fav"
                  className="w-[18px] h-[18px] sm:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-5 ">
          {/* Shuffle */}
          <div onClick={() => setIsShuffle((s) => !s)}>
            <FaShuffle
              className={`w-[20px] h-[20px] cursor-pointer md:block hidden ${
                isShuffle ? "text-green-400" : ""
              }`}
            />
          </div>

          {/* Previous */}
          <div onClick={playPrevious} className="cursor-pointer">
            <GiPreviousButton className="w-[20px] h-[20px]" />
          </div>

          {/* Play/Pause */}
          <div
            className="lg:bg-white rounded-full md:p-4 p-1 cursor-pointer"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <FaPause className="lg:text-black md:w-[20px] md:h-[20px]" />
            ) : (
              <FaPlay className="lg:text-black md:w-[20px] md:h-[20px]" />
            )}
          </div>

          {/* Next */}
          <div onClick={playNext} className="cursor-pointer">
            <GiNextButton className="w-[20px] h-[20px]" />
          </div>

          {/* Repeat */}
          <div onClick={() => setIsRepeat((r) => !r)}>
            <FaRepeat
              className={`w-[20px] h-[20px] cursor-pointer md:block hidden ${
                isRepeat ? "text-green-400" : ""
              }`}
            />
          </div>

          {/*Fav */}
          <div>
            <div onClick={() => handleClick(currentSong)}>
              <img
                src={
                  favourites.some((fav) => fav._id === currentSong._id)
                    ? pfull
                    : pfav
                }
                alt="fav"
                className="sm:block hidden"
              />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-4 mt-1 lg:-ml-19">
          <div>
            <span className="sm:block hidden">
              {Math.floor(currentTime / 60)}:
              {String(Math.floor(currentTime % 60)).padStart(2, "0")}
            </span>
          </div>

          <div className="flex-1">
            <input
              type="range"
              ref={progressRef}
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) => {
                const newTime = Number(e.target.value);
                audioRef.current.currentTime = newTime;
                setCurrentTime(newTime);
              }}
              className="w-full"
            />
          </div>
          <div>
            <span className="sm:block hidden">
              {Math.floor(duration / 60)}:
              {String(Math.floor(duration % 60)).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Audio and Side Controls */}
      <audio
        ref={audioRef}
        src={currentSong?.cloudinaryUrl}
        preload="metadata"
        onLoadedMetadata={(e) => {
          const duration = e.target.duration;
          setDuration(duration);
          progressRef.current.max = duration;
        }}
        onTimeUpdate={(e) => {
          const currentTime = e.target.currentTime;
          setCurrentTime(currentTime);
          if (progressRef.current) {
            progressRef.current.value = currentTime;
          }
        }}
        onEnded={() => {
          if (isRepeat) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          } else {
            playNext();
          }
        }}
      />

      <div className="md:flex hidden items-center gap-3">
        <div>
          <MdLyrics className="w-[20px] h-[20px] lg:block hidden" />
        </div>
        <div>
          <MdOutlineQueueMusic className="w-[23px] h-[23px] lg:block hidden" />
        </div>
        <div className="flex items-center gap-2">
          <div onClick={toggleMute}>
            {ismuted ? (
              <div>
                {" "}
                <IoMdVolumeOff className="w-[23px] h-[23px]" />
              </div>
            ) : (
              <div>
                <IoMdVolumeMute className="w-[23px] h-[23px]" />
              </div>
            )}
          </div>
          <div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
        <div>
          <MdOutlineFullscreen className="w-[23px] h-[23px]" />
        </div>
      </div>
    </div>
  );
};

export default AudioMusic;

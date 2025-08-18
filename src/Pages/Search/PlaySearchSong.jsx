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
import { useAlbum } from "../Context/AlbumContext";
import albumSingle from "../albumSingle";
import { useSearch } from "../Context/SearchContext";
import { useDispatch, useSelector } from "react-redux";
import pfav from "../../assets/svgs/pfav.svg";
import pfull from "../../assets/svgs/pffav.svg";
import { toast } from "react-toastify";
import { addFavorites, removeFromFavourites } from "../Redux/Action/action";
import { useFav } from "../Context/FavContext";

const PlaySearchSong = () => {
  const {
    selectedAlbum,
    isPlaying,
    setIsPlaying,
    playNext,
    playPrevious,
    isShuffle,
    setIsShuffle,
    isRepeat,
    setIsRepeat,
    audioRef,
  } = useSearch();
  console.log(" selectedAlbum :", selectedAlbum);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const progressRef = useRef(null);
  const { setSelectedId } = useFav();
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef?.current;
    audio.volume = volume;
    const onTime = () => setCurrentTime(audio.currentTime);
    const onLoaded = () => {
      setDuration(audio.duration);
      progressRef.current.max = audio.duration;
    };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onLoaded);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onLoaded);
    };
  }, [audioRef, volume]);

  const togglePlay = () => setIsPlaying((p) => !p);

  const toggleMute = () => {
    setIsMuted((m) => !m);
    audioRef.current.muted = !isMuted;
  };

  const handleVolumeChange = (e) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    audioRef.current.volume = v;
  };

  const formatted = (time) =>
    `${Math.floor(time / 60)}:${String(Math.floor(time % 60)).padStart(
      2,
      "0"
    )}`;

  if (!selectedAlbum) return null;

  const handleClick = (song) => {
    const isFav = favorites.some((fav) => fav._id === song._id);

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
    <>
      <div
        className=" text-white p-4
          grid md:grid-cols-3 grid-cols-2 
          justify-between items-center 
          xl:gap-60 lg:gap-19  gap-6 rounded-md shadow-md "
      >
        <div className="flex gap-2 items-center">
          <img
            src={selectedAlbum?.songImage?.[0]}
            alt={selectedAlbum?.title}
            className="w-[50px] h-[50px] rounded-[5px] object-cover"
          />
          <div className="flex flex-col py-1">
            <p className="lg:text-[18px] text-[16px] font-Vazirmatn-500  truncate max-w-xs">
              {selectedAlbum?.title}
            </p>
            <div className="flex gap-2">
              {/*Fav */}
              <div>
                <div onClick={() => handleClick(selectedAlbum)}>
                  <img
                    src={
                      favorites.some((fav) => fav?._id === selectedAlbum?._id)
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
              <div onClick={() => handleClick(selectedAlbum)}>
                <img
                  src={
                    favorites.some((fav) => fav._id === selectedAlbum._id)
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
          src={selectedAlbum?.cloudinaryUrl}
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
              {isMuted ? (
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
    </>
  );
};

export default PlaySearchSong;

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

  const handleVolumeChange = (e) => {
    //handle the volume change
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // useEffect(() => {
  //   //current song & audio ref
  //   if (currentSong && audioRef.current) {
  //     audioRef.current.pause();
  //     audioRef.current.load();
  //     audioRef.current
  //       .play()
  //       .then(() => setIsPlaying(true))
  //       .catch((err) => {
  //         console.warn("Audio playback failed:", err);
  //         setIsPlaying(false);
  //       });
  //   }
  // }, [currentSong]);

  // const togglePlayPause = () => {
  //   if (!audioRef.current) return;
  //   //play and pause toggle
  //   if (isplaying) {
  //     audioRef.current.pause();
  //   } else {
  //     audioRef.current.play().catch((err) => console.warn(err));
  //   }
  //   setIsPlaying(!isplaying);
  // };

  // if (!currentSong) return null;

  // const handleNext = () => {
  //   if (!audioRef.current || nextsong?.length) return;
  //   //handle the next song
  //   setCurrentSongId((prevId) => {
  //     if (isShuffling) {
  //       const randomIndex = Math.floor(Math.random() * nextsong?.length);
  //       return randomIndex;
  //     }
  //     return (prevId + 1) % nextsong?.length;
  //   });
  // };

  // const handlePrevious = () => {
  //   if (!audioRef.current || nextsong?.length) return;
  //   //handle the previous song
  //   setCurrentSongId((prevId) => {
  //     return (prevId - 1 + nextsong?.length) % nextsong?.length;
  //   });
  // };

  // const changePlayerCurrentTime = (value) => {
  //   if (!progressBarRef.current) return;
  //   //change player current time
  //   progressBarRef.current.style.setProperty(
  //     "--seek-before-width",
  //     `${(value / duration) * 100}%`
  //   );
  //   setCurrentTime(value);
  // };

  // const changeRange = () => {
  //   //change range value using ref of progress bar
  //   const value = progressBarRef.current.value;
  //   audioRef.current.currentTime = value;
  //   changePlayerCurrentTime(value);
  // };

  // const formatTime = (time) => {
  //   const minutes = Math.floor(time / 60);
  //   const seconds = Math.floor(time % 60)
  //     .toString()
  //     .padStart(2, "0");
  //   return `${minutes}:${seconds}`;
  // };

  const togglePlay = () => setIsPlaying((p) => !p);
  const onVolumeChange = (e) =>
    (audioRef.current.volume = parseFloat(e.target.value));

  return (
    <div
      className="bg-blackbg h-[80px] text-white p-3
    flex justify-between items-center gap-4 rounded-md shadow-md "
    >
      <div className="flex gap-2">
        <img
          src={currentSong?.songImage}
          alt={currentSong?.title || "Song"}
          className="w-[50px] h-[50px] rounded-[5px] object-cover"
        />
        <div className="flex flex-col">
          <p className="text-lg font-bold truncate max-w-xs">
            {currentSong?.title}
          </p>
          <p className="text-sm text-gray-300 truncate max-w-xs">
            {currentSong?.artistId?.name}
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-5 pt-2">
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
            className="bg-white rounded-full p-4 cursor-pointer"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <FaPause className="text-black w-[20px] h-[20px]" />
            ) : (
              <FaPlay className="text-black w-[20px] h-[20px]" />
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
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 mt-1">
          <span>
            {Math.floor(currentTime / 60)}:
            {String(Math.floor(currentTime % 60)).padStart(2, "0")}
          </span>
          <input
            type="range"
            ref={progressRef}
            onChange={(e) => (audioRef.current.currentTime = e.target.value)}
          />
          <span>
            {Math.floor(duration / 60)}:
            {String(Math.floor(duration % 60)).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Audio and Side Controls */}
      <div className="lg:flex hidden items-center gap-3">
        <audio
          ref={audioRef}
          src={currentSong?.cloudinaryUrl}
          preload="metadata"
          onLoadedMetadata={(e) => {
            setDuration(e.target.duration);
            progressRef.current.max = e.target.duration;
          }}
          onTimeUpdate={(e) => {
            const t = e.target.currentTime;
            setCurrentTime(t);
            progressRef.current.value = t;
            progressRef.current.style.setProperty(
              "--seek-before-width",
              `${(t / duration) * 100}%`
            );
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
        <MdLyrics className="w-[20px] h-[20px]" />
        <MdOutlineQueueMusic className="w-[23px] h-[23px]" />
        <div className="flex items-center gap-2">
          <IoMdVolumeMute className="w-[23px] h-[23px]" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
        <MdOutlineFullscreen className="w-[23px] h-[23px]" />
      </div>
    </div>
  );
};

export default AudioMusic;

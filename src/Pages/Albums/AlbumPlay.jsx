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

const AlbumPlay = () => {
  const {
    currentAlbum,
    isPlaying,
    setIsPlaying,
    playNext,
    playPrevious,
    playSongAt,
    isShuffle,
    setIsShuffle,
    isRepeat,
    setIsRepeat,
    audioRef,
  } = useAlbum();

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
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

  if (!currentAlbum) return null;

  return (
    <div
      className="text-white p-3
    grid md:grid-cols-3 grid-cols-2 
    justify-between items-center 
  rounded-md shadow-md"
    >
      <audio ref={audioRef} src={currentAlbum?.cloudinaryUrl?.[0]} />

      {/* Left */}
      <div className="flex items-center gap-3">
        <img
          src={currentAlbum.songImage?.[0]}
          alt={currentAlbum.title}
          className="w-[50px] h-[50px] rounded"
        />
        <div>
          <p className="text-white">{currentAlbum.title}</p>
        </div>
      </div>

      {/* Middle (controls) */}
      <div>
        <div className="flex items-center justify-center gap-4">
          <FaShuffle
            className={`cursor-pointer ${
              isShuffle ? "text-green-400" : "text-white"
            }`}
            onClick={() => setIsShuffle(!isShuffle)}
          />
          <GiPreviousButton
            className="cursor-pointer text-white"
            onClick={playPrevious}
          />
          <div
            className="bg-white rounded-full p-2 cursor-pointer"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <FaPause className="text-black" />
            ) : (
              <FaPlay className="text-black" />
            )}
          </div>
          <GiNextButton
            className="cursor-pointer text-white"
            onClick={playNext}
          />
          <FaRepeat
            className={`cursor-pointer ${
              isRepeat ? "text-green-400" : "text-white"
            }`}
            onClick={() => setIsRepeat(!isRepeat)}
          />
        </div>
        {/* Progress bar and time */}
        <div className="col-span-1 mt-4 flex justify-between items-center text-white text-sm">
          <span>{formatted(currentTime)}</span>
          <input
            type="range"
            ref={progressRef}
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={(e) => {
              audioRef.current.currentTime = e.target.value;
              setCurrentTime(e.target.value);
            }}
            className="flex-1 mx-4"
          />
          <span>{formatted(duration)}</span>
        </div>
      </div>

      {/* Right (volume + expand) */}
      <div className="flex items-center justify-end gap-4">
        <button onClick={toggleMute}>
          {isMuted ? (
            <IoMdVolumeOff className="text-white" />
          ) : (
            <IoMdVolumeMute className="text-white" />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <MdOutlineFullscreen className="text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default AlbumPlay;

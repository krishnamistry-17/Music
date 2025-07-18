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
  const { currentSong } = useSong();
  const audioRef = useRef(null);
  const [isplaying, setIsPlaying] = useState(false);
  console.log("isplaying :", isplaying);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    //current song & audio ref
    if (currentSong && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Audio playback failed:", err);
          setIsPlaying(false);
        });
    }
  }, [currentSong]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    //play and pause toggle
    if (isplaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.warn(err));
    }
    setIsPlaying(!isplaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  if (!currentSong) return null;

  return (
    <div className="bg-blackbg h-[80px] text-white p-3 flex justify-between items-center gap-4 rounded-md shadow-md pb-1">
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
        <div className="flex items-center gap-5">
          <div>
            <FaShuffle className="w-[20px] h-[20px]" />
          </div>
          <div>
            <GiPreviousButton className="w-[20px] h-[20px]" />
          </div>
          <div>
            <div
              className="bg-white rounded-full p-4 cursor-pointer"
              onClick={togglePlayPause}
            >
              {isplaying ? (
                <div>
                  <FaPause className="text-black w-[20px] h-[20px]" />
                </div>
              ) : (
                <div>
                  <FaPlay className="text-black" />
                </div>
              )}
            </div>
          </div>
          <div>
            <GiNextButton className="w-[20px] h-[20px]" />
          </div>
          <div>
            <FaRepeat className="w-[20px] h-[20px]" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <audio ref={audioRef} src={currentSong?.cloudinaryUrl} preload="auto" />
        <div>
          <MdLyrics className="w-[20px] h-[20px]" />
        </div>
        <div>
          <MdOutlineQueueMusic className="w-[23px] h-[23px]" />
        </div>
        <div className="flex">
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
        <div>
          <MdOutlineFullscreen className="w-[23px] h-[23px]" />
        </div>
      </div>
    </div>
  );
};

export default AudioMusic;

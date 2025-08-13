import React, { useState } from "react";
import apiInstance from "../../../../utils/axios";
import SearchSong from "../../Search/SearchSong";
import { useAuth } from "../../Context/AuthContext";
import { usePlayList } from "../../Context/AddPlayListContext";
import { toast } from "react-toastify";

const AddPlayList = () => {
  const { playlistSongs, setPlaylistSongs, playlistTitle, setPlaylistTitle } =
    usePlayList();
  const { userData } = useAuth();

  const addSongToPlaylist = (song) => {
    if (!playlistSongs.find((s) => s._id === song._id)) {
      setPlaylistSongs((prev) => [...prev, song]);
    } else {
      toast.info("Song is already in playlist");
    }
  };

  return (
    <div>
      <div>
        <div className="sm:flex items-center gap-3 px-4 py-4">
          <div className="bg-[#282828] rounded-full object-cover w-[185px] h-[185px]">
            <div></div>
          </div>
          <div>
            <p
              className="text-white md:text-[45px] text-[32px] 
          font-Vazirmatn-500 xl:pt-22 md:pt-18 md:pl-0 pt-4 sm:pl-10 pl-3"
            >
              Your PlayList
            </p>
            <p
              className="text-white md:text-[21px] text-[14px] 
          font-Vazirmatn-400  md:pl-0 sm:pl-10 pl-3"
            >
              {userData?.name}
            </p>
          </div>
        </div>

        <div className="border-b border-white/15 my-3 mx-2"></div>

        <div>
          <p
            className="text-white md:pt-10 pt-5 md:text-[30px] text-[22px] md:pl-0 pl-4
          font-Vazirmatn-600 "
          >
            Let's Find Something For Your PlayList
          </p>
        </div>
      </div>
      <div className="text-white p-4 max-w-md ">
        <input
          type="text"
          placeholder="Enter Playlist Title"
          value={playlistTitle}
          onChange={(e) => setPlaylistTitle(e.target.value)}
          className="p-2 w-full mb-4 bg-gray-800 rounded"
        />

        <SearchSong onAddSong={addSongToPlaylist} />
      </div>
    </div>
  );
};

export default AddPlayList;

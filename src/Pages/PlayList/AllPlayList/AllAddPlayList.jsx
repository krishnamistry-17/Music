import React, { useState } from "react";
import { usePlayList } from "../../Context/AddPlayListContext";
import { toast } from "react-toastify";
import option from "../../../assets/svgs/option.svg";
import { IoMdShare } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPlayList } from "../../Redux/Action/action";

const AllAddPlayList = () => {
  const {
    playlistSongs,
    playlistTitle,
    setSelectedSongId,
    removeSongFromPlaylist,
  } = usePlayList();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const dispatch = useDispatch();

  const removePlayList = useSelector((state) => state.removePlayList);

  const handleSavePlaylist = async () => {
    if (!playlistTitle.trim() || playlistSongs.length === 0) return;

    const payload = {
      title: playlistTitle,
      description: "My new playlist",
      songs: playlistSongs.map((s) => s._id),
    };

    try {
      await apiInstance.post("/playlist/create-playlist", payload);
      toast.success("Playlist saved!");
    } catch (err) {
      console.error("Failed to save playlist", err);
    }
  };

  const handleClick = (song) => {
    dispatch(removeFromPlayList(song));
    removeSongFromPlaylist(song._id);
    setSelectedSongId(null);
    toast.success("Removed from playlist");
  };

  return (
    <div>
      <div className="text-white  relative">
        <div>
          {playlistSongs.length > 0 && (
            <div className="mt-6">
              <div className="mt-2">
                {playlistSongs.map((song) => (
                  <div
                    key={song._id}
                    className="pt-6 flex items-center justify-between max-w-md"
                  >
                    <div className="flex gap-2 items-center ">
                      <img
                        src={
                          song?.songImage ||
                          song?.albumImages ||
                          song?.artistImage ||
                          song?.playlistImage ||
                          song?.genreImage
                        }
                        alt={song?.title}
                        className="w-[42px] h-[42px] rounded"
                      />
                      <p className="text-white">{song?.title || song?.name}</p>
                    </div>
                    <div>
                      <img
                        src={option}
                        alt="op"
                        onClick={(e) => {
                          setSelectedIndex(
                            song._id === selectedIndex ? null : song._id
                          );
                        }}
                        className=" cursor-pointer"
                      />
                      {selectedIndex === song._id && (
                        <div
                          className=" absolute bg-[#282828] z-50 
                        top-[60px] md:left-56 left-19 max-w-[350px] max-h-[175px] p-4"
                        >
                          <div
                            className="flex gap-2 items-center pt-2 cursor-pointer"
                            onClick={() => handleClick(song)}
                          >
                            <MdDelete className="text-white w-[22px] h-[22px]" />
                            <p className="text-white text-[17px] font-Vazirmatn-400">
                              Remove from PlayList
                            </p>
                          </div>

                          <div className="flex gap-2 items-center pt-2">
                            <IoMdShare className="text-white w-[22px] h-[22px]" />
                            <p className="text-white text-[17px] font-Vazirmatn-400 pt-1">
                              Share
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <button
            className="mt-4 bg-gray-700 px-4 py-2 rounded"
            onClick={handleSavePlaylist}
          >
            Save Playlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllAddPlayList;

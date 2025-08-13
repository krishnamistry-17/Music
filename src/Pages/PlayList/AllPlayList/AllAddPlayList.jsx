import React from "react";
import { usePlayList } from "../../Context/AddPlayListContext";
import { toast } from "react-toastify";
import option from "../../../assets/svgs/option.svg";

const AllAddPlayList = () => {
  const { playlistSongs, playlistTitle } = usePlayList();
  console.log("playlistSongs :", playlistSongs);

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

  return (
    <div>
      <div className="text-white pt-10">
        <div>
          {playlistSongs.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg">Selected Songs:</h2>
              <div className="mt-2">
                {playlistSongs.map((song) => (
                  <div
                    key={song._id}
                    className="pt-6 flex items-center justify-between"
                  >
                    <div className="flex gap-2 items-center relative">
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
                      <img src={option} alt="op" />
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

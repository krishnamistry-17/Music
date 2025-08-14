import { createContext, useContext, useState } from "react";

const PlayListContext = createContext();

export const ListProvider = ({ children }) => {
  const [selectedSongId, setSelectedSongId] = useState(null);
  console.log("selectedSongId :", selectedSongId);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [playlistSongs, setPlaylistSongs] = useState([]);
  console.log("playlistSongs :", playlistSongs);
  const [playlistTitle, setPlaylistTitle] = useState("");
  console.log("playlistTitle :", playlistTitle);

  const removeSongFromPlaylist = (songId) => {
    setPlaylistSongs((prev) => prev.filter((song) => song._id !== songId));
  };

  return (
    <PlayListContext.Provider
      value={{
        selectedSongId,
        setSelectedSongId,
        selectedTitle,
        setSelectedTitle,
        playlistSongs,
        setPlaylistSongs,
        playlistTitle,
        setPlaylistTitle,
        removeSongFromPlaylist,
      }}
    >
      {children}
    </PlayListContext.Provider>
  );
};

export const usePlayList = () => useContext(PlayListContext);

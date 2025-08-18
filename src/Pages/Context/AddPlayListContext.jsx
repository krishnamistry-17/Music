import { createContext, useContext, useState } from "react";

const PlayListContext = createContext();

export const ListProvider = ({ children }) => {
  const [selectedSongId, setSelectedSongId] = useState(null);

  const [selectedTitle, setSelectedTitle] = useState("");
  const [playlistSongs, setPlaylistSongs] = useState([]);

  const [playlistTitle, setPlaylistTitle] = useState("");


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

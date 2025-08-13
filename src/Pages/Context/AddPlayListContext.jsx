import { createContext, useContext, useState } from "react";

const PlayListContext = createContext();

export const ListProvider = ({ children }) => {
  const [selectedSongId, setSelectedSongId] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [playlistSongs, setPlaylistSongs] = useState([]);
  console.log('playlistSongs :', playlistSongs);
  const [playlistTitle, setPlaylistTitle] = useState("");
  console.log('playlistTitle :', playlistTitle);
 
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
      }}
    >
      {children}
    </PlayListContext.Provider>
  );
};

export const usePlayList = () => useContext(PlayListContext);

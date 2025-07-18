import React, { createContext, useContext, useState } from "react";

const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [currentSongId, setCurrentSongId] = useState(0);

  return (
    <SongContext.Provider
      value={{ currentSong, setCurrentSong, currentSongId, setCurrentSongId }}
    >
      {children}
    </SongContext.Provider>
  );
};

export const useSong = () => useContext(SongContext);

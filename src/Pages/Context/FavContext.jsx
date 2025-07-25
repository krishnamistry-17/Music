import { createContext, useContext, useState } from "react";

const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [favorites, setFavorites] = useState([]);

  return (
    <FavContext.Provider
      value={{ selectedId, setSelectedId, favorites, setFavorites }}
    >
      {children}
    </FavContext.Provider>
  );
};

export const useFav = () => useContext(FavContext);

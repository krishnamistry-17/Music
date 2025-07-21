import { createContext, useContext, useState } from "react";

const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <FavContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </FavContext.Provider>
  );
};

export const useFav = () => useContext(FavContext);

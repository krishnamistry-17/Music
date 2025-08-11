// import React, { createContext, useContext, useState } from "react";

// const PlayerSourceContext = createContext();

// export const PlayerSourceProvider = ({ children }) => {
//   const [source, setSource] = useState("newrelease");
//   console.log("source :", source);

//   return (
//     <PlayerSourceContext.Provider value={{ source, setSource }}>
//       {children}
//     </PlayerSourceContext.Provider>
//   );
// };

// export const usePlayerSource = () => useContext(PlayerSourceContext);

//if from diffrent route shows diff file then this

import { useLocation } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";

const PlayerSourceContext = createContext();

export const PlayerSourceProvider = ({ children }) => {
  const [source, setSource] = useState("newrelease");
  console.log('source :', source);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/discover") {
      setSource("musicgeners");
    } else if (location.pathname === "/") {
      setSource("newrelease");
    } else {
      setSource(""); // or some default
    }
  }, [location.pathname]);

  return (
    <PlayerSourceContext.Provider value={{ source, setSource }}>
      {children}
    </PlayerSourceContext.Provider>
  );
};

export const usePlayerSource = () => useContext(PlayerSourceContext);

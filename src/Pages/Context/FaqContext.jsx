import { createContext, useContext, useState } from "react";

const FaqContext = createContext();

export const FaqProvider = ({ children }) => {
  const [allFaq, setAllFaq] = useState([]);
  const [addfaq, setAddFaq] = useState("");
  return (
    <FaqContext.Provider value={{ allFaq, setAllFaq, addfaq, setAddFaq }}>
      {children}
    </FaqContext.Provider>
  );
};

export const useFaq = () => useContext(FaqContext);

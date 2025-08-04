import { createContext, useContext, useState } from "react";

const viewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSource, setOpenSource] = useState("");

  return (
    <viewContext.Provider
      value={{ isOpen, setIsOpen, openSource, setOpenSource }}
    >
      {children}
    </viewContext.Provider>
  );
};

export const useView = () => useContext(viewContext);

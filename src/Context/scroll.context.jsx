import { createContext, useState, useEffect } from "react";

export const ScrollContext = createContext();

export const ScrollContextProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {}, [isScrolled]);

  const contextValue = {
    isScrolled,
    setIsScrolled,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

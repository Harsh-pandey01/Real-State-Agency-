import { createContext, useContext } from "react";
import { useState } from "react";

const ThemeContext = createContext(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeContextProvider = ({ children }) => {
  const [isDark, setTheme] = useState(false);
  return (
    <ThemeContext.Provider value={[isDark, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

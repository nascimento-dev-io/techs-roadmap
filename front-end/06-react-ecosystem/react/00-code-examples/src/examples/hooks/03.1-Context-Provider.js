import React, { useState, createContext, useCallback } from "react";

export const myContext = createContext();

const styles = {
  dark: {
    backgroundColor: "#333",
    color: "#f5f5f5",
  },
  light: {
    backgroundColor: "#f5f5f5",
    color: "#333",
  },
};

const user = {
  name: "Jorge",
};

export const ContextProvider = ({ children }) => {
  const { dark, light } = styles;
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setTheme((oldTheme) => (oldTheme === light ? dark : light));
  }, [dark, light]);

  return (
    <myContext.Provider value={{ user, toggleTheme, theme }}>
      {children}
    </myContext.Provider>
  );
};

import React, { useState, createContext, useEffect } from "react";

export const ThemeBgContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeBgContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeBgContext.Provider>
  );
};

export default ThemeContext;

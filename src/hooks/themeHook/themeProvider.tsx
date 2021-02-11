import { useState, useContext } from "react";

//Context
import { ThemeContext } from "./themeContext";

//Themes
import defaultInit from "../../styles/themes/defaultInit";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const themeSaved = localStorage.getItem("@devthiago-bestgame-ever:theme");

    if (themeSaved) {
      return JSON.parse(themeSaved);
    } else {
      return defaultInit;
    }
  });

  const toggleTheme = () => {
    switch (theme.title) {
      case "dark":
        setTheme(dark);
        localStorage.setItem(
          "@devthiago-bestgame-ever:theme",
          JSON.stringify(dark)
        );
        break;
      case "light":
        setTheme(light);
        localStorage.setItem(
          "@devthiago-bestgame-ever:theme",
          JSON.stringify(light)
        );
        break;
      case "defaultInit":
        setTheme(defaultInit);
        localStorage.setItem(
          "@devthiago-bestgame-ever:theme",
          JSON.stringify(defaultInit)
        );
        break;
      default:
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};

export { ThemeProvider, useTheme };

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
      return light;
    }
  });

  const themeCheck = () => {
    if (theme.title === "dark") {
      setTheme(light);
      localStorage.setItem("@minha-carteira:theme", JSON.stringify(light)); //@pra guardar o theme, s[o pra ficar bunitim e nao ser sobreescrita]
    } else {
      setTheme(dark);
      localStorage.setItem("@minha-carteira:theme", JSON.stringify(dark));
    }
  };

  return (
    <ThemeContext.Provider value={{ themeCheck, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};

export { ThemeProvider, useTheme };

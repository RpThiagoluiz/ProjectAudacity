import { createContext } from "react";

interface IThemeContext {
  themeCheck(): void;
  theme: ITheme;
}

interface ITheme {
  title: string;

  colors: {
    init: string;
    primary: string;
    secondary: string;
    tertiary: string;
    fourth: string;

    textColorWhite: string;
    textColorGray: string;
    textColorBlack: string;

    msgSuccess: string;
    msgWarning: string;
    msgFail: string;
  };
}

export const ThemeContext = createContext({} as IThemeContext);

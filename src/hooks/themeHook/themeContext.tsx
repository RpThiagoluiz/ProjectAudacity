import { createContext } from "react";

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
  title: string;

  colors: {
    init: string;
    aside: string;
    primary: string;
    secondary: string;
    tertiary: string;
    fourth: string;

    text: {
      white: string;
      gray: string;
      black: string;
    };

    msg: {
      success: string;
      warning: string;
      fail: string;
    };
  };
}

export const ThemeContext = createContext({} as IThemeContext);

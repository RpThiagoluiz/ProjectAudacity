import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
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
}

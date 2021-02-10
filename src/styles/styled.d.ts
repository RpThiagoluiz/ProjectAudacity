import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      Primary: string;
      Secondary: string;
      Tertiary: string;
      Fourth: string;

      textColorWhite: string;
      textColorGray: string;
      textColorBlack: string;

      msgSuccess: string;
      msgWarning: string;
      msgFail: string;
    };
  }
}

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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
}

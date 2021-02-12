import { useEffect } from "react";

//CustomHook
import { useTheme } from "../../hooks/themeHook/themeProvider";

//styles
import {
  StyledButtonsTheme,
  DefaultButton,
  DarkButton,
  LightButton,
} from "./styles";

const ThemesBtn = ({ menuIsOpen }: any) => {
  const { toggleTheme, theme } = useTheme();
  const themeTitle = theme.title;

  const defaultTheme = "defaultInit";
  const lightTheme = "light";
  const darkTheme = "dark";

  useEffect(() => {}, [themeTitle]);

  const handleClickTheme = (value: string) => {
    toggleTheme();
    console.log(value);
  };

  return (
    <StyledButtonsTheme menuIsOpen={menuIsOpen}>
      <small>Choice your theme color</small>

      <DefaultButton
        value={defaultTheme}
        onClick={(e: React.MouseEvent<HTMLElement>) => (
          e.preventDefault(), handleClickTheme(defaultTheme)
        )}
      >
        Default
      </DefaultButton>

      <LightButton
        value={lightTheme}
        onClick={(e: React.MouseEvent<HTMLElement>) => (
          e.preventDefault(), handleClickTheme(lightTheme)
        )}
      >
        Light
      </LightButton>

      <DarkButton
        value={darkTheme}
        onClick={(e: React.MouseEvent<HTMLElement>) => (
          e.preventDefault(), handleClickTheme(darkTheme)
        )}
      >
        Dark
      </DarkButton>
    </StyledButtonsTheme>
  );
};

export default ThemesBtn;

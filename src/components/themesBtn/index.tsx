import { useState } from "react";

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

  const [defaultTheme, setDefaultTheme] = useState();
  const [lightTheme, setLightTheme] = useState();
  const [darkTheme, setDarkTheme] = useState();

  const handleChangeTheme = (e: Event) => {
    e.preventDefault();
    toggleTheme();
  };

  return (
    <StyledButtonsTheme menuIsOpen={menuIsOpen}>
      <small>Choice your theme color</small>
      <DefaultButton
        value={defaultTheme}
        onClick={(e) => console.log(defaultTheme)}
      >
        Default
      </DefaultButton>
      <LightButton value={lightTheme} onClick={(e) => console.log("Light")}>
        Light
      </LightButton>
      <DarkButton value={darkTheme} onClick={(e) => console.log("Dark")}>
        Dark
      </DarkButton>
    </StyledButtonsTheme>
  );
};

export default ThemesBtn;

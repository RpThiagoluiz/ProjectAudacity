//styles
import {
  StyledButtonsTheme,
  DefaultButton,
  DarkButton,
  LightButton,
} from "./styles";

const ThemesBtn = () => {
  //onClick -> ChangeTheme
  return (
    <StyledButtonsTheme>
      <DefaultButton>Default</DefaultButton>
      <LightButton>Light</LightButton>
      <DarkButton>Dark</DarkButton>
    </StyledButtonsTheme>
  );
};

export default ThemesBtn;

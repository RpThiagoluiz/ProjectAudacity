//styles
import {
  StyledButtonsTheme,
  DefaultButton,
  DarkButton,
  LightButton,
} from "./styles";

const ThemesBtn = ({ menuIsOpen }: any) => {
  //onClick -> ChangeTheme
  return (
    <StyledButtonsTheme menuIsOpen={menuIsOpen}>
      <small>Choice your theme color</small>
      <DefaultButton onClick={(e) => console.log("Default")}>
        Default
      </DefaultButton>
      <LightButton onClick={(e) => console.log("Light")}>Light</LightButton>
      <DarkButton onClick={(e) => console.log("Dark")}>Dark</DarkButton>
    </StyledButtonsTheme>
  );
};

export default ThemesBtn;

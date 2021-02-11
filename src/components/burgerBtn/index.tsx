import { useState } from "react";

//Components
import ThemesBtn from "../themesBtn";

//styles
import { BurgerThemeChange } from "./styles";

const BurgerNavTheme = () => {
  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  };

  return (
    <BurgerThemeChange
      menuIsOpen={toggleMenuIsOpened}
      onClick={handleToggleMenu}
    >
      <div />
      <div />
      <div />
      <ThemesBtn menuIsOpen={toggleMenuIsOpened} />
    </BurgerThemeChange>
  );
};
export default BurgerNavTheme;

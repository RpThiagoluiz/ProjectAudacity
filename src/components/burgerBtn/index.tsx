import { useState } from "react";

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
    </BurgerThemeChange>
  );
};
export default BurgerNavTheme;

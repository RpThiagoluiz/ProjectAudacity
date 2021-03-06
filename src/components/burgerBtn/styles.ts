import styled from "styled-components";

interface IContainerProps {
  menuIsOpen: boolean;
}

export const BurgerThemeChange = styled.aside<IContainerProps>`
  position: absolute;
  top: 5%;
  left: 10px;

  width: 2rem;
  height: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  > div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    transition: all 0.4s ease-in-out;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ menuIsOpen }) =>
        menuIsOpen ? "rotate(45deg)" : "rotate(0)"};

      background: ${({ menuIsOpen, theme }) =>
        menuIsOpen ? theme.colors.fourth : theme.colors.tertiary};
    }

    :nth-child(2) {
      opacity: ${({ menuIsOpen }) => (menuIsOpen ? "0" : "1")};
      transform: ${({ menuIsOpen }) =>
        menuIsOpen ? "translateX(20px)" : "translateX(0)"};
      background: ${({ menuIsOpen, theme }) =>
        menuIsOpen ? theme.colors.fourth : theme.colors.tertiary};
    }

    :nth-child(3) {
      transform: ${({ menuIsOpen }) =>
        menuIsOpen ? "rotate(-45deg)" : "rotate(0)"};
      background: ${({ menuIsOpen, theme }) =>
        menuIsOpen ? theme.colors.fourth : theme.colors.tertiary};
    }
  }
`;

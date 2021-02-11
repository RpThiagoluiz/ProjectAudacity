import { ButtonHTMLAttributes } from "react";
import styled, { keyframes } from "styled-components";

interface IContainerProps {
  menuIsOpen: boolean;
}

const animate = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const StyledButtonsTheme = styled.section<IContainerProps>`
  position: absolute;
  top: 5rem;
  left: 0;

  display: ${({ menuIsOpen }) => (menuIsOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;

  text-align: left;

  transform: ${({ menuIsOpen }) => (menuIsOpen ? "" : "translateX(-100%)")};
  transition: all 0.5s ease-in-out;
  animation: ${animate} 0.5s;

  > small {
    color: ${({ theme }) => theme.colors.textColorBlack};
    font-size: 12px;
    margin-bottom: 25px;
  }
`;

export const DefaultButton = styled.button<IButtonProps>`
  width: 180px;
  height: 90px;

  margin-bottom: 50px;

  background: -webkit-linear-gradient(
    108deg,
    #eebff5 15%,
    #9e81d0 34%,
    #854576 50%,
    #301221 73%
  );

  border-radius: 5px;
`;

export const LightButton = styled.button`
  width: 180px;
  height: 90px;

  margin-bottom: 50px;

  background: -webkit-linear-gradient(
    108deg,
    #fff6d3 15%,
    #f9a875 34%,
    #eb6b6f 50%,
    #7c3f58 73%
  );

  border-radius: 5px;
`;

export const DarkButton = styled.button`
  width: 180px;
  height: 90px;

  margin-bottom: 50px;

  background: -webkit-linear-gradient(
    108deg,
    #e6e6ff 15%,
    #bebee6 34%,
    #50506e 50%,
    #1e1e3c 73%
  );

  border-radius: 5px;
`;

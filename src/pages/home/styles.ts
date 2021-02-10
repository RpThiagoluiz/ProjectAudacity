import styled, { keyframes } from "styled-components";

//Home Images
import psImg from "../../assets/images/home/ps.svg";
import snesImg from "../../assets/images/home/snes.svg";
import xboxImg from "../../assets/images/home/xbox.svg";

const animate = keyframes`

  0% {
    opacity: 1;
  }
  50%{
    opacity: 0.6;
  }
  100% {
    opacity: 0.3;
  }
`;

export const Container = styled.section`
  height: 100%;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  background: ${(props) => props.theme.colors.init};

  font-family: "Press Start 2P", cursive;

  transition: all 0.5s ease-in-out;

  > h1 {
    background: -webkit-linear-gradient(
      108deg,
      ${(props) => props.theme.colors.primary} 15%,
      ${(props) => props.theme.colors.secondary} 34%,
      ${(props) => props.theme.colors.tertiary} 50%,
      ${(props) => props.theme.colors.fourth} 73%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    padding: 25px;
  }
  > small {
    text-decoration: line-through;
    background: -webkit-linear-gradient(
      108deg,
      ${(props) => props.theme.colors.primary} 15%,
      ${(props) => props.theme.colors.secondary} 34%,
      ${(props) => props.theme.colors.tertiary} 50%,
      ${(props) => props.theme.colors.fourth} 73%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    padding: 25px;
  }

  > a {
    width: 112px;
    height: 112px;

    padding: 5px;
    position: relative;
    left: 45%;

    > img {
      padding: 25px;
      animation: ${animate} 0.7s infinite;
      transition: all 0.4s ease-in;

      &:hover {
        animation: none;
        box-shadow: 2px 2px 3px 1px ${(props) => props.theme.colors.fourth};
      }
    }
  }
`;

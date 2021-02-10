import styled from "styled-components";

export const StyledButtonsTheme = styled.section`
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${(props) => props.theme.colors.aside};

  text-align: left;

  transition: transform 0.3s ease-in-out;
`;

export const DefaultButton = styled.button`
  width: 180px;
  height: 90px;

  margin: 3rem;

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

  margin: 3rem;

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

  margin: 3rem;

  background: -webkit-linear-gradient(
    108deg,
    #e6e6ff 15%,
    #bebee6 34%,
    #50506e 50%,
    #1e1e3c 73%
  );

  border-radius: 5px;
`;

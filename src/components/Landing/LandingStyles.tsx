import styled from "styled-components";
import {theme} from "../UI/themeStyles";

interface Props {
  scroll: boolean;
}

const {primaryColor, secondaryColor, highlightColor} = theme;

export const LandingSection = styled.section<Props>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(
    to right,
    ${primaryColor} 50%,
    ${secondaryColor} 50%
  );
  background-size: 200%, 100%;
  transition: all 2.5s ease;
  background-position: ${({ scroll }) => (scroll ? "right" : "left")};
`;

export const Title = styled.h1`
  color: ${highlightColor};
`;


export const Header = styled.header`
  text-align: center;
  transform: translateY(-20%);
`;

export const HiddenHeader = styled.h2`
  color: ${primaryColor};
`;
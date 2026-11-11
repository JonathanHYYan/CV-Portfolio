import styled, { keyframes } from "styled-components";
import { fontSize, theme } from "../UI/themeStyles";
import { Link } from "react-scroll";
import { device } from "../UI/themeStyles";

interface Props {
  scroll: boolean;
}

interface ButtonProps {
  $highlight?: boolean;
  $round?: boolean;
}

const { primaryColor, secondaryColor, highlightColor } = theme;

const colorTransition = keyframes`
  0% {
    color : ${primaryColor}
  }
  100% {
    color : ${secondaryColor}
  }
`;

export const LandingSection = styled.section<Props>`
  width: 100%;
  padding: 0 2em 0 2em;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  text-align: center;
  background: linear-gradient(
    to right,
    ${secondaryColor} 50%,
    ${primaryColor} 50%
  );
  background-size: 200%, 100%;
  transition: all 2.5s ease;
  background-position: ${({ scroll }) => (scroll ? "right" : "left")};

  @media ${device.mobileS} {
    position: relative;
  }
`;

export const LandingSpinner = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(0%);

  @media ${device.mobileS} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
  }
`;

export const LandingText = styled.div`
  flex: 1;
  margin: 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  color: ${secondaryColor};
  z-index: 1;

  @media ${device.mobileS} {
    margin: 0 1.5rem;
    width: 100%;
  }
`;

export const Header = styled.img`
  height: auto;
  min-height: 3em;
  margin: 2rem 0 1em 0;
`;

export const HeaderText = styled.header`
  margin-top: 0.5em;
  opacity: 0.8;
  width: 80%;
  line-height: 1.7em;
`;

export const Eyebrow = styled.div`
  font-size: ${fontSize.small};
  color: ${highlightColor};
`;

export const SubHeader = styled.h2`
  && {
    font-size: ${fontSize.larger};
    opacity: 0.85;
    margin: 0.5em 0;
  }
  animation: ${colorTransition} 3.2s ease-out forwards;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1.5em;
  margin-top: 1em;
  font-size: ${fontSize.small};
  font-weight: bold;
`;

export const Button = styled(Link)<ButtonProps>`
  && {
    color: ${({ $highlight }) => ($highlight ? primaryColor : secondaryColor)};
  }

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ $highlight }) => ($highlight ? highlightColor : secondaryColor)};
  padding: 1em;
  background-color: ${({ $highlight }) =>
    $highlight ? highlightColor : primaryColor};
  border-radius: ${({ $round }) => ($round ? "25px" : "5px")};
  cursor: pointer;
`;

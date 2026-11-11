import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { Link } from "react-scroll";
import {
  device,
  fontSize,
  highlightColor,
  primaryColor,
  secondaryColor,
} from "../UI/themeStyles";

interface Props {
  navBackground: boolean;
}

export const NavBar = styled.nav<Props>`
  font-size: ${fontSize.small};
  height: 4em;
  padding: 1em 1em 1em 0;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 100;
  justify-content: flex-end;
  color: #ffffff96;
  background-color: ${({ navBackground }) =>
    navBackground ? secondaryColor : ""};

  @media ${device.mobileS} {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  list-style-type: none;
  display: inline-block;
  margin: 0 2em 0 0;
  text-transform: uppercase;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid ${highlightColor};
    padding-bottom: 0.1rem;
    right: 100%;
  }

  &:hover {
    color: ${highlightColor};
    border-bottom: 2px solid $highlight-color;
    padding-bottom: 0.1rem;
    right: 0;
  }

  @media ${device.mobileS} {
    margin: 0;
    font-size: ${fontSize.tiny};
  }
`;

export const BotNavBar = styled.div`
  display: none;

  @media ${device.mobileS} {
    display: flex;
    position: fixed;
    color: ${primaryColor};
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background: ${secondaryColor};
    justify-content: space-around;
    align-items: center;
    z-index: 10;
    font-size: ${fontSize.tiny};
  }

  ${StyledIconBase} {
    width: 1rem;
    height: 1rem;
  }
`;

export const BotNavLink = styled(Link)<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.05em;

  && {
    color: ${({ $active }) => ($active ? highlightColor : primaryColor)};
  }
`;

export const BotDownloadLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  ${StyledIconBase} {
    color: ${highlightColor}
  }
`;

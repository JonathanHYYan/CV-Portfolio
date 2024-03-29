import styled from "styled-components";
import { Link } from "react-scroll";
import { device, highlightColor, secondaryColor } from "../UI/themeStyles";

interface Props {
  navBackground: boolean;
}

export const NavBar = styled.nav<Props>`
  height: 4em;
  padding: 1em 0 1em 0;
  width: 100%;
  position: fixed;
  display: flex;
  z-index: 100;
  justify-content: flex-end;
  color: white;
  background-color: ${({ navBackground }) =>
    navBackground ? secondaryColor : ""};

  @media only ${device.mobileS} {
    justify-content: space-evenly;
    font-size: 0.7rem;
  }
`;

export const NavLink = styled(Link)`
  list-style-type: none;
  display: inline-block;
  margin: 0 2em 0 0;
  font-size: 1rem;
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

  @media only ${device.mobileS} {
    margin: 0;
    font-size: 0.8rem;
  }
`;

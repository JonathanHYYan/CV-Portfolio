import styled from "styled-components";
import { Link } from "react-scroll";
import { highlightColor } from "../UI/themeStyles";

export const NavBar = styled.nav`
  height: 2em;
  margin: 1em;
  position: fixed;
  display: flex;
  right: 0;
  z-index: 100;
`;

export const NavLink = styled(Link)`
list-style-type: none;s
display: inline-block;
margin: 0 2em 0 0;
color: white;
font-size: 1rem;
text-transform: uppercase;
&.active {
  border-bottom: 2px solid ${highlightColor};
  padding-bottom: 0.1rem;
  right: 100%;
}
&:hover{
  color:  ${highlightColor};
  border-bottom: 2px solid $highlight-color;
  padding-bottom: 0.1rem;
  right: 0;
}
`;

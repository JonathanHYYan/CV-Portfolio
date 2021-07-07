import styled from "styled-components";
import backgroundImg from "../images/background.jpg";

export const MainSection = styled.section`
  position: relative;
  padding-top: 5em;

  &:before {
    content: "";
    position: absolute;
    opacity: 0.05;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${backgroundImg});
    background-size: cover;
  }
`;


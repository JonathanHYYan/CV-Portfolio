import styled from "styled-components";
import faceImg from "../images/dummyAboutMePic.jpg";
import { device } from "../UI/themeStyles";

interface Props {
  scrollPercent: number;
}

export const AboutMeTitle = styled.div<Props>`
  color: $secondary-color;
  font-size: 10rem;
  font-weight: 1000;
  opacity: 0.1;
  transition: transform 2s ease, opacity 4s;
  transform: translateX(${({ scrollPercent }) => -50 + scrollPercent}%);

  &:hover {
    transition: 4s;
    opacity: 0;
  }

  @media only ${device.mobileS} {
    font-size: 5.5rem;
    transition: transform 0.4s ease, opacity 4s;
  }
`;

export const AboutSection = styled.section<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20em;
  position: relative;
  overflow: hidden;

  &:before {
    opacity: 0;
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 4s;
    background-image: url(${faceImg});

    @media only ${device.mobileS} {
      background-size: 1100px, 733px;
      opacity: ${({scrollPercent}) => (scrollPercent > 50) ? 1 : 0 }
    }
  }

  &:hover {
    &:before {
      opacity: 0.4;
    }
  }
`;

export const AboutText = styled.div`
  position: absolute;
  color: $secondary-color;
  font-size: 2rem;
  font-weight: 700;

  &:before {
    opacity: 1;
  }

  @media only ${device.mobileS} {
    font-size: 1.5rem;
    margin: 10%;
  }
`;

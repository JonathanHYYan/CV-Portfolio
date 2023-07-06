import { ArrowDropLeft, ArrowDropRight } from "@styled-icons/remix-line";
import { Circle } from "@styled-icons/simple-icons";
import styled, { keyframes, css } from "styled-components";
import { device } from "./themeStyles";

interface Props {
  active: boolean;
}

const activeAnimation = keyframes`  
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}`;

export const CarouselHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  height: 405px;
  max-width: 1600px;

  @media only ${device.mobileL}{
    height: auto;
  }
`;

export const Slide = styled.section<Props>`
  display: ${({ active }) => (active ? "flex" : "none")};
  justify-content: space-evenly;
  align-items: center;

  @media only ${device.mobileL} {
    flex-direction: column;
  }
`;

export const SlideSquare = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 35%;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  @media only ${device.mobileL} {
    width: 60%;
  }

  @media only ${device.mobileS} {
    width: 95%;
    margin: auto;
  }
`;

export const ProjectTitle = styled.h2`
  @media only ${device.mobileS} {
    font-size: 0.5rem;
  }
`;

export const ProjectRole = styled.h3`
  margin-bottom: 1em;
`;

export const ProjectDesc = styled.p`
  width: 95%;
  margin-bottom: 1.5em;

  @media only ${device.mobileL} {
    display: none;
  }
`;

export const Tech = styled.div`
  height: 40%;
  width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  @media only ${device.mobileL} {
    transform: scale(0.7);
    width:100%;
  }
  @media only ${device.tabletS} {
    transform: scale(0.8);
  }
`;

export const StackIcon = styled.div`
  height: auto;
  width: 3em;
  margin: 1em;
`;

export const CarouselNav = styled.div`
  display: flex;
  align-items: center;
  z-index: 15;
`;

export const CarouselButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`;

export const CarouselIndicators = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`;

export const Left = styled(ArrowDropLeft)`
  height: 4em;
  width: 4em;
`;

export const Right = styled(ArrowDropRight)`
  height: 4em;
  width: 4em;
`;

const spin = css`
  ${activeAnimation} 5s infinite;
`;

export const Dot = styled(Circle)<Props>`
  transition-duration: 600ms;
  width: ${({ active }) => (active ? "1.6em" : "1.5em")};
  height: ${({ active }) => (active ? "1.6em" : "1.5em")};
  margin: 0 0.5em 0 0.5em;
  animation: ${({ active }) => (active ? spin : null)};
  opacity: ${({ active }) => (active ? '1' : '0.5')}
`;

export const SlideImg = styled.img`
  width: 100%;
  max-width: 28em;

  @media only ${device.mobileL} {
    margin: 1rem 0 1.5rem 0;
  }
`;

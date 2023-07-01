import { ArrowDropLeft, ArrowDropRight } from "@styled-icons/remix-line";
import { Circle } from "@styled-icons/simple-icons";
import styled, { keyframes, css } from "styled-components";

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
  overflow: hidden;
  z-index: 10;
`;

export const Slide = styled.section<Props>`
  height: 25em;
  display: ${({ active }) => (active ? "flex" : "none")};
  justify-content: space-evenly;
`;

export const SlideSquare = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 35%;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;

  &:nth-child(1) {
    border: 1px solid black;
  }

  &:nth-child(3) {
    border: 1px solid black;
  }
`;

export const ProjectTitle = styled.h2``;

export const ProjectRole = styled.h3`
  margin-bottom: 1em;
`;

export const ProjectDesc = styled.p`
  width: 95%;
  margin-bottom: 1.5em;
`;

export const Tech = styled.div`
  height: 40%;
  width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
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
`;

export const SlideImg = styled.img`
  height: 100%;
`;


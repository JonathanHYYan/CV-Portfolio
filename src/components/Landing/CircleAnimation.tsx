import styled, { css, keyframes } from "styled-components";
import { highlightColor } from "../UI/themeStyles";

const circleGenerator = [];

const animateCircle = (i: number) => keyframes`
  0% {
    transform:translateX(-50%) rotate(0deg);
  }
  100% {
    transform:translateX(-50%) rotate(${-i*360}deg);
  }
`;



const initSize = 5;
const initMod = 8;
const sizeMod = 0.89;


for (let i = 1; i < 16; i++) {
  if (i > 1) {
    circleGenerator.push(css`
    .circle:nth-child(${i}) {
      size: ${initSize + initMod * (i - i*sizeMod)}em;
      border: 13px solid black;
      border-bottom:none;
			border-radius:${initSize + initMod * (i - i*sizeMod)}em ${initSize + initMod * (i - i*sizeMod)}em 0 0;
			width:${initSize + initMod * (i - i*sizeMod)}em;
			height:${(initSize + initMod * (i - i*sizeMod)) / 2}em;
			z-index:  ${-16 - i};
      animation: ${animateCircle(i)} 30s infinite ease-in-out;
    }
    `);
  } else {
    circleGenerator.push(css`
    .circle:nth-child(${i}) {
      size: 25px;
      border-bottom:none;
			border-radius:${initSize + initMod * (i - i*sizeMod)}em ${initSize + initMod * (i - i*sizeMod)}em 0 0;
			width:${initSize + initMod * (i - i*sizeMod)}em;
			height:${(initSize + initMod * (i - i*sizeMod)) / 2}em;
			z-index:  ${16 - i};
    }
    `);
  }
};


export const CircleHolder = styled.div`

  .circle {
    font-size:2rem;
    color:${highlightColor};
    border-radius: 100% 100% 0 0;
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: bottom center;
  }
  ${circleGenerator}
`;

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

const pulseBG =  keyframes `
0% {
  transform: translateX(-47%) translateY(80%) scale(0.95);
}

70% {
  transform: translateX(-47%) translateY(80%) scale(1);
}

100% {
  transform:  translateX(-47%) translateY(80%) scale(0.95);
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
			z-index:  ${16 - i};
      // transform:translateX(-50%);
      animation: ${animateCircle(i)} 10s infinite ease-in-out;
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
      transform: scale(1);
      animation: ${pulseBG} 2s infinite;
    }
    `);
  }
};


export const CircleHolder = styled.div`
  margin: 3em 0 0 0;
  width: 500px;
  height:250px;
  position relative;

  .circle {
    font-size:2rem;
    color:${highlightColor};
    border-radius: 100% 100% 0 0;
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translateX(-40%) translateY(82.5%);
    transform-origin: bottom center;
    &:hover {
      cursor: pointer;
    }
  }
  ${circleGenerator}
`;

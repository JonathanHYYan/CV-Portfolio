import styled, { css, keyframes } from "styled-components";
import { device } from "../UI/themeStyles";
import { highlightColor, primaryColor, secondaryColor } from "../UI/themeStyles";

const circleGenerator = [];

const animateCircle = (i: number) => keyframes`
  0% {
    transform:translateX(-50%) rotate(0deg);
  }
  100% {
    transform:translateX(-50%) rotate(${-i*360}deg);
  }
`;

const colorTransition = keyframes`
  0% {
    border-top-color: ${primaryColor};
    border-left-color: ${primaryColor};
    border-right-color: ${[primaryColor]};
  }
  100% {
    border-top-color: ${secondaryColor};
    border-left-color: ${secondaryColor};
    border-right-color: ${secondaryColor};
  }
`;

const colorTransitionSmall = keyframes`
  0% {
    border-top-color: ${primaryColor};
    border-left-color: ${primaryColor};
    border-right-color: ${[primaryColor]};
  }
  100% {
    border-top-color: ${highlightColor};
    border-left-color: ${highlightColor};
    border-right-color: ${highlightColor};
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
      border: 13px solid ${secondaryColor};
      border-bottom: 1px solid transparent;
			border-radius:${initSize + initMod * (i - i*sizeMod)}em ${initSize + initMod * (i - i*sizeMod)}em 0 0;
			width:${initSize + initMod * (i - i*sizeMod)}em;
			height:${(initSize + initMod * (i - i*sizeMod)) / 2}em;
			z-index:  ${-16 - i};
      animation: ${animateCircle(i)} 30s infinite ease-in-out, ${colorTransition} 3.2s ease-in forwards;

      @media only ${device.mobileL} {
        border: 13px solid white;
        border-bottom: 1px solid transparent;
        animation: ${animateCircle(i)} 30s infinite ease-in-out, ${colorTransitionSmall} 3.2s ease-in forwards;
      }
      
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
  position: relative;

  .circle {
    font-size: clamp(1rem, 2vw, 2rem);
    color:${highlightColor};

    border-radius: 100% 100% 0 0;
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: bottom center;

    @media ${device.mobileS} {
      font-size: 2.5rem;
    }

  }
  ${circleGenerator}
`;

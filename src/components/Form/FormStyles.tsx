import styled, { css, keyframes } from "styled-components";

const circleGenerator = [];

const animateCircle = (i: number) => keyframes`
  0% {
    transform:translateX(-50%) rotate(0deg);
  }
  100% {
    transform:translateX(-50%) rotate(${-i*360}deg);
  }
`;

for (let i = 1; i < 16; i++) {
  if (i > 1) {
    circleGenerator.push(css`
    .circle:nth-child(${i}) {
      size: ${31 * (i - 1)}px;
      border: 13px solid black;
      border-bottom:none;
			border-radius:${31 * (i - 1)}px ${31 * (i - 1)}px 0 0;
			width:${31 * (i - 1)}px;
			height:${(31 * (i - 1)) / 2}px;
			z-index:  ${16 - i};
      animation: ${animateCircle(i)} 10s infinite ease-in-out;
    }
    `);
  } else {
    circleGenerator.push(css`
    .circle:nth-child(${i}) {
      size: 25px;
      background:black;
      border-bottom:none;
			border-radius:${31 * (i - 1)}px ${31 * (i - 1)}px 0 0;
			width:${31 * (i - 1)}px;
			height:${(31 * (i - 1)) / 2}px;
			z-index:  ${16 - i};
      animation: ${animateCircle(i)} 10s infinite ease-in-out;
    }
    `);
  }
};

console.log(circleGenerator)

export const CircleHolder = styled.div`
  width: 500px;
  height:250px;
  position relative;

  .circle {
    border-radius: 100% 100% 0 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transform-origin: bottom center;
  }
  ${circleGenerator}
`;

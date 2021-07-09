import styled from "styled-components";

const circleGenerator = () => {
  for (let i = 1; i < 16; i++) {
      return `
      .circle:nth-child(${i}) {
        size: ${31 * (i - 1)}px;
        border: 13px solid black;
      }
      `;
  };
};

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

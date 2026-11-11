import styled from "styled-components";

export const MaraqueeWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const MaraqueeTrack = styled.div`
  display: flex;
  width: max-content;
  animation: scroll 55s linear infinite;
  @keyframes scroll {
    0% {transform: translateX(0);}
    100%{transform: translateX(-50%);}
  }
  &:hover {
    animation-play-state: paused;
    cursor: pointer;
  }
`;

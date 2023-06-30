import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { device } from "../UI/themeStyles";
import {
  Html5,
  Css3,
  Javascript,
  Sass,
  Typescript,
  ReactLogo,
  Bootstrap,
  Php,
  Laravel,
  Jquery,
  Vuedotjs,
} from "@styled-icons/simple-icons";

export const IconStyle = styled.div`
  display: flex;
  justify-content: center;

  ${StyledIconBase} {
    width: 5vw;
    min-width: 3em;
    height: 5vw;
    min-height: 3em;
    margin: 0 1vw 0 1vw;

    }

    @media only ${device.mobileS} {
      width: 3em;
      height: 3em;
    }
  }
`;

const animationFunc = (num: number) => {
  return `
  animation: onInitialView ${0.4 * num}s ease-out forwards;
  @keyframes onInitialView {
    0% {
      opacity: 0;
      transform:translateY(100%);
    }
    100% {
      opacity:1;
      transform:translateY(0);
    }
  `;
};

export const Html = styled(Html5)`
  color: #d94625;
  ${animationFunc(1)}
`;

export const Css = styled(Css3)`
  color: #2168a6;
  ${animationFunc(2)}
`;

export const Scss = styled(Sass)`
  color: #cd669a;
  ${animationFunc(3)}
`;
export const JavaScript = styled(Javascript)`
  color: #f0db4f;
  background-color: black;
  ${animationFunc(4)}
`;

export const TypeScript = styled(Typescript)`
  color: #61dbfb;
  ${animationFunc(5)}
`;

export const React = styled(ReactLogo)`
  color: #007acc;
  ${animationFunc(6)}
`;

export const PHP = styled(Php)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LaravelLogo = styled(Laravel)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Jq = styled(Jquery)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Boot = styled(Bootstrap)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VueJs = styled(Vuedotjs)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

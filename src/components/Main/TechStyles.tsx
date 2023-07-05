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
  Styledcomponents,
  Tailwindcss,
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
  color: #777bb3;
  height: 4em;
  width: 4em;
  ${animationFunc(7)}
`;

export const LaravelLogo = styled(Laravel)`
  color: #f05340;
  height: 3.4em;
  width: 3.4em;
  ${animationFunc(2)}
`;

export const Jq = styled(Jquery)`
  color: #0868ac;
  height: 3.4em;
  width: 3.4em;
  ${animationFunc(3)}
`;

export const Boot = styled(Bootstrap)`
  color: #553c7b;
  height: 3.4em;
  width: 3.4em;
  ${animationFunc(4)}
`;

export const VueJs = styled(Vuedotjs)`
  color: #41b883;
  height: 3.4em;
  width: 3.4em;
  ${animationFunc(5)}
`;

export const Styled = styled(Styledcomponents)`
  height: 3.4em;
  width: 3.4em;
  ${animationFunc(5)}
`;

export const Tailwind = styled(Tailwindcss)`
  color:#38BDF8;
  height: 3.4em;
  width: 3.4em;
  ${animationFunc(5)}
`;

import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { device, primaryColor, Section } from "../UI/themeStyles";
import {
  Html5,
  Css3,
  Javascript,
  Sass,
  Typescript,
  ReactLogo,
  Nextdotjs,
  Bootstrap,
  Php,
  Laravel,
  Jquery,
  Vuedotjs,
  Styledcomponents,
  Tailwindcss,
} from "@styled-icons/simple-icons";

interface Props {
  $index: number;
  $visible: boolean;
}

const animationFunc = (num: number) => {
  return `
  animation: onInitialView ${Math.log(num + 2) * 0.6}s ease-out forwards;
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

export const TechSection = styled(Section)`
  background-color: white;
`;

export const Carousel = styled.div`
  display: flex;
  gap: 2em;
  text-align: center;
`;

export const TechCards = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 2em;
  width: 7em;
  height: 8em;
  background-color: #f1f1f1d2;
  border: 1px solid ${primaryColor};
  border-radius: 10px;
  opacity: 0;
  ${({ $visible, $index }) => $visible ? animationFunc($index) : ''};
`;

export const Text = styled.div`
  font-size: 0.8em;
  margin-top: 2em;
`;

const width = "2em";

export const Html = styled(Html5)`
  color: #d94625;
  width: ${width};
`;

export const Css = styled(Css3)`
  color: #2168a6;
  width: ${width};
`;

export const Scss = styled(Sass)`
  color: #cd669a;
  width: ${width};
`;

export const JavaScript = styled(Javascript)`
  color: #f0db4f;
  background-color: black;
  width: ${width};
`;

export const TypeScript = styled(Typescript)`
  color: #61dbfb;
  width: ${width};
`;

export const React = styled(ReactLogo)`
  color: #007acc;
  width: ${width};
`;

export const Nextjs = styled(Nextdotjs)`
  color: #000000;
  width: ${width};
`;

export const PHP = styled(Php)`
  color: #777bb3;
  width: ${width};
`;

export const LaravelLogo = styled(Laravel)`
  color: #f05340;
  width: ${width};
`;

export const Jq = styled(Jquery)`
  color: #0868ac;
  width: ${width};
`;

export const Boot = styled(Bootstrap)`
  color: #553c7b;
  height: 3.4em;
  width: ${width};
`;

export const VueJs = styled(Vuedotjs)`
  color: #41b883;
  width: ${width};
`;

export const Styled = styled(Styledcomponents)`
  width: ${width};
`;

export const Tailwind = styled(Tailwindcss)`
  color: #38bdf8;
  width: ${width};
`;

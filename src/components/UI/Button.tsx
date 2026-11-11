import styled from "styled-components";
import { theme } from "./themeStyles";


interface ButtonProps {
  $highlight?: boolean;
  $round?: boolean;
  $fill?: boolean;
  padding?: string;
}

const {primaryColor, secondaryColor, highlightColor} = theme;

export const DownloadButton = styled.a<ButtonProps>`
  && {
    color: ${({$highlight, $fill}) => $highlight || $fill ? highlightColor : secondaryColor};
  }
  
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({$highlight}) => $highlight ? highlightColor : secondaryColor};
  padding: ${({padding}) => padding ? padding : '0.7em' } ;
  background-color: ${({$highlight, $fill}) => $highlight && $fill ? secondaryColor : primaryColor};
  border-radius: ${({$round}) => $round ? '25px' : '5px' };
  cursor: pointer;
`;

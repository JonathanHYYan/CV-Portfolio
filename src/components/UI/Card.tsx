import styled from "styled-components";
import { device, highlightColor, primaryColor } from "./themeStyles";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px ${primaryColor};
  border-radius: 6px;
  margin: 10em 2.5% 5em 2.5%;
  padding: 2.5em;

  @media only ${device.tabletS} {
    margin: 1.5em 2.5% 4em 2.5%;
  }
`;

export const CardTitle = styled.h2`
  padding: 0 0 0.75em 0;
  border-bottom: 2px solid ${highlightColor};
`;

export const CardText = styled.p`
  padding: 1.5em;
  font-weight: normal;
  text-align: center;
  max-width: 1200px;
  line-height: 2;

  @media only ${device.mobileS} {
    width:100%;
  }
`;

export const CardHighlight = styled.span`
  color: ${highlightColor};
  font-size: 1.2rem;
  font-weight: 700;
`;

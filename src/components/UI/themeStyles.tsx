import styled, { css } from "styled-components";

export interface Visible {
  $visible: boolean;
}

const transitionTime = 1;

export const theme = {
  primaryColor: "rgb(218,218,218)",
  secondaryColor: "#272727",
  highlightColor: "rgb(26,184,196)",
};

export const fontSize = {
  tiny: "0.85em",
  small: "0.9em",
  large: "1.1em",
  larger: "1.5em",
  title: "1.7em",
  giant: "2.5em"
};

export const { primaryColor, secondaryColor, highlightColor } = theme;

const viewPortSize = {
  mobileS: "426px",
  mobileL: "769px",
  tabletS: "1024px",
  tabletL: "1200px",
};

export const device = {
  mobileS: `screen and (max-width: ${viewPortSize.mobileS})`,
  mobileL: `screen and (max-width: ${viewPortSize.mobileL})`,
  tabletS: `screen and (max-width: ${viewPortSize.tabletS})`,
  tabletL: `screen and (min-width: ${viewPortSize.tabletL})`,
};

export const Title = styled.h2`
  margin: 0.7em 0;
  && {
    font-size: ${fontSize.title};
  }
`;

export const Eyebrow = styled.div`
  && {
    font-size: 0.7rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
  color: ${highlightColor};
`;

export const Accent = styled.div`
  position: absolute;
  border: 3px solid ${highlightColor};
  bottom: -1rem;
  right: -1rem;
  width: 80%;
  height: 80%;
  border-radius: 5px;
`;

export const CardTitle = styled.header`
  margin-top: 1em;
  && {
    font-size: 1.3em;
    font-weight: 700;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 8em 9em;
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${device.tabletS}{
    padding: 4em 5em;
  }
`;

export const Line = styled.div`
  width: 3.5rem;
  height: 3px;
  background: ${highlightColor};
  margin-bottom: 2em;
`;

export const opacity1 = css<Visible>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(40px)"};
  transition:
    opacity 0.6s ease,
    transform 1s ease;
`;

export const opacity2 = css<Visible>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(40px)"};
  transition:
    opacity 0.6s ease 0.2s,
    transform 1s ease;
`;

export const Pill = styled.div`
  border-radius: 8px;
  background-color: #eef9f8;
  padding: 0.2rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  && {
    color: teal;
  }
`;

export const Highlight = styled.span`
  color: ${highlightColor};
`;

export const FlexRow = styled.div`
display:flex;
flex-direction: row;
align-items: center`;
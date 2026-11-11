import styled from "styled-components";
import { opacity1, opacity2, theme, Visible } from "../UI/themeStyles";

const { primaryColor, secondaryColor, highlightColor } = theme;

export const Job = styled.div<Visible>`
  position: relative;
  width: 100%;
  border-left: 1px solid rgba(0,0,0,0.6);
  padding: 0 2em;
  ${opacity1}

  ::before{
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${highlightColor};
    left: -0.4em;
    border: 2px solid white;
    box-shadow: 0 0 0 2px ${highlightColor};
  }
`;

export const Text = styled.div<Visible>`
  margin-top: 0.5rem;
  color: ${secondaryColor};
  padding-bottom: 1rem;
  ${opacity2}
`;

export const Role = styled.div`
  padding-bottom: 1em;
  opacity: 0.6;
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

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-bottom: 1rem;
`;

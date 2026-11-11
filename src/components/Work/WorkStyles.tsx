import styled from "styled-components";
import {
  primaryColor,
  secondaryColor,
  highlightColor,
  fontSize,
  device,
} from "../UI/themeStyles";
import { StyledIconBase } from "@styled-icons/styled-icon";

export const Text = styled.div`
  color: ${secondaryColor};
  opacity: 0.6;
  margin-bottom: 1rem;
  font-size: 0.75em;
`;

export const FilterSection = styled.div`
  display: flex;
  flex: 0 0 2em;
`;

export const FilterSidebar = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 10rem;
`;

export const FilterGroups = styled.div`
  margin-bottom: 1.7em;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 0.8em;
  margin-bottom: 1rem;
`;

export const Category = styled.div<{ $active: boolean }>`
  cursor: pointer;
  opacity: ${({ $active }) => ($active ? "1" : "0.8")};
  color: ${({ $active }) => ($active ? highlightColor : secondaryColor)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  font-size: 0.85em;
`;

export const FilterDot = styled.div<{ $active: boolean }>`
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  margin-right: 0.3rem;
  background-color: ${({ $active }) =>
    $active ? highlightColor : secondaryColor};
`;

export const Count = styled.div<{ $active: boolean }>`
  font-size: 0.8em;
  background: white;
  border: 1.5px solid
    ${({ $active }) => ($active ? highlightColor : secondaryColor)};
  border-radius: 10px;
  padding: 1px 7px;
  color: ${({ $active }) => ($active ? highlightColor : secondaryColor)};

  @media ${device.mobileL} {
    display: none;
  }
`;

export const ProjectSection = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-left: 2rem;

  @media ${device.mobileL} {
    margin: 0;
  }
`;

export const ProjectCards = styled.div`
max-height: 150vh;
overflow-y: auto;
`;

export const ShowingCount = styled.div`
  border-bottom: 1px solid ${secondaryColor};
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  font-size: ${fontSize.tiny};
  color: ${secondaryColor};
`;

export const CountNumber = styled.span`
  font-weight: bold;
`;

export const ProjectRow = styled.div`
  display: flex;
  justify-content: center;
  max-height: 100vh;
  gap: 2rem;

  @media ${device.mobileL} {
    gap: 1rem;
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${secondaryColor};
  border-radius: 8px;
  background-color: #ffffffde;
  margin-bottom: 1.5rem;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

export const ThumbnailWrapper = styled.div`
  width: 220px;
  flex-shrink: 0;
  padding: 0.5rem 1rem;

  @media ${device.mobileL} {
    width: 100%;
    height: 200px;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
`;

export const ProjectBody = styled.div`
  padding: 2em;
  flex: 1;
  min-width: 0;
`;

export const ProjectTitle = styled.div`
  font-weight: bold;
  font-size: ${fontSize.large};
  margin: 0.6em 0;
`;

export const Description = styled.div`
  opacity: 0.8;
  font-size: ${fontSize.small};
  line-height: 1.5em;
  width: 100%;
`;

export const Pills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5em;
  margin: 0.8rem 0 0.8rem 0;
  font-size: ${fontSize.tiny};
  min-width: 0;
  overflow-x: auto;
`;

export const View = styled.a`
  && {
    color: ${highlightColor};
    font-size: ${fontSize.tiny};
    letter-spacing: 0.2px;
  }

  ${StyledIconBase} {
    width: ${fontSize.tiny};
    height: ${fontSize.tiny};
  }
`;

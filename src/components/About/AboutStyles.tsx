import styled from "styled-components";
import { device, theme, Section, opacity1, opacity2 } from "../UI/themeStyles";

const { primaryColor, secondaryColor, highlightColor } = theme;

export const AboutSection = styled(Section)`
  display: flex;
  background-color: white;
  flex-direction: row;

  @media ${device.tabletS} {
    flex-direction: column;
  }
`;

export const AboutImage = styled.div`
  position: relative;
  flex: 40%;
  margin: 2rem;
  ${opacity1}
`;

export const AboutImageContainer = styled.div`
  position: relative;
  height: 25rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;


export const AboutText = styled.div`
  flex: 60%;
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  ${opacity2}
`;

export const Header = styled.header`
  margin-bottom: 1.5rem;
  && {
    font-size: 1.3em;
    font-weight: 700;
  }
`;

export const Text = styled.div`
  color: ${secondaryColor};
  margin-bottom: 1rem;
`;

export const Skills = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
  }
`;

export const SkillBox = styled.div`
  flex: 30%;
  background-color: ${primaryColor};
  margin: 1rem;
  padding: 1rem 2rem;
  max-width: 15rem;

  @media ${device.mobileL} {
    min-width: 15em;
  }
`;

export const SkillPlus = styled.div`
  font-size: 0.9em;
  padding-left: 0.1em;
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SkillNum = styled.div`
  color: ${highlightColor};
  margin-bottom: 0.5rem;
  font-size: 1.75em;
  text-align: center;
  display: flex;
  flex-direction: row;
`;

export const SkillLabel = styled.div`
  font-size: 0.8em;
`;

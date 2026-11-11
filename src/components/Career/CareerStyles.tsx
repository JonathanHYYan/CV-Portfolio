import styled from "styled-components";
import { device, Section } from "../UI/themeStyles";
import bgmLandscape from "../../assets/general/images/website.png";
import bgmPortrait from "../../assets/general/images//websitePortrait.png";


export const CareerSection = styled(Section)`
  display: flex;
  flex-direction: column;
  width: 75%;

  @media ${device.tabletS} {
    flex-direction: column;
    width: 100%;
  }
`;

export const TimelineWrapper = styled.div``;
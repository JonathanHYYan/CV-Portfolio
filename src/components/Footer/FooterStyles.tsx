import styled from "styled-components";
import {
  fontSize,
  highlightColor,
  primaryColor,
  secondaryColor,
} from "../UI/themeStyles";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { Copyright } from "@styled-icons/remix-line";
import { device } from "../UI/themeStyles";
import { Link } from "react-scroll";

export const Footer = styled.footer`
  background-color: ${secondaryColor};
  color: white;
  width: 100%;
  align-items: center;

  @media only ${device.mobileL} {
    flex-direction: column;
    justify-content: center;
  }

  ${StyledIconBase} {
    width: 2em;
    height: 2em;
    color: white;
    margin-right: 0.5rem;
  }
`;

export const FooterSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 6rem;

  @media ${device.mobileL}{
    flex-direction: column;
  }

`;

export const CopyrightLogo = styled(Copyright)`
  width: 1em;
  height: 1em;
`;

export const Links = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 0;
  opacity: 0.5;
`;

export const FooterLink = styled(Link)`
  color: white;
  font-size: ${fontSize.tiny};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only ${device.mobileL} {
    width: 100%;
  }

  @media only ${device.mobileL} {
    display: inline-block;
    padding-right: 1em;
    font-size: 0.8em;
  }
`;

export const CopyRight = styled.div`
  font-size: ${fontSize.tiny};
  opacity: 0.5;
`;

export const FooterTitle = styled.div`
  font-size: ${fontSize.giant};
  margin-top: 1rem;
  font-weight: bold;
  line-height: 3rem;
`;

export const Contact = styled.div`
  margin: 2.2rem 0;
`;

export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fontSize.tiny};
  margin: 0 0 4rem 0;

  a{
    word-break: break-all;
  }
`;

export const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FootNote = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  background-color: #1a1a1a;
  align-items: center;
  padding: 2rem 0;
`;

export const ExternalLinks = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fontSize.tiny};
  opacity: 0.5;
`;

export const EmailLink = styled.a`
  &&{
    color: black;
    font-size: ${fontSize.small};
    letter-spacing: 0.1rem;
  }
  
  margin-top: 2rem;
  background-color: ${highlightColor};
  padding: 1rem;
  border-radius: 5px;
  align-self: flex-start;
  display: inline;
`;
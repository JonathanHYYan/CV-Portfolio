import styled from "styled-components";
import { secondaryColor } from "../UI/themeStyles";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { Copyright } from "@styled-icons/remix-line";
import { device } from "../UI/themeStyles";
import { Link } from "react-scroll";

export const Footer = styled.footer`
  display: flex;
  padding: 3em 2em 3em 2em;
  background-color: ${secondaryColor};
  color: white;
  width: 100%;

  @media only ${device.mobileL} {
    flex-direction: column;
  }

  h3 {
    display: flex;
    align-items: center;
    font-size: 3.5rem;

    @media only ${device.mobileL} {
      font-size: 5rem;
    }

    @media only ${device.mobileS} {
      font-size: 2.5rem;
    }
  }

  ul {
    list-style-type: none;
    padding: 2em 0 2em 0;
  }

  .socials {
    width: 60%;
    border-right: 2px solid white;

    @media only ${device.mobileL} {
      width: 100%;
      border-right: 0;
    }

    & p {
      display: flex;
      font-size: 0.8rem;
      @media only ${device.mobileL} {
        width: 100%;
        text-align: center;
      }
    }

    & ul {
      display: flex;
      align-items: center;
    }

    & li {
      margin: 0 1.5em 0 0;
    }
  }

  .info {
    display: flex;
    align-items: center;
    width: 40%;
    padding-left: 5%;
    justify-content: space-between;
    @media only ${device.mobileL} {
      width: 100%;
    }
    & li {
      font-size: 1.3rem;
      padding-bottom: 1em;

      @media only ${device.mobileL} {
        display: inline-block;
        padding-right: 1em;
        font-size: 0.8em;
      }
    }
  }

  ${StyledIconBase} {
    min-width: 2em;
    min-height: 2em;
    color: white;
  }
`;

export const CopyrightLogo = styled(Copyright)`
  width: 1em;
  hight: 1em;
`;

export const FooterLink = styled(Link)`
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  justify-content: space-between;
  @media only ${device.mobileL} {
    width: 100%;
  }
  & li {
    font-size: 1.3rem;
    padding-bottom: 1em;

    @media only ${device.mobileL} {
      display: inline-block;
      padding-right: 1em;
      font-size: 0.8em;
    }
  }
`;

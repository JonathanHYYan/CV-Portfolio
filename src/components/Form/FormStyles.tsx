import styled from "styled-components";
import { device, highlightColor } from "../UI/themeStyles";

interface Props {
  hasError: boolean;
}

export const ContactForm = styled.form`
  padding-top: 2em;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em;

  @media only ${device.tabletS} {
    width: 60%;
  }

  @media only ${device.mobileL} {
    width: 90%;
  }
`;

export const DataInput = styled.input<Props>`
  border-style: none;
  border-bottom: 2px solid grey;
  background: ${({ hasError }) => (hasError ? "#f8786c" : "none")};
  margin: 0.7em;
  padding: 0.3em 1em;
  width: 100%;

  ::placeholder {
    color: black;
  }

  &:focus {
    outline: none;
    border-bottom: solid ${highlightColor};
  }

  &:invalid {
    background-color: #fddddd;
  }
`;

export const MessageInput = styled.textarea<Props>`
  border-style: none;
  border-bottom: 2px solid grey;
  background: ${({ hasError }) => (hasError ? "#f8786c" : "none")};
  margin: 0.7em;
  padding: 0.3em 1em;
  width: 100%;

  ::placeholder {
    color: black;
  }

  &:focus {
    outline: none;
    border-bottom: solid ${highlightColor};
  }
`;

export const FormControls = styled.div``;

export const Button = styled.button`
  padding 0.2em;
  width: 6em;
  margin: 2em;
  color: ${highlightColor};
  border: solid 2px black;
  border-radius: 1em;
  cursor: pointer;
`;

export const FormError = styled.p`
  color: #f8786c;
`;

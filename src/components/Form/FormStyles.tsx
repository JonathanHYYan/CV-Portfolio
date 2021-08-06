import styled from "styled-components";
import { highlightColor } from "../UI/themeStyles";

export const ContactForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em;
`;

export const DataInput = styled.input`
  border-style: none none solid none;
  background: none;
  margin: 0.7em;
  padding: 0.3em 1em;
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: solid ${highlightColor};
  }
`;

export const MessageInput = styled.textarea`
  border-style: none none solid none;
  background: none;
  margin: 0.7em;
  padding: 0.3em 1em;
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: solid ${highlightColor};
  }
`;

export const FormControls = styled.div`
`;

export const Button = styled.button`
  padding 0.2em;
  width: 6em;
  margin: 0.7em;
`;

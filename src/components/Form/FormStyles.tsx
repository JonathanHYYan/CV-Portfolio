import styled from "styled-components";

export const ContactForm = styled.form`
  width: 100%;
  display:flex;
  justify-content: center;
  margin: 1em;
`;

export const DataInput = styled.input`
  // border: none;
  background:none;
  margin: 0.7em;
  padding:0.3em 1em;
  width:100%;
  
  &:focus {
    outline: none;
  }
`;

export const MessageInput = styled.input`
// border: none;
background:none;
margin: 0.7em;
padding:0.3em 1em;

&:focus {
  outline: none;
}
`;

export const Button = styled.button`
  padding 0.2em;
  width: 6em;
  margin: 0.7em;
`;
 
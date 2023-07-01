import styled from "styled-components";
import {device} from "../UI/themeStyles";

export const Main = styled.main`
h1 {
  font-size: 10rem;
}

h2 {
  font-size: 2.5rem;
}

p {
  font-size: 1.2rem;
}

a {
  color: black;
  text-decoration: none;
}

h1, h3 {
  font-family: 'EB Garamond', serif;
  font-style: italic;
}
@media only ${device.mobileL}{
  h1 {
    font-size: 5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
}
`;
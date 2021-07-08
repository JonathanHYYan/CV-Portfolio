import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import {device} from "../UI/themeStyles";


export const IconStyle = styled.div`
display: flex;

${StyledIconBase} {
  width: 5em;
  height: 5em;

  @media only ${device.mobileS}{
    width: 3em;
    height: 3em;
  }
}
`;
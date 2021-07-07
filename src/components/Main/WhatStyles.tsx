import styled from "styled-components";
import { highlightColor, primaryColor } from "../UI/themeStyles";

interface monToggle {
  deviceToggle: boolean;
}

export const MonitorToTablet = styled.div<monToggle>`
  ${({ deviceToggle }) => (deviceToggle ? monitor : tablet)}
  transition: all 0.4s ease;
`;
export const PhoneToLaptop = styled.div<monToggle>`
  ${({ deviceToggle }) => (deviceToggle ? phone : laptop)}
  transition: all 0.4s ease;
`;

const monitor = `
color: #000;
position: absolute;
margin-left: -30em;
margin-top: -9em;
width: 213px;
height: 140px;
border-radius: 5%;
border: solid 5px black;
background-color: ${highlightColor};

&:before {
  content: '';
  position: absolute;
  left: 85px;
  bottom: -35px;
  width: 30px;
  height: 30px;
  background-color: currentColor;
}

&:after {
  content: '';
  position: absolute;
  left: 63px;
  bottom: -40px;
  width: 70px;
  height: 10px;
  background-color: currentColor;
  border: solid 2px currentColor;
  border-radius: 5px;
}
`;

const tablet = `
color: #000;
position: absolute;
margin-left: -30em;
margin-top: -7em;
width: 105px;
height: 100px;
border-radius: 0;
border-top: solid 5px black;
border-bottom: solid 5px black;
background-color: ${highlightColor};


&:before {
  content: '';
  position: absolute;
  top: -20px;
  left: -8px;
  height: 120px;
  width: 100px;
  border: solid 10px black;
  background-color: ${primaryColor};
  border-radius: 5%;
  z-index: -1;
}

&:after {
  content: '';
  position: absolute;
  bottom: -17.5px;
  left: 40px;
  width: 5px;
  height: 5px;
  border: solid 3px currentColor;
  border-radius: 50%;
}`;

const phone = `
color: #000;
position: absolute;
margin-left: 30em;
margin-top: -6em;
width: 50.625px;
height: 90px;
border-radius: 10%;
border: solid 5px black;
background-color: ${highlightColor};

&:before {
  content: '';
  position: absolute;
  left: 17.5px;
  top: 5px;
  width: 5px;
  height: 2.5px;
  background-color: black;
}

&:after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 19px;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: black;
}
`;

const laptop = `
color: #000;
position: absolute;
margin-left: 35em;
margin-top: -8.5em;
width: 213px;
height: 140px;
border-radius: 5%;
border: solid 10px black;
background-color: ${highlightColor};

&:before {
  content: '';
  position: absolute;
  left: -25px;
  top: 140px;
  bottom: 100px;
  width: 240px;
  height: 15px;
  border-radius: 0 0 50% 50%;
  border: solid 1px black;
  background-color: black;
}

&:after {
  content: '';
  position: absolute;
  top: 124px;
  left: 180px;
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background-color: red;
}
`;
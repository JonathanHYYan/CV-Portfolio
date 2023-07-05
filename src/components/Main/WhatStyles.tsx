import styled from "styled-components";
import { device, primaryColor } from "../UI/themeStyles";
import bgmLandscape from "../images/website.png";
import bgmPortrait from "../images/websitePortrait.png";

interface monToggle {
  deviceToggle: boolean;
}

export const DeviceWrapper = styled.div`
  width: 80%;
  position: relative;
  height: 20vmin;

  @media only ${device.mobileS} {
    width: 100%;
  }
`;

export const MonitorToTablet = styled.div<monToggle>`
  ${({ deviceToggle }) => (deviceToggle ? monitor : tablet)}
  transition: all 0.4s ease;

  @media only ${device.mobileL} {
    transform: scale(0.7);
  }
`;

//phone : laptop
export const PhoneToLaptop = styled.div<monToggle>`
  ${({ deviceToggle }) => (deviceToggle ? phone : laptop)}
  transition: all 0.4s ease;

  @media only ${device.mobileL} {
    transform: scale(0.7);
  }
`;

const miniLandscape = `
background-image: url(${bgmLandscape});
background-size:100%;
`;

const miniPortrait = `
background-image: url(${bgmPortrait});
background-size:100%;
`;

const monitor = `
color: #000;
position: absolute;
top:5%;
left: 20%;
width: 20vw;
padding: 5.625vw;
border-radius: 5%;
border: solid 4px black;
${miniLandscape}

@media only ${device.mobileL} {
  width: 32vw;
  padding: 8vw;
}

&:before {
  content: '';
  position: absolute;
  top: 100%;
  left: 42%;
  width: 3vw;
  height: 2vw;
  background-color: black;
}

&:after {
  content: '';
  position: absolute;
  top:115%;
  left: 37%;
  width: 5vw;
  height: .7vw;
  background-color: currentColor;
  border-radius: 5px;
}
`;

const tablet = `
color: #000;
position: absolute;
left: 25%;
top: 15%;
width: 3.525vw;
padding: 4.2vw;
border-radius: 0;
border: solid 0.4vw black;
${miniPortrait}
@media only ${device.mobileL} {
  width: 12vw;
  height: 15.5vw;
}


&:before {
  content: '';
  position: absolute;
  transform: translate(-50%,-50%);
  width: 8.9vw;
  height: 11vw;
  border: solid 0.2vw black;
  background-color: ${primaryColor};
  border-radius: 5%;
  z-index: -10;
  @media only ${device.mobileL} {
    transform: translate(-38.65%,-32%);
    width: 12vw;
    height: 17vw;
    background-color: transparent;
  }
}

&:after {
  content: '';
  position: absolute;
  top: 9.25vw;
  transform: translate(-50%,-50%);
  width: 0.1vw;
  height: 0.1vw;
  border: solid 0.2vw currentColor;
  border-radius: 50%;
}`;

const phone = `
color: #000;
position: absolute;
top: 30%;
right: 25%;
width: 3.5vw;
height: 5.8vw;
border-radius: 10%;
border: solid 0.3vw black;
${miniPortrait}

@media only ${device.mobileL} {
  width: 7vw;
  height: 11.6vw;
  border: solid 0.3vw black;
}

&:before {
  content: '';
  position: absolute;
  left: 43%;
  top: 5%;
  width: 0.5vw;
  height: 0.2vw;
  background-color: black;

  @media only ${device.mobileL} {
    border: solid 0.005vw grey;
  }
}

&:after {
  content: '';
  position: absolute;
  bottom: 3%;
  left: 50%;
  height: 0.4vw;
  width: 0.4vw;
  border-radius: 50%;
  background-color: black;

  @media only ${device.mobileL} {
    background-color: grey;
  }
}
`;

const laptop = `
color: #000;
position: absolute;
right:20%;
top: 10%;
width: 13.8vw;
height: 9.2vw;
border-radius: 5%;
border: solid 0.65vw black;
${miniLandscape}

@media only ${device.mobileL} {
  top: 7.5%;
  width: 28vw;
  height: 18.7vw;
}

&:before {
  content: '';
  position: absolute;
  right: -12.5%;
  top: 115%;
  width: 15.5vw;
  height: 0.95vw;
  border-radius: 0 0 50% 50%;
  border: solid 1px black;
  background-color: black;

  @media only ${device.mobileL} {
    width: 31.45vw;
    background-color: black;
  }
}

&:after {
  content: '';
  position: absolute;
  top: 8.1vw;
  left: 11.5vw;
  height: 0.2vw;
  width: 0.2vw;
  border-radius: 50%;
  background-color: red;

  @media only ${device.mobileL} {
    top: 8.1vw;
    left: 11.5vw;
  }
}
`;

import { useState } from "react";
import { Card, CardTitle, CardText, CardHighlight } from "../UI/Card";
import { MonitorToTablet, PhoneToLaptop, DeviceWrapper } from "./WhatStyles";

const Intro = () => {
  const [iconToggle, setTvIconToggle] = useState(true);
  const [phoneIconToggle, setPhoneIcontoggle] = useState(true);

  const iconToggleLoop = () => {
    setTimeout(() => {
      setTvIconToggle(!iconToggle);
      setPhoneIcontoggle(!phoneIconToggle);
    }, 4000);
  };

  iconToggleLoop();

  const content = (
      <Card>
        <CardTitle>What I Do</CardTitle>
        <CardText>
          I help you design graphical interfaces on websites to produce clear
          intuitive experiences with a variety of web technologies that can be
          viewed on <CardHighlight>any device</CardHighlight> to meet both you
          and your clients needs.
        </CardText>
        <DeviceWrapper>
          <MonitorToTablet deviceToggle={iconToggle}></MonitorToTablet>
          <PhoneToLaptop deviceToggle={iconToggle}></PhoneToLaptop>
        </DeviceWrapper>
      </Card>
  );

  return <>{content}</>;
};

export default Intro;

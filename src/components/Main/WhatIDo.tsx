import { useState } from "react";
import {Card, CardTitle, CardText, CardHighlight} from "../UI/Card";
import { MonitorToTablet, PhoneToLaptop } from "./WhatStyles";

const Intro = () => {
  const [iconToggle, setTvIconToggle] = useState(true);
  const [phoneIconToggle, setPhoneIcontoggle] = useState(true);

  const iconToggleLoop = () => {
    setTimeout(() => {
        setTvIconToggle(!iconToggle);
        setPhoneIcontoggle(!phoneIconToggle)
    }, 4000)
  }

  iconToggleLoop();

  const content = (
    <div style={{display: "block"}}>
      <Card>
        <MonitorToTablet deviceToggle={iconToggle}></MonitorToTablet>
        <PhoneToLaptop deviceToggle={iconToggle}></PhoneToLaptop>
        <CardTitle >What I Do</CardTitle>
        <CardText>
        I help you design graphical interfaces on websites to produce clear intuitive experiences with a variety of web technologies that can be viewed on <CardHighlight>any device</CardHighlight> to meet both you and your clients needs. 
        </CardText>
      </Card>
    </div>
  );

  return <>{content}</>;
};

export default Intro;

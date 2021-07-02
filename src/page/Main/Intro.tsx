import { useState } from "react";
import Card from "../../UI/Card";
import "./Intro.scss";

const Intro = () => {
  const [tvIconToggle, setTvIconToggle] = useState(true);
  const [phoneIconToggle, setPhoneIcontoggle] = useState(true);

  const iconToggleLoop = () => {
    setTimeout(() => {
        setTvIconToggle(!tvIconToggle);
        setPhoneIcontoggle(!phoneIconToggle)
    }, 4000)
  }

  iconToggleLoop();

  const leftIconToggle = tvIconToggle ? "left-icon" : "left-icon toggled";
  const rightIconToggle = phoneIconToggle ?  "right-icon" : "right-icon toggled";

  const content = (
    <div style={{display: "block"}}>
      <Card>
        <div className={leftIconToggle} ></div>
        <div className={rightIconToggle}></div>
        <h2 className="card-title">What I Do</h2>
        <p className="card-text">
        I help you design graphical interfaces on websites to produce clear intuitive experiences with a variety of web technologies that can be viewed on <span>any device</span> to meet both you and your clients needs. 
        </p>
      </Card>
    </div>
  );

  return <>{content}</>;
};

export default Intro;

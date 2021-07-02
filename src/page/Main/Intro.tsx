import { useState } from "react";
import Card from "../../UI/Card";
import "./Intro.scss";

const Intro = () => {
  const tvTabletIcon = document.getElementById("iconLeft");
  const [tvIconToggle, setTvIconToggle] = useState(true);


  // const toggleClick = () => {
  //   setTvIconToggle(!tvIconToggle)
  // }
  const iconToggleLoop = () => {
    setTimeout(() => {
        setTvIconToggle(!tvIconToggle);
    }, 2500)
  }

  iconToggleLoop();

  const leftIconToggle = tvIconToggle ? "left-icon" : "left-icon toggled";

  const content = (
    <div style={{display: "block"}}>
      <Card>
        <div id="iconLeft" className={leftIconToggle} ></div>
        <div className="tablet icon"></div>
        <h2 className="card-title">What I Do</h2>
        <p className="card-text">
        "I help you design graphical interfaces on websites to produce clear intuitive experiences with a variety of web technologies that can be viewed on any device to meet both you and your clients needs." 
        </p>
      </Card>
    </div>
  );

  return <>{content}</>;
};

export default Intro;

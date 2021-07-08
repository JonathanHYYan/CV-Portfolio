import {Card, CardTitle, CardText} from "../UI/Card";
import "./TechStack.scss";
import { useState } from "react";
import {Html5, Css3, Javascript, Sass, Typescript, ReactLogo} from "@styled-icons/simple-icons";
import { IconStyle } from "./TechStyles";


const TechStack = () => {
  const htmlStationary = (
    <span>
      ∧_∧
      <br />
      (･_･)っ
      <br />
      (っ /
      <br />
      Lﾉ┘
    </span>
  );

  const htmlMoving = (
    <span>
      = ∧_∧
      <br />
      ⊂(･_･)
      <br />
      = ⊂二)
      <br />
      _ ᴸ \_|
    </span>
  );
  const [heroState, setHeroState] = useState(true);

  const iconToggleLoop = () => {
    setTimeout(() => {
      setHeroState(!heroState);
    }, 500);
  };

  iconToggleLoop();

  const heroRun = heroState;

  return (
      <Card>
        <CardTitle>Tech Stack</CardTitle>
        <CardText>
          I use multiple technologies such as HTML, CSS and JavaScript coupled
          with superscripts like TypeScript and SCSS/SASS. For data management I
          use MongoDB or Firebase.
        </CardText>
        <IconStyle>
          <Html5 title="Html"/>
          <Css3  title="Css"/>
          <Javascript title="Javascript"/>
          <Sass title="Sass"/>
          <Typescript title="Typescript"/>
          <ReactLogo title="React"/>
        </IconStyle>
        <div>{heroRun}</div>
      </Card>
  );
};

export default TechStack;

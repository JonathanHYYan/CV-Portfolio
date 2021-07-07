import {Card, CardTitle} from "../UI/Card";
import { IconContext } from "react-icons";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiSass, SiTypescript } from "react-icons/si";
import "./TechStack.scss";
import { useState } from "react";


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
      = ⊂二/
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

  const heroRun = heroState ? htmlStationary : htmlMoving;

  return (
    <IconContext.Provider value={{ className: "react-logos" }}>
      <Card>
        <CardTitle>Tech Stack</CardTitle>
        
        <p className="card-text">
          I use multiple technologies such as HTML, CSS and JavaScript coupled
          with superscripts like TypeScript and SCSS/SASS. For data management I
          use MongoDB or Firebase.
        </p>
        <div>
          <IoLogoHtml5 className="logo-html" />
          <IoLogoCss3 className="logo-css" />
          <IoLogoJavascript className="logo-js" />
          <SiSass className="logo-scss" />
          <SiTypescript className="logo-ts" />
          <IoLogoReact className="logo-react" />
        </div>
        <div>{heroRun}</div>
      </Card>
    </IconContext.Provider>
  );
};

export default TechStack;

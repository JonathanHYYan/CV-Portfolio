import Card from "../../UI/Card";
import { IconContext } from "react-icons";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiSass, SiTypescript } from "react-icons/si";
import "./TechStack.scss";

const TechStack = () => {
  const htmlStationary = (
    <span>
      ∧_∧
      <br />
      (･_･)っ
      <br />
      (っ /<br />
      _Lﾉ┘
    </span>
  );

  return (
    <IconContext.Provider value={{ className: "react-logos" }}>
      <Card>
        <h2 className="card-title">Tech Stack</h2>
        <div className="tech-hero">{htmlStationary}</div>
        <p className="card-text">
          I use multiple technologies such as HTML, CSS and JavaScript coupled
          with superscripts like TypeScript and SCSS/SASS. For data management I
          use MongoDB or Firebase.
        </p>
        <div>
          <IoLogoHtml5 className="logo-html"/>
          <IoLogoCss3 className="logo-css"/>
          <IoLogoJavascript className="logo-js"/>
          <SiSass className="logo-scss"/>
          <SiTypescript className="logo-ts"/>
          <IoLogoReact className="logo-react"/>
        </div>
      </Card>
    </IconContext.Provider>
  );
};

export default TechStack;

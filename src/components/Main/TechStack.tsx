import { Card, CardTitle, CardText } from "../UI/Card";
import {
  Css,
  Html,
  IconStyle,
  JavaScript,
  React,
  Scss,
  TypeScript,
} from "./TechStyles";
import { useEffect } from "react";
import { useState } from "react";

const TechStack = () => {
  const [initialView, setInitialview] = useState(false);
  
  useEffect(() => {
    const inViewCheck = () => {
      const techStack = document.getElementById("techStack");
      const techStackOffset = techStack!.offsetTop*1.2;
  
      if (window.scrollY > techStackOffset) {
        setInitialview(true);
      }
    }
    window.addEventListener("scroll", inViewCheck);
  });



  const LogoHolder = (
    <>
      <Html title="Html" />
      <Css title="Css" />
      <JavaScript title="Javascript" />
      <Scss title="Sass" />
      <TypeScript title="Typescript" />
      <React title="React" />
    </>
  );

  return (
    <Card >
      <CardTitle>Tech Stack</CardTitle>
      <CardText>
        I use multiple technologies such as HTML, CSS and JavaScript coupled
        with superscripts like TypeScript and SCSS/SASS. 
      </CardText>
      <IconStyle id="techStack">
        {initialView ? LogoHolder: null}
      </IconStyle>
    </Card>
  );
};

export default TechStack;

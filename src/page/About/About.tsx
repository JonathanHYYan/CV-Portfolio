import "./About.scss";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

interface Props {
  scrollPercent: number;
}

const AboutMeTitle = styled.div<Props>`
  transition: transform 0.5s ease-out;
  position: absolute;
  top:5%;
  left:-15%;
  transform: translateX(${({scrollPercent}) => (scrollPercent)}%)
`;

const About = () => {
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  },[])

  const handleScroll = (event:any) => {
    console.log(window.scrollY)
    setScrollAmount(window.scrollY*0.1)
  }

  return (
    <section id="about" className="about">
      <AboutMeTitle scrollPercent={scrollAmount} className="about-title">
        About Me
      </AboutMeTitle>
      <div className="about-me">
        Clean, dynamic Front-end developer creating memorable and smooth user
        experiences
      </div>
    </section>
  );
};

export default About;

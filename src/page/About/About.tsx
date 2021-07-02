import "./About.scss";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

interface Props {
  scrollPercent: number;
}

const AboutMeTitle = styled.div<Props>`
  transform: translateX(${({ scrollPercent }) => -100 + scrollPercent}%);
`;

const About = () => {
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (event: any) => {
    setScrollAmount(window.scrollY * 0.1);
  };

  return (
    <section id="about" className="about">
        <div className="about-image"></div>
        <AboutMeTitle scrollPercent={scrollAmount} className="about-title">
          About Me
        </AboutMeTitle>
        <div className="about-me">
          Front-end developer creating memorable and smooth user experiences
        </div>
    </section>
  );
};

export default About;

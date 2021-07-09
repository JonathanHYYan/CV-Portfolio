import { useState, useEffect, useContext } from "react";
import ScrollContext from "../../store/context";
import { AboutMeTitle, AboutSection, AboutText } from "./AboutStyles";

const About = () => {
  const [scrollAmount, setScrollAmount] = useState(0);
  const scrollCtx = useContext(ScrollContext);
  const landingTransitioned = scrollCtx.landingTransition;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (event: any) => {
    setScrollAmount(window.scrollY * 0.1);
  };

  const aboutContent = (
    <AboutSection id="about">
      <AboutMeTitle scrollPercent={scrollAmount}>About Me</AboutMeTitle>
      <AboutText>
        Front-end developer creating memorable and smooth user experiences
      </AboutText>
    </AboutSection>
  );

  return <>{landingTransitioned && aboutContent}</>;
};

export default About;

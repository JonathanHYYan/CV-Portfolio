import { useEffect, useRef, useState } from "react";
import { TechSection} from "./TechStyles";
import { Eyebrow, Line, Title } from "../UI/themeStyles";
import Tech from "./Tech";
import Maraquee from "../UI/Maraquee";

const TechStack = () => {
  const [visible, setVisble] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting) {
          setVisble(true);
        }
      }, {threshold: 0.9},
    );

    if(sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  },[])

  return (
    <TechSection id="skills" ref={sectionRef}>
      <Eyebrow>SKILLS</Eyebrow>
      <Title>Tech Stack</Title>
      <Line/>
      <Maraquee cards={Tech(visible)} />
    </TechSection>
  );
};

export default TechStack;

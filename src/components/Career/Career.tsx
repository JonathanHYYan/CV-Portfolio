import { useState, useRef, useEffect } from "react";
import { CareerSection, TimelineWrapper } from "./CareerStyles";
import { Eyebrow, Line, Title } from "../UI/themeStyles";
import Timeline from "./Timeline";


const Career = () => {

    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
  
    useEffect(() => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        { threshold: 0.2 },
      );
  
      if (sectionRef.current) obs.observe(sectionRef.current);
      return () => obs.disconnect();
    }, []);

  const content = (
    <CareerSection id="career" ref={sectionRef}>
      <Eyebrow>Career</Eyebrow>
      <Title>Experience</Title>
      <Line/>
      <TimelineWrapper>
        <Timeline $visible={visible}/>
      </TimelineWrapper>
    </CareerSection>
  );

  return <>{content}</>;
};

export default Career;

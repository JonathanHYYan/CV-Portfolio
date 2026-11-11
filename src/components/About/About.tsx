import { useState, useEffect, useRef } from "react";
import AboutMe from "../../assets/general/images/AboutMe.jpg";
import {
  AboutImage,
  AboutImageContainer,
  AboutSection,
  AboutText,
  Header,
  SkillBox,
  SkillCard,
  SkillLabel,
  SkillNum,
  SkillPlus,
  Skills,
  Text,
} from "./AboutStyles";
import { Eyebrow, Accent, Title, Line } from "../UI/themeStyles";

const About = () => {
  const startYear = 2022;
  const yearsWorked = new Date().getFullYear() - startYear;
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

  const aboutContent = (
    <AboutSection id="about" ref={sectionRef}>
      <AboutImage $visible={visible}>
        <Accent />
        <AboutImageContainer>
          <img src={AboutMe} alt="Profile Picture" />
        </AboutImageContainer>
      </AboutImage>
      <AboutText $visible={visible}>
        <Eyebrow>ABOUT ME</Eyebrow>
        <Title>Who I am</Title>
        <Line />
        <Header>Full-Stack Developer Based in Portsmouth</Header>
        <Text>
          Self taught full-stack web developer with several years of
          professional experience and a dozen projects shipped.
          <br />
          <br />
          Always looking for the next challenge and ways to push my skills to
          the limit.
        </Text>
        <Skills>
          <SkillBox>
            <SkillCard>
              <SkillNum>
                {yearsWorked}
                <SkillPlus>+</SkillPlus>
              </SkillNum>
              <SkillLabel>Years industry experience</SkillLabel>
            </SkillCard>
          </SkillBox>
          <SkillBox>
            <SkillCard>
              <SkillNum>
                20<SkillPlus>+</SkillPlus>
              </SkillNum>
              <SkillLabel>Projects shipped</SkillLabel>
            </SkillCard>
          </SkillBox>
          <SkillBox>
            <SkillCard>
              <SkillNum>
                12<SkillPlus>+</SkillPlus>
              </SkillNum>
              <SkillLabel>Technologies</SkillLabel>
            </SkillCard>
          </SkillBox>
        </Skills>
      </AboutText>
    </AboutSection>
  );

  return <>{aboutContent}</>;
};

export default About;

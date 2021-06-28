import { transform } from "typescript";
import "./About.scss";

const About = () => {
  const scrollDown = window.scrollY;
  console.log(scrollDown);
  return (
    <section id="about" className="about">
      <div className="about-title" style={{transform:`translateX(${0 + scrollDown})`}}>
        About Me
      </div>
      <div className="about-me">
        Clean, dynamic Front-end developer creating memorable and smooth user
        experiences
      </div>
    </section>
  );
};

export default About;

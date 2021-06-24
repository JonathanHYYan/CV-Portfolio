import { useContext } from "react";
import ScrollContext from "../../store/context";
import Intro from "./Intro";
import TechStack from "./TechStack";
import Expect from "./Expect";
import Skills from "./Skills";
import './About.scss';

const About = () => {
  const scrollCtx = useContext(ScrollContext);
  const scroll = scrollCtx.scroll;
  const leftContent = (
    <>
      <Intro />
      <TechStack />
      <Expect />
    </>
  );
  const rightContent = <Skills />;

  return (
    <section id="about"className='about'>
      <div className="half-page">{scroll && leftContent}</div>
      <div className="half-page">{scroll && rightContent}</div>
    </section>
  );
};

export default About;

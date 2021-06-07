import { useContext } from "react";
import ScrollContext from "../../store/context";
import Intro from "./Intro";
import TechStack from "./TechStack";
import Expect from "./Expect";

const About = () => {
  const scrollCtx = useContext(ScrollContext);
  const scroll = scrollCtx.scroll;
  const content = (
    <>
      <Intro />
      <TechStack />
      <Expect />
    </>
  );

  return <section>{scroll && content}</section>;
};

export default About;

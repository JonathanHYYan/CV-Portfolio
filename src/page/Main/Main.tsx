import { useContext } from "react";
import ScrollContext from "../../store/context";
import Intro from "./Intro";
import TechStack from "./TechStack";
import Expect from "./Expect";
import Skills from "./Skills";
import './Main.scss';

const Main = () => {
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
    <section id="main"className='main'>
      <div className="half-page">{scroll && leftContent}</div>
      <div className="half-page">{scroll && rightContent}</div>
    </section>
  );
};

export default Main;

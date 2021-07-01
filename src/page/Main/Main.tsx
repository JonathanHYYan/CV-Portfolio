import { useContext } from "react";
import ScrollContext from "../../store/context";
import Intro from "./Intro";
import TechStack from "./TechStack";
import Expect from "./Expect";
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

  return (
    <section id="main"className='main'>
      <div>{scroll && leftContent}</div>
    </section>
  );
};

export default Main;

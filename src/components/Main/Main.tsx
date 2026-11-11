import { useContext } from "react";
import ScrollContext from "../../store/context";
import Career from "../Career/Career";
import TechStack from "../TechStack/TechStack";
import Work from "../Work/Work";
import { MainSection } from "./MainStyles";

window.history.scrollRestoration='manual';

const Main = () => {
  const scrollCtx = useContext(ScrollContext);
  const scroll = scrollCtx.scroll;

  const content = (
    <MainSection id="main">
      <Career />
      <TechStack />
      <Work />
    </MainSection>
  );

  return <>{scroll && content}</>;
};

export default Main;
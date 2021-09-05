import { useContext } from "react";
import ScrollContext from "../../store/context";
import WhatIDo from "./WhatIDo";
import TechStack from "./TechStack";
import Expect from "./Expect";
import { MainSection } from "./MainStyles";

const Main = () => {
  const scrollCtx = useContext(ScrollContext);
  const scroll = scrollCtx.scroll;

  const content = (
    <MainSection id="main">
      <WhatIDo />
      <TechStack />
      <Expect />
    </MainSection>
  );

  return (
    <>
      {scroll && content}
    </>
  );
};

export default Main;

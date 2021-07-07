import { FunctionComponent, useContext } from "react";
import ScrollContext from "../../store/context";
import { Title, LandingSection, Header, HiddenHeader } from "./LandingStyles";


const LandingPage: FunctionComponent = () => {
  const scrollCtx = useContext(ScrollContext);
  const scroll = scrollCtx.scroll;

  return (
    <LandingSection id="landingPage" scroll={scroll} >
      <Header >
        <Title>I'm John</Title>
        <HiddenHeader>a web developer</HiddenHeader>
      </Header>
    </LandingSection>
  );
};
//
export default LandingPage;

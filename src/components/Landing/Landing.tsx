import { FunctionComponent, useContext } from "react";
import ScrollContext from "../../store/context";
import { CircleHolder } from "./CircleAnimation";
import { Title, LandingSection, Header, HiddenHeader } from "./LandingStyles";


const LandingPage: FunctionComponent = () => {
  const scrollCtx = useContext(ScrollContext);
  const scroll = scrollCtx.scroll;

  const circleContent = ['','','','','','','','','','','','','','','',];
  const circleArray = circleContent.map(i => <div className="circle">{i}</div>);

  return (
    <LandingSection id="landingPage" scroll={scroll} >
      <Header >
      <CircleHolder >
        {/* {circleArray} */}
        </CircleHolder>
        <Title>I'm John</Title>
        <HiddenHeader>a web developer</HiddenHeader>
      </Header>
    </LandingSection>
  );
};

export default LandingPage;

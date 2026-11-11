import { FunctionComponent, useContext } from "react";
import ScrollContext from "../../store/context";
import { CircleHolder } from "./CircleAnimation";
import { LandingSection, LandingText, LandingSpinner, Header, HeaderText, Eyebrow, SubHeader, Buttons, Button } from "./LandingStyles";
import { DownloadButton } from "../UI/Button";
import namesvg from "../../assets/general/images/name-secondary.svg";

const LandingPage: FunctionComponent = () => {
  const scrollCtx = useContext(ScrollContext);
  const scroll = scrollCtx.scroll;

  const circleArray = Array.from({length: 15}, (_, i) => (<div key={i} className="circle"/>));

  return (
    <LandingSection id="landingPage" scroll={scroll} >
      <LandingText>
        <Eyebrow>FULLSTACK DEVELOPER</Eyebrow>
        <Header src={namesvg} alt="Jonathan Ho Yin Yan"/>
        <SubHeader>Building fast, accessible web experiences</SubHeader>
        <HeaderText>I design and build websites and applications that work beautifully on any device with modern and legacy tooling.</HeaderText>
        <Buttons>
          <Button $highlight={true} to="projects" spy={true} smooth={true} duration={400}>
            View My Work
            </Button>
          <DownloadButton href="/CV-Portfolio/Jonathan_Yan_CV.pdf" download="Jonathan_Yan_CV.pdf">
              Download CV
          </DownloadButton>
        </Buttons>
      </LandingText>
      <LandingSpinner>
      <CircleHolder >
        {circleArray}
      </CircleHolder>
      </LandingSpinner>
    </LandingSection>
  );
};

export default LandingPage;

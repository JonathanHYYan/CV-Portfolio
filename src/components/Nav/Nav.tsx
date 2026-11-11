import { useEffect, useRef, useState } from "react";
import {
  NavBar,
  NavLink,
  BotNavBar,
  BotNavLink,
  BotDownloadLink,
} from "./NavStyles";
import { DownloadButton } from "../UI/Button";
import { Home2, User, Grid, Download2 } from "@styled-icons/remix-line";

const NavComponent = () => {
  const [navBar, setNavBar] = useState(false);
  const [activeSection, setActiveSection] = useState("landingPage");

  let navHeight = useRef<number>(0);

  useEffect(() => {
    let landing = document.getElementById("landingPage");
    if(landing) navHeight.current = landing.offsetHeight;
    
    const handleScroll = () => {
      if (navHeight && navHeight.current * 0.8 < window.scrollY) {
        setNavBar(true);
      } else if (navHeight && navHeight.current * 0.8 >= window.scrollY) {
        setNavBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar navBackground={navBar}>
        <NavLink to="landingPage" spy={true} smooth={true} duration={400}>
          Home
        </NavLink>
        <NavLink to="about" spy={true} smooth={true} duration={400} offset={-120}>
          About
        </NavLink>
        <NavLink to="career" spy={true} smooth={true} duration={400} offset={-120}>
          Career
        </NavLink>
        <NavLink to="skills" spy={true} smooth={true} duration={400} offset={-120}>
          Skills
        </NavLink>
        <NavLink to="projects" spy={true} smooth={true} duration={400}>
          Projects
        </NavLink>
        <NavLink to="contact" spy={true} smooth={true} duration={400}>
          Contact
        </NavLink>
        <DownloadButton
          $highlight={true}
          $round={true}
          $fill={navBar}
          padding="0.3em 1em"
          href="/CV-Portfolio/Jonathan_Yan_CV.pdf"
          download="Jonathan_Yan_CV.pdf"
        >
          Download CV
        </DownloadButton>
      </NavBar>
      <BotNavBar>
        <BotNavLink
          to="landingPage"
          spy={true}
          smooth={true}
          duration={400}
          onSetActive={() => setActiveSection("landingPage")}
          $active={activeSection === "landingPage"}
        >
          <Home2 />
          Home
        </BotNavLink>
        <BotNavLink
          to="about"
          spy={true}
          smooth={true}
          duration={400}
          onSetActive={() => setActiveSection("about")}
          $active={activeSection === "about"}
        >
          <User />
          About
        </BotNavLink>
        <BotNavLink
          to="projects"
          spy={true}
          smooth={true}
          duration={400}
          onSetActive={() => setActiveSection("projects")}
          $active={activeSection === "projects"}
        >
          <Grid />
          Projects
        </BotNavLink>
        <BotDownloadLink
          href="/CV-Portfolio/Jonathan_Yan_CV.pdf"
          download="Jonathan_Yan_CV.pdf"
        >
          <Download2 />
          CV
        </BotDownloadLink>
      </BotNavBar>
    </>
  );
};

export default NavComponent;

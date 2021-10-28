import {
  Codepen,
  Github,
  LinkedinBox,
  Twitter,
} from "@styled-icons/remix-line";
import { useContext } from "react";
import ScrollContext from "../../store/context";
import { Footer, CopyrightLogo } from "./FooterStyles";

const FootComponent = () => {
  const scrollCtx = useContext(ScrollContext);
  const scroll = scrollCtx.scroll;
  const footerContent = (
    <Footer>
      <div className="socials">
        <p>You can find me socially on these platforms: </p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/jonathan-yan-8806b87b/">
              <LinkedinBox />
            </a>
          </li>
          <li>
            <a href="https://github.com/jyan1234">
              <Github />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/jyanhoyin">
              <Codepen />
            </a>
          </li>
        </ul>
        <h3>
          <CopyrightLogo />
          Jonathan Yan
        </h3>
      </div>
      <div className="info">
        <ul>
          <li>Contact</li>
          <li>About me</li>
          <li>Projects</li>
        </ul>
      </div>
    </Footer>
  );
  return <>{scroll && footerContent}</>;
};

export default FootComponent;

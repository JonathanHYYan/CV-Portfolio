import { Codepen, Github, LinkedinBox } from "@styled-icons/remix-line";
import { useContext } from "react";
import ScrollContext from "../../store/context";
import { Footer, CopyrightLogo, FooterLink } from "./FooterStyles";

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
            <a href="https://github.com/JonathanHYYan">
              <Github />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/jyanhoyin">
              <Codepen />
            </a>
          </li>
        </ul>
        <ul>
          <CopyrightLogo />
          <h3>Jonathan Yan</h3>
        </ul>
      </div>
      <div className="info">
        <ul>
          <FooterLink to="contact-form" spy={true} smooth={true} duration={400}>
            Contact
          </FooterLink>
          <FooterLink to="about" spy={true} smooth={true} duration={400}>
            About me
          </FooterLink>
          <FooterLink to="projects" spy={true} smooth={true} duration={400}>
            Projects
          </FooterLink>
        </ul>
      </div>
    </Footer>
  );
  return <>{scroll && footerContent}</>;
};

export default FootComponent;

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
            <a
              aria-label="linked-in"
              href="https://www.linkedin.com/in/jonathan-yan-8806b87b/"
            >
              <LinkedinBox />
            </a>
          </li>
          <li>
            <a aria-label="github" href="https://github.com/JonathanHYYan">
              <Github />
            </a>
          </li>
          <li>
            <a aria-label="codepen" href="https://codepen.io/jyanhoyin">
              <Codepen />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <CopyrightLogo />
          </li>
          <li>
            <h3>Jonathan Yan</h3>
          </li>
        </ul>
      </div>
      <div className="info">
        <ul>
          <li>
            <FooterLink
              to="contact-form"
              spy={true}
              smooth={true}
              duration={400}
            >
              Contact
            </FooterLink>
          </li>
          <li>
            <FooterLink to="about" spy={true} smooth={true} duration={400}>
              About me
            </FooterLink>
          </li>
          <li>
            <FooterLink to="projects" spy={true} smooth={true} duration={400}>
              Projects
            </FooterLink>
          </li>
        </ul>
      </div>
    </Footer>
  );
  return <>{scroll && footerContent}</>;
};

export default FootComponent;

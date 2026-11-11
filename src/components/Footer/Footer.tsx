import { Codepen, Github, LinkedinBox } from "@styled-icons/remix-line";
import { useContext } from "react";
import ScrollContext from "../../store/context";
import {
  Footer,
  CopyrightLogo,
  FooterLink,
  Contact,
  FooterSection,
  ContactRow,
  FooterBody,
  FootNote,
  Links,
  ExternalLinks,
  CopyRight,
  EmailLink,
  FooterTitle
} from "./FooterStyles";
import { Eyebrow, Highlight, Section, Title } from "../UI/themeStyles";
import { Description } from "../Work/WorkStyles";

const FootComponent = () => {
  const scrollCtx = useContext(ScrollContext);
  const scroll = scrollCtx.scroll;

  const footerContent = (
    <Footer id="contact">
      <Section>
        <Eyebrow>Get in Touch</Eyebrow>
        <FooterSection>
          <FooterBody>
            <FooterTitle>
              Let's build <br/><Highlight>something great.</Highlight>
            </FooterTitle>
            <Description>
              Have a project in mind or just a conversation about what you're
              working on? Drop me a message:
            </Description>
            <EmailLink href="mailto:jonathan.yan10@googlemail.com">
              Send an email →
            </EmailLink>
          </FooterBody>
          <Contact>
            <ContactRow>
              <LinkedinBox />
              <a
                aria-label="linked-in"
                href="https://www.linkedin.com/in/jonathan-yan-8806b87b/"
              >
                linkedin.com/in/jonathan-yan
              </a>
            </ContactRow>
            <ContactRow>
              <Github />
              <a aria-label="github" href="https://github.com/JonathanHYYan">
                github.com/JonathanHYYan
              </a>
            </ContactRow>
            <ContactRow>
              <Codepen />
              <a aria-label="codepen" href="https://codepen.io/jyanhoyin">
                codepen.io/jyanhoyin
              </a>
            </ContactRow>
          </Contact>
        </FooterSection>
      </Section>
      <FootNote>
        <CopyRight>
          <CopyrightLogo /> 2026 Jonathan Yan
        </CopyRight>
        <Links>
          <FooterLink to="landingPage" spy={true} smooth={true} duration={400}>
            Home
          </FooterLink>
          <FooterLink to="contact" spy={true} smooth={true} duration={400}>
            Contact
          </FooterLink>
          <FooterLink to="about" spy={true} smooth={true} duration={400}>
            About me
          </FooterLink>
          <FooterLink to="projects" spy={true} smooth={true} duration={400}>
            Projects
          </FooterLink>
        </Links>
        <ExternalLinks>
          <a
            aria-label="linked-in"
            href="https://www.linkedin.com/in/jonathan-yan-8806b87b/"
          >
            <LinkedinBox />
          </a>
          <a aria-label="github" href="https://github.com/JonathanHYYan">
            <Github />
          </a>
          <a aria-label="codepen" href="https://codepen.io/jyanhoyin">
            <Codepen />
          </a>
        </ExternalLinks>
      </FootNote>
    </Footer>
  );
  return <>{scroll && footerContent}</>;
};

export default FootComponent;

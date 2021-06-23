import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMdCopy,
} from "react-icons/io";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaCodepen } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socials">
        <ul>
          <li>
            <p>You can find me socially on these platforms: </p>
          </li>
          <li>
            <AiOutlineFacebook size="1.5rem" />
          </li>
          <li>
            <IoLogoInstagram size="1.5rem" />
          </li>
          <li>
            <IoLogoTwitter size="1.5rem" />
          </li>
          <li>
            <IoLogoLinkedin size="1.5rem" />
          </li>
          <li>
            <IoLogoGithub size="1.5rem" />
          </li>
          <li>
            <FaCodepen size="1.5rem" />
          </li>
        </ul>
        <h3><IoMdCopy/> Jonathan Yan</h3>
      </div>
      <div className="info">
        <ul>
          <li>Contact</li>
          <li>About Me</li>
          <li>Projects</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import "./NavBar.scss";
import { Link as Scrollto} from "react-scroll";

const NavBar = () => {
  return (
    <nav className="nav">
      <Scrollto
        to="landingPage"
        spy={true}
        smooth={true}
        duration={400}
        className="links"
        activeClass="active-links"
      >
        Home
      </Scrollto>
      <Scrollto
        to="about"
        spy={true}
        smooth={true}
        duration={400}
        className="links"
        activeClass="active-links"
      >
        About
      </Scrollto>
      {/* <li>
        Work
      </li> */}
      <Scrollto
        to="contact-form"
        spy={true}
        smooth={true}
        duration={400}
        className="links"
        activeClass="active-links"
      >
        Contact
      </Scrollto>
    </nav>
  );
};

export default NavBar;

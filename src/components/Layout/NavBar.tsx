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
        activeClass="links-active"
      >
        Home
      </Scrollto>
      <Scrollto
        to="main"
        spy={true}
        smooth={true}
        duration={400}
        className="links"
        activeClass="links-active"
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
        activeClass="links-active"
      >
        Contact
      </Scrollto>
    </nav>
  );
};

export default NavBar;

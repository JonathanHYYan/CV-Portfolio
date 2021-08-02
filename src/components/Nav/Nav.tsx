import { NavBar, NavLink } from "./NavComponents";
import { useContext} from "react";
import ScrollContext from "../../store/context";

const NavComponent = (props: any) => {

  const {form, setForm} = useContext(ScrollContext);

  const formToggle = () => {
    console.log("activated");
    setForm(true);
  }
  
  return (
    <NavBar>
      <NavLink
        to="landingPage"
        spy={true}
        smooth={true}
        duration={400}
      >
        Home
      </NavLink>
      <NavLink
        to="main"
        spy={true}
        smooth={true}
        duration={400}
      >
        About
      </NavLink>
      {/* <li>
        Work
      </li> */}
      <NavLink
        to="contact-form"
        spy={true}
        smooth={true}
        duration={400}
        onSetActive={formToggle}
      >
        Contact
      </NavLink>
    </NavBar>
  );
};

export default NavComponent;

import { NavBar, NavLink } from "./NavComponents";

const NavComponent = (props: any) => {
 
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
      >
        Contact
      </NavLink>
    </NavBar>
  );
};

export default NavComponent;

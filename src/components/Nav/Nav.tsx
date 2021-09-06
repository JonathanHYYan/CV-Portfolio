import { useEffect, useState } from "react";
import { NavBar, NavLink } from "./NavComponents";


const NavComponent = (props: any) => {
  const [navBar, setNavBar] = useState(false)

  let navHeight = document.getElementById("landingPage")?.offsetHeight;

  useEffect(()=>{
    window.addEventListener("wheel", (e) => {
      if(navHeight && navHeight*0.8 < window.scrollY  ) {
        setNavBar(true);
      }else if(navHeight && navHeight*0.8 >= window.scrollY  ) {
        setNavBar(false);
      };
    });
  });


  return (
    <NavBar navBackground={navBar}>
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

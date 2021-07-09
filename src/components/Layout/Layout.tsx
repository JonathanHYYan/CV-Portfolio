import NavBar from "../Nav/Nav";
import { useState, useEffect } from "react";
import ScrollContext from "../../store/context";
import { Main } from "./LayoutStyles";

const Layout = (props: any) => {
  const [scroll, setScroll] = useState(false);
  const [landingTransition, setLandingTransition] = useState(false);
  
  if(!scroll) {
    document.body.style.overflow = "hidden";
  } else {
    setTimeout(function() {
      document.body.style.overflow = "visible";
      setLandingTransition(true);
    }, 1500)
  }

  useEffect(() => {
    setScroll(false)
    window.addEventListener("wheel", (e) => {
      if (e.deltaY) {
        setScroll(true);
      }
    });
    setTimeout(function() {
      if(!scroll){
        setScroll(true);
      }
    },2000)
    
  }, []);

  
  return (
    <ScrollContext.Provider value={{ scroll: scroll, landingTransition:landingTransition }}>
      <Main>
        {scroll && <NavBar />}
        {props.children}
      </Main>
    </ScrollContext.Provider>
  );
};

export default Layout;

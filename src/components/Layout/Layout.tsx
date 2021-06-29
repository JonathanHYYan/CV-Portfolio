import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import ScrollContext from "../../store/context";

const Layout = (props: any) => {
  const [scroll, setScroll] = useState(false);
  if(!scroll) {
    document.body.style.overflow = "hidden";
  } else {
    setTimeout(function() {
      document.body.style.overflow = "visible";
    }, 1500)
  }

  useEffect(() => {
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
    <ScrollContext.Provider value={{ scroll: scroll }}>
      <main>
        {scroll && <NavBar />}
        {props.children}
      </main>
    </ScrollContext.Provider>
  );
};

export default Layout;

import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import ScrollContext from "../../store/context";

const Layout = (props: any) => {
  const [scroll, setScroll] = useState(false);
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
  if(!scroll) {
    window.onscroll = function(){
    window.scrollTo(scrollLeft, scrollTop)};
  }

  useEffect(() => {
    window.addEventListener("wheel", (e) => {
     if(e.deltaY){
      setScroll(true)
      setTimeout(function() {
        window.onscroll = function() {};
      }, 2500)
      
    }
    });
    setTimeout(function () {
      if (!scroll) {
        setScroll(true);
        window.onscroll = function() {};
      }
    }, 3000);
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

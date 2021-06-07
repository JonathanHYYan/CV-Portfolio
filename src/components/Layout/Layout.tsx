import NavBar from "./NavBar";
import {useState, useEffect} from 'react';
import ScrollContext from "../../store/context";

const Layout = (props: any) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1);
    });
    setTimeout(function() {
      if(!scroll){
        setScroll(true);
      }
    },3000)
  }, []);

  return (
    <ScrollContext.Provider value={{scroll:scroll}}>
      <main>
        <NavBar />
        {props.children}
      </main>
    </ScrollContext.Provider>
  );
};

export default Layout;

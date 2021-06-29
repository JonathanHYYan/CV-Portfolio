import NavBar from "./NavBar";
import ScrollContext from "../../store/context";
import { useContext } from "react";

const Layout = (props: any) => {
  const ScrollCtx = useContext{ScrollContext};
  const scroll = ScrollCtx.scroll;

  if(!scroll) {
    document.body.style.overflow = "hidden";
  } else {
    setTimeout(function() {
      document.body.style.overflow = "visible";
    }, 1500)
  }

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

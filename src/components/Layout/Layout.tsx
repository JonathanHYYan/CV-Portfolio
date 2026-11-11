import NavBar from "../Nav/Nav";
import React, { useState, useEffect } from "react";
import ScrollContext from "../../store/context";
import { Main } from "./LayoutStyles"

interface Props {
  children: React.ReactNode;
}

const Layout = ({children}: Props) => {
  const [scroll, setScroll] = useState(false);
  const [landingTransition, setLandingTransition] = useState(false);
  const [form, setForm] = useState(false);
  const value = { scroll, landingTransition, form, setForm };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY) {
        setScroll(true);
      }
    };

    window.addEventListener("wheel", handleWheel);

    const timeoutID = setTimeout(function () {
        setScroll(true);
    }, 2000);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(timeoutID);
    };
  }, [scroll]);

  useEffect(() => {
    if (!scroll) {
      document.body.style.overflow = "hidden";
    } else {
      const timeoutID = setTimeout(function () {
        document.body.style.overflow = "visible";
        setLandingTransition(true);
      }, 1500);

      return () => clearTimeout(timeoutID);
    }
  }, [scroll]);

  return (
    <ScrollContext.Provider value={value}>
      <Main>
        {scroll && <NavBar />}
        {children}
      </Main>
    </ScrollContext.Provider>
  );
};

export default Layout;

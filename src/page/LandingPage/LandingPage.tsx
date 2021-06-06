import { FunctionComponent, useEffect, useState } from "react";
import "./LandingPage.scss";

const LandingPage: FunctionComponent = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1);
    });
  }, []);

  let classes = "landing " + (scroll ? "night" : "");

  return (
    <section className={classes}>
      <div className="name">
        <h1>I'm John</h1>
        <h2>a web developer</h2>
      </div>
    </section>
  );
};
//
export default LandingPage;

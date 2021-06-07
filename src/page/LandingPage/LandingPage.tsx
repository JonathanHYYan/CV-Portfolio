import { FunctionComponent, useContext } from "react";
import ScrollContext from "../../store/context";
import "./LandingPage.scss";

const LandingPage: FunctionComponent = () => {
  const scrollCtx = useContext(ScrollContext);
  const classes = "landing " + (scrollCtx.scroll ? "night" : "");

  return (
    <section className={classes}>
      <div className="name">
        <h1>I'm John</h1>
        <h2 className={"hidden-header"}>a web developer</h2>
      </div>
    </section>
  );
};
//
export default LandingPage;

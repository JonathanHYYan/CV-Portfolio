import { useContext } from "react";
import ScrollContext from "../../store/context";
import { Card } from "../UI/Card";
import { CircleHolder } from "./FormStyles";

const Form = () => {
  const scrollCtx = useContext(ScrollContext);
  const scroll = scrollCtx.scroll;

  const formContent = (
    <form>
      <h2>Form</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius hic
      exercitationem ipsam distinctio, asperiores animi atque libero culpa
      similique, reiciendis delectus voluptate nihil voluptatem quisquam error,
      consequuntur velit qui.
    </form>
  );

  const formCircle = (
    <CircleHolder>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </CircleHolder>
  )

  return (
    <>
      {scroll && (
        <section id="contact-form">
          <Card>{formCircle}</Card>
        </section>
      )}
    </>
  );
};

export default Form;

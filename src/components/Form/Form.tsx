import { useContext, useState } from "react";
import ScrollContext from "../../store/context";
import { Card, CardTitle } from "../UI/Card";
import { CircleHolder } from "./FormStyles";

const Form = () => {
  const scrollCtx = useContext(ScrollContext);
  const scroll = scrollCtx.scroll;
  const [clicked, setClicked] = useState(false)

  const formContent = (
    <form>
      <h2>Form</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius hic
      exercitationem ipsam distinctio, asperiores animi atque libero culpa
      similique, reiciendis delectus voluptate nihil voluptatem quisquam error,
      consequuntur velit qui.
    </form>
  );

  const clickHandler = () => {
    setClicked(true)
  }

  const formCircle = (
    <CircleHolder onClick={clickHandler}>
      <div className="circle">Interested?</div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </CircleHolder>
  )

  const form = (
    <>
      <CardTitle>Contact Me!</CardTitle>
    </>
  )

  return (
    <>
      {scroll && (
        <section id="contact-form">
          <Card>{clicked ? form : formCircle}</Card>
        </section>
      )}
    </>
  );
};

export default Form;




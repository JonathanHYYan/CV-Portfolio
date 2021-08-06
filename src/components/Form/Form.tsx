import { useContext } from "react";
import ScrollContext from "../../store/context";
import { Card, CardTitle } from "../UI/Card";
import { CircleHolder } from "./FormButtonStyles";
import {
  DataInput,
  ContactForm,
  MessageInput,
  Button,
  FormControls,
} from "./FormStyles";

const Form = () => {
  const scrollCtx = useContext(ScrollContext);
  const scroll = scrollCtx.scroll;
  const { form, setForm } = useContext(ScrollContext);

  const formToggle = () => {
    setForm(!form);
  };

  const formCircle = (
    <>
      <CardTitle>Get in Touch?</CardTitle>
      <CircleHolder onClick={formToggle}>
        <div className="circle">Contact Me!</div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </CircleHolder>
    </>
  );

  const formComponent = (
    <>
      <CardTitle>Contact Form</CardTitle>
      <ContactForm className="form-control">
        <DataInput type="text" value="Name" />
        <DataInput type="text" value="Email" />
        <MessageInput name="message" rows={5} />
        <FormControls>
          <Button>Cancel</Button>
          <Button type="submit">Send</Button>
        </FormControls>
      </ContactForm>
    </>
  );

  return (
    <>
      {scroll && (
        <section id="contact-form">
          <Card>{form ? formComponent : formCircle}</Card>
        </section>
      )}
    </>
  );
};

export default Form;

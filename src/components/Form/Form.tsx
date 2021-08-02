import { useContext, useState } from "react";
import ScrollContext from "../../store/context";
import { Card, CardTitle } from "../UI/Card";
import { CircleHolder } from "./FormButtonStyles";
import { DataInput, ContactForm, MessageInput, Button } from "./FormStyles";

const Form = () => {
  const scrollCtx = useContext(ScrollContext);
  const scroll = scrollCtx.scroll;
  const {form, setForm} = useContext(ScrollContext)

  const formToggle = () => {
    setForm(!form);
  }

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
  )

  const formComponent = (
    <>
      <CardTitle>Contact Form</CardTitle>
      <ContactForm className="form-control">
        <div>
          <div className="name">
            <DataInput type="text" value="Name"/>
          </div>
          <div className="email">
            <DataInput  type="text" value="Email"/>
          </div>
          <div className="message">
          <MessageInput type="text" value="Message"/>
          </div>
          <Button>Cancel</Button>
          <Button type="submit">Send</Button> 
        </div>
      </ContactForm>
    </>
  )

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




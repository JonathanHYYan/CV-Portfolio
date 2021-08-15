import { Card, CardTitle } from "../UI/Card";
import { useState } from "react";
import FormInput from "./FormInput";
import FormMessage from "./FormMessage";
import { ContactForm, Button, FormControls } from "./FormStyles";

const formState = {
  name: "",
  email: "",
  message: "",
};

const Form = () => {
  const [formData, setFormData] = useState<object>(formState);

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>,):void => {
    setFormData((prevState) => ({ ...prevState, name: event.target.value }));
  };

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({ ...prevState, email: event.target.value }));
  };

  const messageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({ ...prevState, message: event.target.value }));
  };

  const submitHandler = (event: any) => {
    console.log(formData)
    event.preventDefault();
  };

  const formComponent = (
    <>
      <CardTitle>Contact Form</CardTitle>
      <ContactForm className="form-control" onSubmit={submitHandler}>
        <FormInput labelName="Name" min={1} onChange={nameChangeHandler} />
        <FormInput labelName="Email" min={1} onChange={emailChangeHandler} />
        <FormMessage
          labelName="Message"
          rows={5}
          onChange={messageChangeHandler}
        />
        <FormControls>
          <Button>Cancel</Button>
          <Button type="submit">Send</Button>
        </FormControls>
      </ContactForm>
    </>
  );

  return (
    <>
      <section id="contact-form">
        <Card>{formComponent}</Card>
      </section>
    </>
  );
};

export default Form;

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
  const [formData, setFormData] = useState(formState);

  const nameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.value.trim().length === 0) {
      console.log(formData.name);
    }
    setFormData((prevState) => ({ ...prevState, name: event.target.value }));
  };

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({ ...prevState, email: event.target.value }));
  };

  const messageChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => ({ ...prevState, message: event.target.value }));
  };

  const submitHandler = (event: any) => {
    console.log(formData);
    event.preventDefault();
  };

  const formComponent = (
    <>
      <CardTitle>Contact Form</CardTitle>
      <ContactForm className="form-control" onSubmit={submitHandler}>
        <FormInput
          id="name"
          labelName="Name"
          min={1}
          inputValue={formData.name}
          inputChange={nameChangeHandler}
        />
        <FormInput
          id="email"
          labelName="Email"
          min={1}
          inputValue={formData.email}
          inputChange={emailChangeHandler}
        />
        <FormMessage
          id="message"
          labelName="Message"
          rows={5}
          messageValue={formData.message}
          messageChange={messageChangeHandler}
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

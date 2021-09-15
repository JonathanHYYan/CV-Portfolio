import { Card, CardTitle } from "../UI/Card";
import { useState } from "react";
import FormInput from "./FormInput";
import FormMessage from "./FormMessage";
import { ContactForm, Button, FormControls, FormError } from "./FormStyles";
import { useContext } from "react";
import ScrollContext from "../../store/context";

const formState: { name: string; email: string; message: string } = {
  name: "",
  email: "",
  message: "",
};

const touchState: { name: boolean; email: boolean; message: boolean } = {
  name: false,
  email: false,
  message: false,
};

const Form = () => {
  const scrollCtx = useContext(ScrollContext);
  const scroll = scrollCtx.scroll;
  const [formData, setFormData] = useState(formState);
  const [isValid, setIsValid] = useState(false);
  const [used, setUsed] = useState(touchState);
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const nameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
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

  const submitHandler = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    setUsed((prevState) => ({
      ...prevState,
      name: true,
      email: true,
      message: true,
    }));

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      setIsValid(false);
      return;
    }

    setIsValid(true);

    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    })

    if(response.status === 200) {
      console.log("Message Sent");
      setFormSubmitted(true);
    } else {
      console.log("Message failed to send")
    }
  };

  const nameBlurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsed((usedState) => ({ ...usedState, name: true }));

    if (formData.name.trim() === "") {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  };

  const emailBlurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsed((prevState) => ({ ...prevState, email: true }));

    if (formData.email.trim() === "") {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  };

  const messageBlurHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setUsed((prevState) => ({ ...prevState, message: true }));

    if (formData.message.trim() === "") {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  };

  const nameCheck = !isValid && used.name;
  const emailCheck = !isValid && used.email;
  const messageCheck = !isValid && used.message;

  const inputInvalid = used.name && used.email && used.message && !isValid;

  const submitButton = <Button type="submit">Send</Button>;

  const loadButton = (
    <Button disabled type="submit">
      Sending...
    </Button>
  );

  const formComponent = (
    <>
      <CardTitle>Contact Form</CardTitle>
      <ContactForm onSubmit={submitHandler}>
        <FormInput
          id="name"
          errorClass={nameCheck}
          labelName="Name"
          min={1}
          inputValue={formData.name}
          inputChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        <FormInput
          id="email"
          errorClass={emailCheck}
          labelName="Email"
          min={1}
          inputValue={formData.email}
          inputChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        <FormMessage
          id="message"
          errorClass={messageCheck}
          labelName="Message"
          rows={5}
          messageValue={formData.message}
          messageChange={messageChangeHandler}
          onBlur={messageBlurHandler}
        />
        {inputInvalid && <FormError>Please fill in all sections</FormError>}
        <FormControls>{isLoading ? loadButton : submitButton}</FormControls>
      </ContactForm>
    </>
  );

  const submitConfirmation = <CardTitle>Message Sent!</CardTitle>;

  return (
    <>
      {scroll && <section id="contact-form">
        <Card>{!formSubmitted ? formComponent : submitConfirmation}</Card>
      </section>}
    </>
  );
};

export default Form;

import { Card, CardTitle } from "../UI/Card";
import { useState } from "react";
import FormInput from "./FormInput";
import FormMessage from "./FormMessage";
import { ContactForm, Button, FormControls, FormError } from "./FormStyles";
import { useEffect } from "react";

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
  const [formData, setFormData] = useState(formState);
  const [isValid, setIsValid] = useState(false);
  const [used, setUsed] = useState(touchState);

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

  useEffect(() => {
    // if (isValid) {
    //   console.log(formData);
    // }
  });

  const regexText = /ab+z/;

 

  const submitHandler = (event: any) => {
    event.preventDefault();
    setUsed((prevState => ({...prevState, name:true, email:true, message:true})))

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    console.log(formData);
  };

  const nameBlurHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
    setUsed((usedState) => ({ ...usedState, name: true }));

    if (formData.name.trim() === "") {
      setIsValid(false);
      return;
    }
    setIsValid(true);

    console.log(touchState);
  };

  const emailBlurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsed((prevState) => ({ ...prevState, email: true }));

    if (formData.email.trim() === "") {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  };

  const messageBlurHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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

  console.log(isValid)
  console.log(used.name)

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

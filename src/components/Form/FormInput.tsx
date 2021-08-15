import { useState } from "react";
import { DataInput } from "./FormStyles";

interface Props {
  labelName: string;
  min: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>)=>void;
};

const formState = {
  name: "",
  email: "",
  message: "",
};

const FormInput: React.FC<Props> = (props) => {
  const [formData, setFormData] = useState

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({ ...prevState, name: event.target.value }));
  };


  return(
    <DataInput placeholder={props.labelName} minLength={props.min} onChange={nameChangeHandler}/>
  )
};

export default FormInput
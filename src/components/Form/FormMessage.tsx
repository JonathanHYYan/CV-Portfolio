import React from "react";
import { MessageInput } from "./FormStyles";

interface Props {
  labelName: string;
  rows: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>)=>void;
};

const FormMessage: React.FC<Props> = (props) => {
  return(
    <MessageInput placeholder={props.labelName} rows={props.rows} />
  )
};

export default FormMessage;
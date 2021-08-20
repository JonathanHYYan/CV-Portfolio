import React from "react";
import { MessageInput } from "./FormStyles";

interface Props {
  id: string;
  labelName: string;
  errorClass: boolean;
  rows: number;
  messageValue: string;
  messageChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormMessage: React.FC<Props> = (props) => {
  return (
    <MessageInput
      hasError={props.errorClass}
      id={props.id}
      placeholder={props.labelName}
      rows={props.rows}
      value={props.messageValue}
      onChange={props.messageChange}
      onBlur={props.onBlur}
    />
  );
};

export default FormMessage;

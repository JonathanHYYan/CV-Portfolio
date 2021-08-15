import React from "react";
import { MessageInput } from "./FormStyles";

interface Props {
  id: string;
  labelName: string;
  rows: number;
  messageValue: string;
  messageChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormMessage: React.FC<Props> = (props) => {
  return (
    <MessageInput
      id={props.id}
      placeholder={props.labelName}
      rows={props.rows}
      value={props.messageValue}
      onChange={props.messageChange}
    />
  );
};

export default FormMessage;

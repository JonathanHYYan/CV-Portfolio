import { DataInput } from "./FormStyles";

interface Props {
  id: string;
  labelName: string;
  min: number;
  inputValue: string;
  inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<Props> = (props) => {
  return (
    <DataInput
      id={props.id}
      placeholder={props.labelName}
      minLength={props.min}
      value={props.inputValue}
      onChange={props.inputChange}
    />
  );
};

export default FormInput;

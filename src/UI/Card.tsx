import { FunctionComponent } from "react";
import "./Card.scss";

const Card: FunctionComponent = (props: any) => {
  return <div className="card">{props.children}</div>;
};

export default Card;

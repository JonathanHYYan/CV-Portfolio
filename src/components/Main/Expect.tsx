import TicTacToe from "../Projects/React Tic Tac Toe/TicTacToe";
import {Card, CardText, CardTitle} from "../UI/Card";
import Carousel from "../UI/Carousel";

const Intro = () => {
  
  const content = (
    <div>
      <Card>
        <CardTitle className="card-title">What to Expect?</CardTitle>
        <CardText className="card-text">
          Let's talk about the aesthetics and features that best represent you and your goals. 
        </CardText>

      </Card>
    </div>
  );

  return <>{content}</>;
};

export default Intro;

import Card from "../../UI/Card";

const Intro = () => {
  
  const content = (
    <div>
      <Card>
        <h2 className="card-title">What to Expect?</h2>
        <p className="card-text">
          Imagine, design and create. Let's talk about the aesthetics and features that best represent you and your goals. 
        </p>
      </Card>
    </div>
  );

  return <>{content}</>;
};

export default Intro;

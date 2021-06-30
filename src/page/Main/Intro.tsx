import Card from "../../UI/Card";

const Intro = () => {
  const content = (
    <div>
      <Card>
        <h2 className="card-title">What I Do</h2>
        <p className="card-text">
        "I help you design graphical interfaces on websites to produce clear intuitive experiences with a variety of web technologies that can be viewed on any device to meet both you and your clients needs." 
        </p>
      </Card>
    </div>
  );

  return <>{content}</>;
};

export default Intro;

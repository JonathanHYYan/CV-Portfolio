import Card from "../../UI/Card";

const TechStack = () => {
  const content = (
    <div>
      <Card>
        <h2 className="card-title">Tech Stack</h2>
        <p className="card-text">
          I use multiple technologies such as HTML, CSS and JavaScript coupled with superscripts like TypeScript and SCSS/SASS. For data management I use MongoDB or Firebase. 
        </p>
      </Card>
    </div>
  );

  return <>{content}</>;
};

export default TechStack;

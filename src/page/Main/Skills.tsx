import { useEffect, useState } from "react";
import "./Skills.scss";
import { DummyData } from "./DummyData";

const skillData = DummyData;
const renderOrder = skillData.reverse();

const Skills = () => {
  const initialScrollPoints = new Array(skillData.length).fill(false);
  const [scrollPoints, setScrollPoints] = useState(initialScrollPoints);

  useEffect(() => {
    const skillSection = document.getElementById("skills");
    const sectionTop = skillSection ? skillSection.offsetTop * 1.3 : null;
    const sectionHeight = skillSection ? skillSection.clientHeight : null;
    const scrollBreakPoint = sectionHeight
      ? sectionHeight / skillData.length
      : null;
    const scrollStartModifyer = 0.6 * sectionTop!;
    const scrollAmountModifyer = 0.8 * scrollBreakPoint!;

    window.addEventListener("scroll", () => {
      const updatedScrollPoints = scrollPoints.map((scrollPoint, index) => {
        if (
          window.scrollY >
          scrollStartModifyer + scrollAmountModifyer * (index + 1)
        ) {
          return !scrollPoint;
        }
        return scrollPoint;
      });
      setScrollPoints(updatedScrollPoints);
    });
  }, []);

  const conditionHolder: string[] = [];

  scrollPoints.forEach((breakPoint) => {
    conditionHolder.push(breakPoint ? "slide-out" : "");
  });

  const triggerPoint = conditionHolder.reverse();

  const skillList = renderOrder.map((skill, index) => (
    <div
      className="skills-icon"
      style={{
        transition: "all 2.5s ease",
        color: `${skillData[index].textColor}`,
        backgroundColor:`${skillData[index].color}`,
        transform: triggerPoint[index] ? `translate(${-60+index*10}%, -1000%)` : `translate(${-60+index*10}%, ${-45-index*10}%)`
      }}
      id={`skill${index + 1}`}
    >
      {skill.name}
    </div>
  ));

  return (
    <div className="skills" id="skills">
      <div className="image-container" id="imageContainer">
        {skillList}
      </div>
    </div>
  );
};

export default Skills;

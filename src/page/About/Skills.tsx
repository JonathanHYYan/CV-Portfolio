import { useEffect, useState } from "react";
import "./Skills.scss";
import { DummyData } from "./DummyData";

const skillData = DummyData;

const Skills = () => {
  const initialScrollPoints = new Array(skillData.length).fill(false);
  const [scrollPoints, setScrollPoints] = useState(initialScrollPoints);

  useEffect(() => {
    const skillSection = document.getElementById("skills");
    const sectionTop = skillSection ? skillSection.offsetTop : null;
    const sectionHeight = skillSection ? skillSection.clientHeight : null;
    const scrollBreakPoint = sectionHeight
      ? sectionHeight / skillData.length
      : null;
    const scrollStartModifyer = 0.6 * sectionTop!;
    const scrollAmountModifyer = 0.8 * scrollBreakPoint!;

    window.addEventListener("scroll", () => {
      const updatedScrollPoints = scrollPoints.map((scrollPoint, index) => {
        console.log(
          index,
          window.scrollY,
          scrollStartModifyer + scrollAmountModifyer * (index + 1)
        );
        if (
          window.scrollY >
          scrollStartModifyer + scrollAmountModifyer * (index + 1)
        ) {
          return !scrollPoint;
        }
        return scrollPoint;
      });
      console.log(updatedScrollPoints);
      setScrollPoints(updatedScrollPoints);
    });
  }, []);

  const conditionHolder: string[] = [];

  scrollPoints.forEach((breakPoint) => {
    conditionHolder.push(breakPoint ? "slide-out" : "");
  });

  const skillList = skillData.map((skill, index) => (
    <div
      className={`skill-card skill-card-${index + 1} ${
        scrollPoints[index] ? "slide-out" : ""
      }`}
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

import { useState, useEffect } from "react";
import "./Skills.scss";

const DummyData = [
  {
    id: "s6",
    name: "Typescript",
    num: 6,
  },
  {
    id: "s5",
    name: "React",
    num: 5,
  },
  {
    id: "s4",
    name: "JavaScript",
    num: 4,
  },
  {
    id: "s3",
    name: "SCSS",
    num: 3,
  },
  {
    id: "s2",
    name: "CSS",
    num: 2,
  },
  {
    id: "s1",
    name: "HTML",
    num: 1,
  },
];

const Skills = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const skillSection = document.getElementById("skills");
    const sectionTop = skillSection?.offsetTop;
    const sectionHeight = skillSection?.clientHeight;
    const scrollBreakPoint = sectionHeight! / DummyData.length;

    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > sectionTop! + scrollBreakPoint);
    });
  }, []);

  const scrollCondition = scroll ? "slide-out" : "";
  const skillList = DummyData.map((skill) => (
    <div
      className={`skill-card skill-card-${skill.num} ` + scrollCondition}
      id={`skill${skill.num}`}
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

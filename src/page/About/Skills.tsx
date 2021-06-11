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
  const [scroll1, setScroll1] = useState(false);
  const [scroll2, setScroll2] = useState(false);
  const [scroll3, setScroll3] = useState(false);
  const [scroll4, setScroll4] = useState(false);
  const [scroll5, setScroll5] = useState(false);
  const [scroll6, setScroll6] = useState(false);

  useEffect(() => {
    const skillSection = document.getElementById("skills");
    const sectionTop = skillSection?.offsetTop;
    const sectionHeight = skillSection?.clientHeight;
    const scrollBreakPoint = sectionHeight! / DummyData.length;
    const scrollStartModifyer = 0.6;
    const scrollAmountModifyer = 0.9;

    window.addEventListener("scroll", () => {
      setScroll1(
        window.scrollY > scrollStartModifyer*sectionTop! + scrollAmountModifyer*(scrollBreakPoint * DummyData[0].num)
      );
      setScroll2(
        window.scrollY > scrollStartModifyer*sectionTop! + scrollAmountModifyer*(scrollBreakPoint * DummyData[1].num)
      );
      setScroll3(
        window.scrollY > scrollStartModifyer*sectionTop! + scrollAmountModifyer*(scrollBreakPoint * DummyData[2].num)
      );
      setScroll4(
        window.scrollY > scrollStartModifyer*sectionTop! + scrollAmountModifyer*(scrollBreakPoint * DummyData[3].num)
      );
      setScroll5(
        window.scrollY > scrollStartModifyer*sectionTop! + scrollAmountModifyer*(scrollBreakPoint * DummyData[4].num)
      );
      setScroll6(
        window.scrollY > scrollStartModifyer*sectionTop! + scrollAmountModifyer*(scrollBreakPoint * DummyData[5].num)
      );
    });
  }, []);

  const scrollCondition1 = scroll1 ? "slide-out" : "";
  const scrollCondition2 = scroll2 ? "slide-out" : "";
  const scrollCondition3 = scroll3 ? "slide-out" : "";
  const scrollCondition4 = scroll4 ? "slide-out" : "";
  const scrollCondition5 = scroll5 ? "slide-out" : "";
  const scrollCondition6 = scroll6 ? "slide-out" : "";

  const conditionHolder=[scrollCondition1,scrollCondition2,scrollCondition3,scrollCondition4,scrollCondition5,scrollCondition6]

  const skillList = DummyData.map((skill,index) => (
    <div
      className={`skill-card skill-card-${skill.num} ` + conditionHolder[index]}
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

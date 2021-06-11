import { useEffect, useReducer } from "react";
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

const defaultScrollState = {
  scroll1: false,
  scroll2: false,
  scroll3: false,
  scroll4: false,
  scroll5: false,
  scroll6: false,
};

const scrollReducer = (state: any, action: any) => {
  if (action.type === "1") {
    const updatedScroll1 = !state.scroll1;
    return { ...state, scroll1: updatedScroll1 };
  }
  if (action.type === "2") {
    const updatedScroll2 = !state.scroll2;
    return { ...state, scroll2: updatedScroll2 };
  }
  if (action.type === "3") {
    const updatedScroll3 = !state.scroll3;
    return { ...state, scroll3: updatedScroll3 };
  }
  if (action.type === "4") {
    const updatedScroll4 = !state.scroll4;
    return { ...state, scroll4: updatedScroll4 };
  }
  if (action.type === "5") {
    const updatedScroll5 = !state.scroll5;
    return { ...state, scroll5: updatedScroll5 };
  }
  if (action.type === "6") {
    const updatedScroll6 = !state.scroll6;
    return { ...state, scroll6: updatedScroll6 };
  }
  return state;
};

const Skills = () => {
  const [scrollState, dispatchBreakPoint] = useReducer(
    scrollReducer,
    defaultScrollState
  );

  useEffect(() => {
    const skillSection = document.getElementById("skills");
    const sectionTop = skillSection?.offsetTop;
    const sectionHeight = skillSection?.clientHeight;
    const scrollBreakPoint = sectionHeight! / DummyData.length;
    const scrollStartModifyer = 0.6 * sectionTop!;
    const scrollAmountModifyer = 0.8 * scrollBreakPoint;

    window.addEventListener("scroll", () => {
      if (
        window.scrollY >
        scrollStartModifyer! + scrollAmountModifyer * DummyData[0].num
      ) {
        dispatchBreakPoint({ type: "1" });
      }
      if (
        window.scrollY >
        scrollStartModifyer + scrollAmountModifyer * DummyData[1].num
      ) {
        dispatchBreakPoint({ type: "2" });
      }
      if (
        window.scrollY >
        scrollStartModifyer + scrollAmountModifyer * DummyData[2].num
      ) {
        dispatchBreakPoint({ type: "3" });
      }
      if (
        window.scrollY >
        scrollStartModifyer + scrollAmountModifyer * DummyData[3].num
      ) {
        dispatchBreakPoint({ type: "4" });
      }
      if (
        window.scrollY >
        scrollStartModifyer + scrollAmountModifyer * DummyData[4].num
      ) {
        dispatchBreakPoint({ type: "5" });
      }
      if (
        window.scrollY >
        scrollStartModifyer + scrollAmountModifyer * DummyData[5].num
      ) {
        dispatchBreakPoint({ type: "6" });
      }
    });
  }, []);

  const scrollCondition1 = scrollState.scroll1 ? "slide-out" : "";
  const scrollCondition2 = scrollState.scroll2 ? "slide-out" : "";
  const scrollCondition3 = scrollState.scroll3 ? "slide-out" : "";
  const scrollCondition4 = scrollState.scroll4 ? "slide-out" : "";
  const scrollCondition5 = scrollState.scroll5 ? "slide-out" : "";
  const scrollCondition6 = scrollState.scroll6 ? "slide-out" : "";

  const conditionHolder = [
    scrollCondition1,
    scrollCondition2,
    scrollCondition3,
    scrollCondition4,
    scrollCondition5,
    scrollCondition6,
  ];

  const skillList = DummyData.map((skill, index) => (
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

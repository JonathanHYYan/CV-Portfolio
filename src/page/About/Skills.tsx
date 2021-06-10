import { useState, useEffect } from "react";
import "./Skills.scss";

const DummyData= [{},{},{},{},{},{}]

const Skills = () => {
  const [scroll, setScroll] = useState(false);


  useEffect(() =>{
    const skillSection = document.getElementById('skills');
    const sectionTop = skillSection?.offsetTop;
    const sectionHeight = skillSection?.clientHeight;
    const scrollBreakPoint = sectionHeight!/DummyData.length;
    console.log(sectionTop);
    console.log(sectionHeight);
    console.log(scrollBreakPoint);

    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > sectionTop! + scrollBreakPoint)
    })
  },[])

  const scrollCondition = scroll ? "skill-card skill-card-1 slide-out" : "skill-card skill-card-1";

  return (
    <div className="skills" id="skills">
      <div className="image-container" id="imageContainer">
        <div className="skill-card skill-card-6" id="skill6">
          TypeScript
        </div>
        <div className="skill-card skill-card-5" id="skill5">
          React
        </div>
        <div className="skill-card skill-card-4" id="skill4">
          JS
        </div>
        <div className="skill-card skill-card-3" id="skill3">
          SCSS
        </div>
        <div className="skill-card skill-card-2" id="skill2">
          CSS
        </div>
        <div className={scrollCondition} id="skill1">
          HTML
        </div>
      </div>
    </div>
  );
};

export default Skills;

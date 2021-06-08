import "./Skills.scss";

var skill = document.getElementById('skill1');

function fadeOutOnScroll(element: HTMLElement|null) {
  if (!element) {
    return;
  }
  
  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;
  var scrollTop = document.documentElement.scrollTop;
  
  var opacity = 1;
  
  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
  }
  
  if (opacity >= 0) {
    element.style.opacity = opacity.toString();
  }
}

function scrollHandler() {
  fadeOutOnScroll(skill);
}

window.addEventListener('scroll', scrollHandler);

const Skills = () => {


  return (
    <div className="skills">
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
        <div className="skill-card skill-card-1" id="skill1">
          HTML
        </div>
      </div>
    </div>
  );
};

export default Skills;

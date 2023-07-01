import {
  ProjectTitle,
  Slide,
  ProjectRole,
  ProjectDesc,
  StackIcon,
  Tech,
  SlideSquare,
  SlideImg,
} from "./Carouselstyles";
import {
  Css,
  Html,
  JavaScript,
  Jq,
  LaravelLogo,
  PHP,
  VueJs,
  React,
  Scss,
  TypeScript,
} from "../Main/TechStyles";

type SlideObject = {
  title: string;
  role: string;
  thumbnail?: any;
  description: string;
  stack: string[];
  link?: string;
};

interface Props {
  slide: SlideObject;
  activeIndex: number;
  index: number;
  link: string;
}

const CarouselSlide: React.FC<Props> = ({
  slide,
  activeIndex,
  index,
  link,
}) => {
  const techStack: any[] = [];

  slide.stack.forEach((stack) => {
    if (stack === "php") {
      techStack.push(
        <StackIcon>
          <PHP />
        </StackIcon>
      );
    } else if (stack === "laravel") {
      techStack.push(
        <StackIcon>
          <LaravelLogo />
        </StackIcon>
      );
    } else if (stack === "html") {
      techStack.push(
        <StackIcon>
          <Html />
        </StackIcon>
      );
    } else if (stack === "css") {
      techStack.push(
        <StackIcon>
          <Css />
        </StackIcon>
      );
    } else if (stack === "js") {
      techStack.push(
        <StackIcon>
          <JavaScript />
        </StackIcon>
      );
    } else if (stack === "jquery") {
      techStack.push(
        <StackIcon>
          <Jq />
        </StackIcon>
      );
    } else if (stack === "vue.js") {
      techStack.push(
        <StackIcon>
          <VueJs />
        </StackIcon>
      );
    } else if (stack === "react") {
      techStack.push(
        <StackIcon>
          <React />
        </StackIcon>
      );
    } else if (stack === "scss") {
      techStack.push(
        <StackIcon>
          <Scss />
        </StackIcon>
      );
    } else if (stack === "typescript") {
      techStack.push(
        <StackIcon>
          <TypeScript />
        </StackIcon>
      );
    }
  });

  return (
    <Slide active={activeIndex === index ? true : false}>
      <SlideSquare href={link}>
        <ProjectTitle>{slide.title}</ProjectTitle>
        <ProjectRole>Role: {slide.role}</ProjectRole>
        <ProjectDesc>{slide.description}</ProjectDesc>
      </SlideSquare>
      <SlideSquare>
        <a href={link}>
          <SlideImg src={slide.thumbnail} />
        </a>
      </SlideSquare>
      <SlideSquare href={link}>
        <h2>Tech Stack</h2>
        <Tech>{techStack}</Tech>
      </SlideSquare>
    </Slide>
  );
};

export default CarouselSlide;

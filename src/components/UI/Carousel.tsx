import { useState } from "react";
import CarouselSlide from "./CarouselSlide";
import {
  CarouselButton,
  CarouselHolder,
  CarouselIndicators,
  CarouselNav,
  Dot,
  Left,
  Right,
} from "./Carouselstyles";
import { slides } from "../Projects/Projects";

interface SlideObject {
  title: string;
  role: string;
  thumbnail?: any;
  description: string;
  stack: string[];
  link: string;
}

const Carousel: React.FC = () => {
  const [activeIndex, setactiveIndex] = useState(0);

  let CarouselContent = slides.map((slide: SlideObject, index: number) => {
    return (
      <CarouselSlide
        slide={slide}
        activeIndex={activeIndex}
        index={index}
        link={slide.link}
      >
      </CarouselSlide>
    );
  });

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = slides.length-1;
    } else if (newIndex >= slides.length) {
      newIndex = 0;
    }
    setactiveIndex(newIndex);
  };

  return (
    <>
      <CarouselHolder>{CarouselContent}</CarouselHolder>
      <CarouselNav>
        <CarouselButton aria-label="previous-slide" onClick={() => updateIndex(activeIndex - 1)}>
          <Left />
        </CarouselButton>
        <CarouselIndicators>
          {slides.map((slide, index) => {
            return (
              <Dot
                key={index}
                onClick={() => updateIndex(index)}
                active={activeIndex === index ? true : false}
                aria-label={slide.title}
              />
            );
          })}
        </CarouselIndicators>
        <CarouselButton aria-label="next-slide" onClick={() => updateIndex(activeIndex + 1)}>
          <Right />
        </CarouselButton>
      </CarouselNav>
    </>
  );
};

export default Carousel;

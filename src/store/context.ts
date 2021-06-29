import React from "react";

const ScrollContext = React.createContext({
  scroll: false,
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
});

export default ScrollContext;

import React from "react";

const ScrollContext = React.createContext({
  scroll: false,
  landingTransition: false,
});

export default ScrollContext;

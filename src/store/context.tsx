import React from "react";

const ScrollContext = React.createContext({
  scroll: false,
  landingTransition: false,
  form: false,
  setForm: (form:any) => {},
});

export default ScrollContext;

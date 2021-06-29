import React, {useEffect, useState} from "react";

const ScrollContext = React.createContext({
  scroll: false,
  windowScrollY: 0,
});

export const ScrollContextProvider = (props: any) => {
  const [scroll, setScroll] = useState(false);
  let windowScrollY = 0;

  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      if (e.deltaY) {
        setScroll(true);
      }
    });
    setTimeout(function() {
      if(!scroll){
        setScroll(true);
      }
    },2000)
  }, []);

  window.addEventListener("scroll", () => {
    windowScrollY = window.scrollY;
    return windowScrollY;
  });

  return (
    <ScrollContext.Provider
    value = {{
      scroll: scroll,
      windowScrollY: windowScrollY,
    }}
    >
      {props.children}
    </ScrollContext.Provider>
  )

}
export default ScrollContext;

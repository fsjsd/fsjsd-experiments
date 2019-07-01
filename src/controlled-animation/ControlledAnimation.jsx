import React, { useRef, useEffect } from "react";

function ControlledTransitionAnimation({
  style,
  children,
  onAnimated,
  triggerWhen
}) {
  const domControlRef = useRef();
  useEffect(() => {
    //console.log("domControlRef.current", domControlRef.current);

    const triggerStyles = Object.keys(triggerWhen);

    const domAnimationEndHandler = ev => {
      console.log(triggerStyles, ev.target.style);
      triggerStyles.forEach(styleProp => {
        if (
          ev.target.style[styleProp] &&
          ev.target.style[styleProp] === triggerWhen[styleProp]
        ) {
          //console.log("transitionend", ev.target.style.transform);
          onAnimated();
        }
      });
      //ev.target.style.filter(style => style == triggerStyles[style] && );
    };

    // TODO: attach based on browser
    // https://www.w3schools.com/jsref/event_animationend.asp

    // Standard syntax
    domControlRef.current.addEventListener(
      "transitionend",
      domAnimationEndHandler
    );
  }, []);
  return (
    <div ref={domControlRef} style={style}>
      {children}
    </div>
  );
}

export { ControlledTransitionAnimation };

import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function ControlledAnimation({
  style,
  children,
  onAnimated,
  triggerWhen,
  animationEventType
}) {
  const domControlRef = useRef();
  useEffect(() => {
    //console.log("domControlRef.current", domControlRef.current);

    const triggerStyles = Object.keys(triggerWhen);

    const domAnimationEndHandler = ev => {
      //console.log("domAnimationEndHandler", triggerStyles, ev, ev.target.style);

      const triggerPropCandidate = triggerStyles.find(
        style => style == ev.propertyName
      );

      if (
        triggerPropCandidate &&
        ev.target.style[ev.propertyName] === triggerWhen[triggerPropCandidate]
      ) {
        //console.log("transitionend", ev.target.style.transform);
        onAnimated();
      }
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

function ControlledTransitionAnimation(props) {
  return ControlledAnimation({ ...props, animationEventType: "transitionend" });
}

function ControlledKeyframeAnimation(props) {
  return ControlledAnimation({ ...props, animationEventType: "animationend" });
}

export { ControlledKeyframeAnimation, ControlledTransitionAnimation };

ControlledKeyframeAnimation.propTypes = {
  style: PropTypes.object,
  children: PropTypes.object,
  onAnimated: PropTypes.func.isRequired,
  triggerWhen: PropTypes.object.isRequired
};

ControlledTransitionAnimation.propTypes = {
  style: PropTypes.object,
  children: PropTypes.object,
  onAnimated: PropTypes.func.isRequired,
  triggerWhen: PropTypes.object.isRequired
};

import React, { useState, useEffect } from "react";
import { ControlledTransitionAnimation } from "./ControlledAnimation";

import {
  AnimationStyles,
  LoadingAnim,
  FadeAnimation,
  StateIndicators
} from "./DemoStyles";

export const Demo1 = () => {
  // state for side effect loading
  const [isLoading, setIsLoading] = useState(false);
  // state for animation completion
  const [isLoadingAnimComplete, setIsLoadingAnimComplete] = useState(false);

  const longRunningApi = useEffect(() => {
    // set loading before starting API call ...
    setIsLoading(prev => true);

    // This would be your AJAX call
    const timeoutRef = window.setTimeout(() => {
      setIsLoading(prev => false); // finished, reset state
    }, 4000);

    return () => window.clearTimeout(timeoutRef);
  }, []);

  // call back for controlled animation
  const loadingAnimFinalized = () => {
    // now mark animation state as complete
    setIsLoadingAnimComplete(true);
  };

  const ControlledFade = FadeAnimation(ControlledTransitionAnimation);

  return (
    <>
      <h1>Controlled Transition Animation</h1>
      <StateIndicators>
        {isLoading && <div>loading ...</div>}
        {!isLoading && <div>side effect complete</div>}
        {!isLoading && isLoadingAnimComplete && (
          <div> ... side effect &amp; animation complete</div>
        )}
      </StateIndicators>
      {!isLoadingAnimComplete && (
        <>
          <ControlledTransitionAnimation
            style={{
              ...AnimationStyles.fadeAnimation,
              ...(isLoading ? AnimationStyles.fadeAnimationRunning : {})
            }}
            triggerWhen={{ opacity: "0" }}
            onAnimated={loadingAnimFinalized}
          >
            <LoadingAnim duration="1s" />
          </ControlledTransitionAnimation>
        </>
      )}
      {!isLoading && isLoadingAnimComplete && (
        <div>Show loaded content from side effect</div>
      )}
    </>
  );

  /*
  <ControlledFade
      triggerWhen={{ opacity: "0" }}
      onAnimated={loadingAnimFinalized}
    >
      <LoadingAnim
        duration="1s"
        triggerWhen={{ opacity: "0" }}
        onAnimated={loadingAnimFinalized}
      />
    </ControlledFade>
    */
};

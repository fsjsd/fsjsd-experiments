import React, { useState, useEffect } from "react";
import { ControlledTransitionAnimation } from "./ControlledAnimation";

import { AnimationStyles, LoadingAnim, StateIndicators } from "./DemoStyles";

export const Demo2 = () => {
  // state for side effect loading
  const [isLoading, setIsLoading] = useState(false);
  // state for animation completion
  const [isLoadingAnimComplete, setIsLoadingAnimComplete] = useState(false);

  const longRunningApi = useEffect(() => {
    // set loading before starting API call ...
    setIsLoading(prev => true);

    // This would be your AJAX call
    window.setTimeout(() => {
      const timeoutRef = setIsLoading(prev => false); // finished, reset state

      return () => window.clearTimeout(timeoutRef);
    }, 1500);
  }, []);

  // call back for controlled animation
  const loadingAnimFinalized = () => {
    // now mark animation state as complete
    setIsLoadingAnimComplete(true);
  };

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
        <ControlledTransitionAnimation
          style={{
            ...AnimationStyles.slideAnimation,
            ...(isLoading ? AnimationStyles.slideAnimationRunning : {})
          }}
          triggerWhen={{ transform: "translate(10px, 10px)" }}
          onAnimated={loadingAnimFinalized}
        >
          <LoadingAnim duration="1s" />
        </ControlledTransitionAnimation>
      )}
      {!isLoading && isLoadingAnimComplete && (
        <div>Show loaded content from side effect</div>
      )}
    </>
  );
};

import React, { useState, useEffect } from "react";
import AdaptiveListContainer from "./adaptive-list/AdaptiveListContainer";
import DemoSiteLayoutContainer from "fsjsd-demosite";
import { ControlledTransitionAnimation } from "./controlled-animation/ControlledAnimation";
import styled from "styled-components";

/*
const fadeInOutKeyframes = keyframes`
    0%   { opacity: 0; }
    100% { opacity: 1; }
`;

const fadeInOut = styled.div`
  animation: ${fadeInOutKeyframes} 1.5s ease-in-out;
`;
*/

const style = {
  slideAnimation: {
    transitionDuration: "3.5s",
    transform: "translate(10px, 10px)"
  },
  slideAnimationRunning: {
    transform: "translate(300px, 10px)"
  },
  fadeAnimation: {
    transitionDuration: "0.5s",
    transitionDelay: "0.5s",
    opacity: "0"
  },
  fadeAnimationRunning: {
    opacity: "1"
  },
  loadingAnim: {
    backgroundColor: "#eee"
  }
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingAnimComplete, setIsLoadingAnimComplete] = useState(false);

  //console.log("start", { isLoading });

  const someApi = useEffect(() => {
    setIsLoading(prev => true);
    //console.log("sideEffect", { isLoading });
    window.setTimeout(() => {
      //console.log("timeoutComplete", { isLoading });
      //if (isLoading) {
      setIsLoading(prev => false);
      //}
    }, 5000);
  }, []);

  const loadingAnimFinalized = () => {
    console.log("loadingAnimFinalized");
    setIsLoadingAnimComplete(true);
  };

  return (
    <DemoSiteLayoutContainer
      renderHeader={() => <>Adaptive List Demonstration</>}
      renderNavigation={() => <>x</>}
      renderContents={() => (
        <>
          <div>
            {isLoading && <span>loading ...</span>}
            {!isLoading && <span>side effect complete</span>}
            {!isLoading && isLoadingAnimComplete && (
              <span> ... side effect &amp; animation complete</span>
            )}
          </div>
          {!isLoadingAnimComplete && (
            <ControlledTransitionAnimation
              style={{
                ...style.fadeAnimation,
                ...(isLoading ? style.fadeAnimationRunning : {})
              }}
              triggerWhen={{ transform: "translate(10px, 10px)", opacity: "0" }}
              onAnimated={loadingAnimFinalized}
            >
              <div style={style.loadingAnim}>...</div>
            </ControlledTransitionAnimation>
          )}
          {!isLoading && isLoadingAnimComplete && <div>Loaded Content!</div>}
          <AdaptiveListContainer />
        </>
      )}
    />
  );
}

export default App;

import React, { useState } from "react";
import { AnimationStyles, LoadingAnim } from "./DemoStyles";
import { DemoSiteContent } from "../../components/DemoSiteContent";

export const Problem = () => {
  const [loginFormVisible, setLoginFormVisible] = useState(true);
  const [authenticating, setAuthenticating] = useState(false);

  const authenticate = () => {
    setLoginFormVisible(false);
    setAuthenticating(true);

    // dummy API latency ...
    window.setTimeout(() => {
      setAuthenticating(false);
    }, 5000);
  };

  return (
    <DemoSiteContent>
      <h1>The Problem ...</h1>

      {loginFormVisible && (
        <div>
          <p>(login form)</p>

          <p>
            <button onClick={authenticate}>Login</button>
          </p>
        </div>
      )}

      {!authenticating && !loginFormVisible && (
        <div>
          <p>authenticated!</p>
        </div>
      )}

      {authenticating && (
        <div>
          <p>authenticating ...</p>
        </div>
      )}

      <div
        style={{
          ...AnimationStyles.fadeAnimation,
          ...(authenticating ? AnimationStyles.fadeAnimationRunning : {})
        }}
      >
        {authenticating && (
          <LoadingAnim
            duration="1.5s"
            style={{
              borderRadius: "40px",
              width: "20px",
              height: "20px"
            }}
          />
        )}
      </div>
    </DemoSiteContent>
  );
};

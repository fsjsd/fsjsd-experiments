import React, { useState, useEffect } from "react";
import ClassLifecycleComponent from "./ClassLifecycleComponent";
import FunctionLifecycleComponent from "./FunctionLifecycleComponent";
import { DemoSiteContent } from "../../components/DemoSiteContent";
import { Button } from "../../components/Button";
import { ButtonGroup } from "../../components/ButtonGroup";

function Index() {
  const [demos, setDemos] = useState(1);

  const [sharedCounter, setSharedCounter] = useState(0);
  const [localCounter, setLocalCounter] = useState(0);

  useEffect(() => {
    window.setTimeout(() => {
      incrementShared();
    }, 200);
  }, []);

  const incrementShared = () => {
    setSharedCounter(sharedCounter + 1);
  };

  return (
    <DemoSiteContent>
      {new Array(demos).fill(1).map((i, index) => (
        <div key={index}>
          <h2>Class life cycle Component</h2>
          <ClassLifecycleComponent count={sharedCounter} />

          <h2>Function life cycle Component</h2>
          <FunctionLifecycleComponent count={sharedCounter} />
        </div>
      ))}

      <p>
        <Button onClick={incrementShared}>Increment Shared</Button>
      </p>
      <hr />
      <p>
        Shared Counter: {sharedCounter}. Local Counter: {localCounter}
      </p>
      <p>
        <Button onClick={() => setLocalCounter(localCounter + 1)}>
          Increment Local
        </Button>
      </p>
      <hr />
      <ButtonGroup>
        <Button onClick={() => setDemos(demos + 1)}>Add Comps</Button>
        <Button onClick={() => setDemos(demos - 1)}>Remove Comps</Button>
      </ButtonGroup>
    </DemoSiteContent>
  );
}

export { Index };

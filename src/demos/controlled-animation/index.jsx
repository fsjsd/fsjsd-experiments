import React from "react";
import { Link } from "react-router-dom";
import { DemoSiteContent } from "../../components/DemoSiteContent";

export const Index = () => {
  return (
    <DemoSiteContent>
      <h1>Controlled Animations</h1>
      <ul>
        <li>
          <Link to="/controlledanimation/problem">The problem ...</Link>
        </li>
        <li>
          <Link to="/controlledanimation/demo1">Demo 1</Link>
        </li>
        <li>
          <Link to="/controlledanimation/demo2">Demo 2</Link>
        </li>
      </ul>
    </DemoSiteContent>
  );
};

import React from "react";
import { Link } from "react-router-dom";
export const Index = () => {
  return (
    <>
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
    </>
  );
};

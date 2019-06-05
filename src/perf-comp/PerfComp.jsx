import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
//import ReactDOM from 'react-dom';
import { useDebouncedCallback } from "use-debounce";

const style = {
  boxShadow: "rgb(255, 0, 0) 0px 0 0 3px inset"
};

const globallyEnabled = false;

const boxShadow = value => {
  return {
    boxShadow: "rgb(" + value + ", 0, 0) 0px 0 0 3px inset"
  };
};

const PerfComp = props => {
  const componentRerenderedTimes = useRef(0);

  const renderChildren = () => {
    return props.children;
  };
  
  if (!globallyEnabled) {
    return <>{renderChildren()}</>;
  }

  componentRerenderedTimes.current++;

  console.log(componentRerenderedTimes.current);

  const combinedStyle = {
    ...(props.style || {}),
    ...boxShadow(componentRerenderedTimes.current)
  };

  return (
    <div {...props} style={combinedStyle}>
      {renderChildren()}
    </div>
  );
};

export default PerfComp;

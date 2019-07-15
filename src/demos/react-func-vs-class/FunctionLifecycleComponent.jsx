import React, { useEffect } from "react";

const FunctionLifecycleComponent = props => {
  console.log("Func Comp - (execute/render)", props);

  // componentDidMount equivalent
  useEffect(() => {
    console.log("Func Comp - (mount)");
    // componentWillUnmount equivalent
    return () => {
      console.log("Func Comp - (unmount)");
    };
  }, []);

  return <>Class Comp. Counter: {props.count}</>;
};

// opposite of shouldComponentUpdate!
// https://reactjs.org/docs/react-api.html#reactmemo
const arePropsEqual = (prevProps, nextProps) => {
  console.log("Func Comp - (!shouldUpdate)", prevProps, nextProps);
  return nextProps && nextProps.count % 2 === 0;
};

export default React.memo(FunctionLifecycleComponent, arePropsEqual);

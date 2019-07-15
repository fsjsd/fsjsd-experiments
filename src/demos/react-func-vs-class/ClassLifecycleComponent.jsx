import React from "react";

class ClassLifecycleComponent extends React.Component {
  constructor(props) {
    console.log("Class Comp - constructor", props);
    super(props);
  }

  componentDidMount() {
    console.log("Class Comp - componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Class Comp - shouldComponentUpdate", nextProps, nextState);
    return nextProps && nextProps.count % 2 !== 0;
  }

  componentWillUnmount() {
    console.log("Class Comp - componentWillUnmount");
  }

  render() {
    console.log("Class Comp - render");
    return <>Class Comp. Counter: {this.props.count}</>;
  }
}

export default ClassLifecycleComponent;

import React from 'react';


class ClassLifecycleComponent extends React.Component
{
  constructor(props) {
      console.log('Class Comp - constructor', props);
    super(props);
    this.activeRoute.bind(this);
  }
  
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

    componentDidMount() {
      console.log('Class Comp - componentDidMount');
    /*if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
    */
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('Class Comp - shouldComponentUpdate', nextProps, nextState);
    return nextProps && (nextProps.count % 2 !== 0);
  }

  componentWillUnmount() {
    console.log('Class Comp - componentWillUnmount');
    /*if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }*/
  }

    render(){
    console.log('Class Comp - render');
        return (
        <>    
          Class Comp. Counter: {this.props.count}
          </>
        )
    }
}

export default ClassLifecycleComponent
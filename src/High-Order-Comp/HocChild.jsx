import React from 'react';

const Hello = ({ name }) => <h1>HOC Means: <span style={{color:'purple'}}> {name} </span>!</h1>;
export const NewComponent = simpleHOC(Hello);

// Take in a component as argument WrappedComponent
function simpleHOC(WrappedComponent) {
  // And return a new anonymous component
  return class extends React.Component{
    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }
}

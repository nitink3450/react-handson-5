import React, { Component } from 'react'
import {NewComponent} from './HocChild';
export default class HighOrderComp extends Component {
  render() {
    return (
      <>
        <h1>🔥HighOrderComp🔥</h1>
        <NewComponent name="Higher Order Components" />
        <p>Above HOC takes a React component, WrappedComponent, as parameter. It returns a new React component. The returned component contains the WrappedComponent as a child.</p>
        <p>Higher-order components (HOC) are a very similar concept. Instead of working with functions as input parameters and return values, HOCs are working with components.</p>
        <p>A HOC takes a component as input parameter and returns a new component.</p>
        <p>♨️We dont modify or mutate the component. We create new ones. <br />
        ♨️A HOC is used to compose components for code reuse.<br />
        ♨️A HOC is a pure function. That means it has no side effects. It only returns a new component.</p>
      </>
    )
  }
}

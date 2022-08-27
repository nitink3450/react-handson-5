Q.1.What is higher-order component in react?
A higher-order component is a function that takes a component and returns a new component.

React’s Higher Order Component is a pattern that stems from React’s nature that privileges composition over inheritance.

Consider this example –

import React from 'react'

const higherOrderComponent = WrappedComponent => {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent />
    }
  }
  return HOC
}

In the above example, higherOrderComponent is a function that takes a component called WrappedComponent as an argument. We have created a new component called HOC which returns the <WrappedComponent/> from its render function. While this actually adds no functionality, it depicts the common pattern that every HOC function will follow.

We can invoke the HOC as follows:

const SimpleHOC = higherOrderComponent(MyComponent);

A higher-order component transforms a component into another component. Note that a HOC doesn’t modify the input component. Rather, a HOC composes the original component by wrapping it in a container component.

A HOC is a pure function with zero side-effects.

1.A higher-order component (HOC) is an advanced technique in React for reusing component logic.
2.HOCs are not part of the React API,They are a pattern that emerges from React’s compositional nature.
3.a higher-order component is a function that takes a component and returns a new component.

#Reason to use Higher-Order component:
1.Easy to handle
2.Get rid of copying the same logic in every component


Q.2.what is pure components in react?

Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values. If the value of the previous state or props and the new state or props is the same, the component is not re-rendered. Pure Components restricts the re-rendering ensuring the higher performance of the Component

Features of React Pure Components

1.Prevents re-rendering of Component if props or state is the same
2.Takes care of “shouldComponentUpdate” implicitly
3.State and Props are Shallow Compared
4.Pure Components are more performant in certain cases

A React component is considered pure if it renders the same output for the same state and props. For this type of classs component,React Provides the PureComponent base class. The class Component that extend the React.PureComponent class are treated as pure component.

Similar to Pure Functions in JavaScript, a React component is considered a Pure Component if it renders the same output for the same state and props value. React provides the PureComponent base class for these class components. Class components that extend the React.PureComponent class are treated as pure components.

It is the same as Component except that Pure Components take care of shouldComponentUpdate by itself, it does the shallow comparison on the state and props data. If the previous state and props data is the same as the next props or state, the component is not Re-rendered.

Note: The State and Props are Shallow Compared

React Components re-renders in the following scenarios:

1.“setState” is called in Component
2.“props” values are updated
3.this.forceUpdate() is called

In the case of Pure Components, the React components do not re-render blindly without considering the updated values of React “props” and “state”. If updated values are the same as previous values, render is not triggered.
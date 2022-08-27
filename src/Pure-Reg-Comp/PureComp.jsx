import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
  render() {
    console.warn("PURE-COMP RENDERED")
    console.log(this.props.data);
    
    return (
      <>
        <b style={{color:'green'}}>PureComp = {this.props.data}</b>
        <p>✅After the clicking on button this.props.data : javascript name will get change to python and it will render the Pure component </p>
        <p>✅But if u click again on button and if u r passing the same props as previous props it will shallow compare ur props it it is same it will not re-render the page but if props is different from preveious one it will renders the componenets</p>
        <p>✅this is the advantage of pureComponents over regular component</p>
      </>
    )
  }
}

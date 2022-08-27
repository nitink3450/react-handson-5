import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';
export default class ParentComp extends Component {
    constructor(){
        super();
        this.state = {names : 'javaScript'}
    }
  render() {
    console.warn("PARENT-COMP RENDERED")
    return (
      <div>
      <h2>⭐Parent Components⭐</h2>
      <button 
      style={{height:'40px',borderRadius:'50px',backgroundColor:'dodgerblue'}}
      onClick={()=>{this.setState({names : 'python'})}}
      >Click:Change name to Python</button>
      <p>(Open Console to see Message warning on renders)</p>
      <PureComp data={this.state.names}/>
      <RegComp data={this.state.names}/>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class RegComp extends Component {
  render() {
    console.warn("REGULAR-COMP RENDERED")
    console.log(this.props.data);
    
    return (
      <>
        <b style={{color:'red'}}>RegComp = {this.props.data} </b>
        <p>📌Once u clickedd button it  will render the regular comp and name will change to python</p>
        <p>📌but if u double clicked on it it will again re-render the page</p>
        <p>📌this is the disadvantage of ussing regular comp</p>
      </>
    )
  }
}

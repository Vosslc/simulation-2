import React, { Component } from 'react';
import './house.css';



class House extends Component {

  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div className="houses">
        <h2>House.js</h2> 
        <button className="deleteBtn"aria-label="Close Account Info Modal Box" onClick={() =>this.props.remove(this.props.el.id)}>&times;</button>
        <p>Property: {this.props.el.name}</p>
        <p>Address: {this.props.el.address}</p>
        <p>City: {this.props.el.city}</p>
        <p>State: {this.props.el.state}</p>
        <p>Zip: {this.props.el.zip}</p>
        <img src={this.props.el.img} alt=""/>
      </div>
    );
  }
}

export default House;
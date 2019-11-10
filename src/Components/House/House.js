import React, { Component } from 'react';
import './house.css';



class House extends Component {

  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div className="housesCon">
        <h2 className= "listings">Home Listings</h2>
        <button className="deleteBtn"aria-label="Close Account Info Modal Box" onClick={() =>this.props.remove(this.props.el.id)}>
          &times;
        </button>
        <div className="houseContainer">
          
          {/* <h2>House.js</h2>  */}
          <img src={this.props.el.img} alt=""/>
          <div className="houses">Property: {this.props.el.name}</div>
          <div className="houses">Address: {this.props.el.address}</div>
          <div className="houses">City: {this.props.el.city}</div>
          <div className="houses">State: {this.props.el.state}</div>
          <div className="houses">Zip: {this.props.el.zip}</div>
        </div>
      </div>
    );
  }
}

export default House;
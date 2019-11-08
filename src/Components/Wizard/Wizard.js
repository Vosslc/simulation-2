import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Wizard extends Component {
  
  constructor() {
    super()
  
      this.state = {
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode:""
      };
    
  }

// ******METHODS******//

  updateText( value ) {
    this.setState({ name: value });
    this.setState({ address: value });
    this.setState({ city: value });
    this.setState({ state: value });
    this.setState({ zipcode: value });

  }
  


  render() {
    // const { name, address, city, state, zipcode } = this.state;

    return (
      <div className = "wiz-contanier">
        <h2>Wizard.js</h2>
        <Link to='../Dashboard/Dashboard'>
          <button className='btn'>Cancel</button>
        </Link>
        
        <div className="property">
          <h3>Property Name</h3>
          <input className="name__input"
            placeholder="Property Name?"
            // value={ name }
            onChange={ ( e ) => this.updateText( e.target.value ) } 
          />
        </div>
        <div className="address">
          <h3>Address</h3>
          <input className="address_input"
            placeholder="Address..."
            // value={ address }
            onChange={ ( e ) => this.updateText( e.target.value ) } 
          />
        </div>
        <div className="city">
          <h3>City</h3>
          <input className="city_input"
            placeholder="City..."
            // value={ city }
            onChange={ ( e ) => this.updateText( e.target.value ) } 
          />
        </div>
        <div className="state">
          <h3>State</h3>
          <input className="state_input"
            placeholder="State"
            // value={ state }
            onChange={ ( e ) => this.updateText( e.target.value ) } 
          />
        </div>
        <div className="zipcode">
          <h3>Zip</h3>
          <input className="zipcode_input"
            placeholder="Zipcode"
            // value={ zipcode }
            onChange={ ( e ) => this.updateText( e.target.value ) } 
          />
        </div>

      </div>
    );
  }
}

export default Wizard;
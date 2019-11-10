import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


class Wizard extends Component {
  
  constructor() {
    super()
  
      this.state = {
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode: 0
      };
    
  }

  // ****AXIOS SERVER CALLS**** //
  // addHouse(){
  //   const { name, address, city, state, zipcode } = this.state;
  //   axios.post('/api/houses', {name, address, city, state, zipcode}).then(response => {
  //     // const addData = response.data
  //     this.setState({
  //       name: addData,
  //       address: addData,
  //       city: addData,
  //       state: addData,
  //       zipcode: addData
  //       // this.props.history.push('/')
  //     })
  //   })
  // }

  addHouse() {
    axios.post('/api/houses', this.state)
      .then(res => {
        this.props.history.push('/')
      })
  }
  



// ******METHODS******//

  handleChangeName( value ) {
    this.setState({ name: value });
  }
  handleChangeAddress( value ) {
    this.setState({ address: value });
  }
  handleChangeCity( value ) {
    this.setState({ city: value });
  }
  handleChangeState( value ) {
    this.setState({ state: value });
  }
  handleChangeZipcode( value ) {
    this.setState({ zipcode: value });
  }
  

  render() {
    const { name, address, city, state, zipcode } = this.state;

    return (
      <div className = "wiz-contanier">
        <h2>Wizard.js</h2>
        <Link to='/'>
          <button className='btn'>Cancel</button>
        </Link>
        
        <div className="property">
          <h3>Property Name</h3>
          <input className="name__input"
            placeholder="Property Name?"
            value={ name }
            onChange={ ( e ) => this.handleChangeName( e.target.value ) } 
          />
          
        </div>
        <div className="address">
          <h3>Address</h3>
          <input className="address_input"
            placeholder="Address..."
            value={ address }
            onChange={ ( e ) => this.handleChangeAddress( e.target.value ) } 
          />
        </div>
        <div className="city">
          <h3>City</h3>
          <input className="city_input"
            placeholder="City..."
            value={ city }
            onChange={ ( e ) => this.handleChangeCity( e.target.value ) } 
          />
        </div>
        <div className="state">
          <h3>State</h3>
          <input className="state_input"
            placeholder="State"
            value={ state }
            onChange={ ( e ) => this.handleChangeState( e.target.value ) } 
          />
        </div>
        <div className="zipcode">
          <h3>Zip</h3>
          <input className="zipcode_input"
            placeholder="Zipcode"
            value={ zipcode }
            onChange={ ( e ) => this.handleChangeZipcode( e.target.value ) } 
          />
        </div>
          <button className='btn' onClick={()=> this.addHouse()}>Complete</button>


      </div>
    );
  }
}

export default Wizard;
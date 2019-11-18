import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateName,
  updateAddress,
  updateCity,
  updateState,
  updateZipcode,
  clearState
} from "../../ducks/reducer";

class Wizard1 extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     name: "",
  //     address: "",
  //     city: "",
  //     st: "",
  //     zipcode: 0
  //   };
  // }

  // ******METHODS******//

  // handleChangeName(value) {
  //   this.setState({ name: value });
  // }
  // handleChangeAddress(value) {
  //   this.setState({ address: value });
  // }
  // handleChangeCity(value) {
  //   this.setState({ city: value });
  // }
  // handleChangeState(value) {
  //   this.setState({ state: value });
  // }
  // handleChangeZipcode(value) {
  //   this.setState({ zipcode: value });
  // }

  componentDidMount() {
    console.log(this.props)
}

  render() {

    const {
      updateName,
      updateAddress,
      updateCity,
      updateState,
      updateZipcode
    } = this.props;
    console.log(this.props);


    return (
      <div>
        <Link to="/">
          <button className="btn" onClick={() => this.props.clearState()}>Cancel</button>
        </Link>
        <div className="property">
          <h3>Property Name</h3>
          <input
            className="name_input"
            type="text"
            placeholder='Property Name'
            value={this.props.name}
            name="name"
            // value={name}
            // onChange={e => this.handleChangeName(e.target.value)}
            onChange={e => updateName(e.target.value)}
          />
        </div>

        <div className="address">
          <h3>Address</h3>
          <input
            className="address_input"
            type="text"
            placeholder='Address'
            value={this.props.address}
            name="address"
            onChange={e => updateAddress(e.target.value)}
            // value={address}
            // onChange={e => this.handleChangeAddress(e.target.value)}
          />
        </div>

        <div className="city">
          <h3>City</h3>
          <input
            className="city_input"
            type="text"
            placeholder='City'
            value={this.props.city}
            onChange={e => updateCity(e.target.value)}
            name="city"
            // value={city}
            // onChange={e => this.handleChangeCity(e.target.value)}
          />
        </div>

        <div className="state">
          <h3>State</h3>
          <input
            className="state_input"
            text="text"
            placeholder="State"
            value={this.props.st}
            onChange={e => updateState(e.target.value)}
            name="city"
            // value={st}
            // onChange={e => this.handleChangeState(e.target.value)}
          />
        </div>

        <div className="zipcode">
          <h3>Zip</h3>
          <input
            className="zipcode_input"
            type="text"
            placeholder="Zip Code"
            value={this.props.zipcode}
            onChange={e => updateZipcode(e.target.value)}
            name="zipcode"
            // value={zipcode}
            // onChange={e => this.handleChangeZipcode(e.target.value)}
          />
        </div>

        {/* <button className="complete-btn" onClick={() => this.props.history.push("/")}>Back</button> */}

        <button
          className="complete-btn"
          onClick={() => this.props.history.push("/wizard2")}
        >
          Next Step
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { name, address, city, st, zipcode } = state;

  return {
    name,
    address,
    city,
    st,
    zipcode
  };
}
export default connect(mapStateToProps, {
  updateName,
  updateAddress,
  updateCity,
  updateState,
  updateZipcode,
  clearState
})(Wizard1);

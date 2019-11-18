import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { updateMortgage, updateRent, clearState } from "../../ducks/reducer"; //! all the properties off of the Redux state (we'll need these to make our axios request)

class Wizard3 extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     mortgage: 0,
  //     rent: 0
  //   };
  // }

  // ******METHODS******//

  // handleChangeMortgage(value) {
  //   this.setState({ mortgage: value });
  // }

  // handleChangeRent(value) {
  //   this.setState({ rent: value });
  // }

  componentDidMount() {
    console.log(this.props);
  }

  // ****AXIOS SERVER CALLS**** //
  addHouse() {
    axios.post("/api/houses", this.props).then(res => {
      this.props.history.push("/");
      this.props.clearState()
    });
  }

  render() {
    const { updateMortgage, updateRent } = this.props;
    return (
      <div className="wizard">
        <div className="dashboard-flex">
          <h3>Add New Listing</h3>
          <Link to="/">
            <button className="cancel" onClick={() => this.props.clearState()}>Cancel</button>
          </Link>
        </div>

        <h5>Recommended Rent: ${this.props.mortgage * 1.25}</h5>

        <div>Monthly Mortgage Amount</div>
        <input
          className="input"
          type="number"
          placeholder={this.props.mortgage}
          onChange={e => updateMortgage(e.target.value)}
          name="mortgage"
          // value={this.state.image}
        />

        <div>Desired Monthly Rent</div>
        <input
          className="input"
          type="number"
          placeholder={this.props.rent}
          onChange={e => updateRent(e.target.value)}
          name="rent"
        />
        <div className="two-btns">
          <button
            className="complete-btn"
            onClick={() => this.props.history.push("/wizard2")}
          >
            Previous Step
          </button>
          <button className="complete-btn" onClick={() => this.addHouse()}>
            Complete
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { name, address, city, st, zipcode, image, mortgage, rent } = state;

  return {
    name,
    address,
    city,
    st,
    image,
    zipcode,
    mortgage,
    rent
  };
}

export default connect(mapStateToProps, { updateMortgage, updateRent, clearState })(
  Wizard3
);

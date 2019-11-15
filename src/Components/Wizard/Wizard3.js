import React, { Component } from "react";
import axios from 'axios'

export default class Wizard3 extends Component {
  constructor() {
    super();

    this.state = {
      mortgage: 0,
      rent: 0
    };
  }

  // ******METHODS******//

  handleChangeMortgage(value) {
    this.setState({ mortgage: value });
  }

  handleChangeRent(value) {
    this.setState({ rent: value });
  }
  
// ****AXIOS SERVER CALLS**** //
  addHouse() {
    axios.post('/api/houses', this.state)
      .then(res => {
        this.props.history.push('/')
      })
  }

  render() {
    const { mortgage, rent } = this.state
    return (
      <div>
        <div className="Mortgage_Amount">
          <h3>Monthly Mortgage Amount</h3>
          <input
            className="name__input"
            placeholder="Mortgage Amount"
            value={mortgage}
            onChange={e => this.handleChangeMortgage(e.target.value)}
          />
        </div>
        <div className="Rent_Amount">
          <h3>Desierd Rent Amount</h3>
          <input
            className="name__input"
            placeholder="Rent"
            value={rent}
            onChange={e => this.handleChangeRent(e.target.value)}
          />
        </div>
        <button className="complete-btn" onClick={() => this.props.history.push("/wizard2")}>Back</button>
        <button className='btn' onClick={()=> this.addHouse()}>Complete</button>
      </div>
    );
  }
}

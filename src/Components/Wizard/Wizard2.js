import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateImage, clearState } from "../../ducks/reducer";

class Wizard2 extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     imageUrl: ""
  //   };
  // }

  // ******METHODS******//

  // handleChangeImageUrl(value) {
  //   this.setState({ imageUrl: value });
  // }

  componentDidMount() {
    console.log(this.props)
}

  render() {
    const { updateImage } = this.props;
    return (
      <div className="wizard">
        <div className="dashboard-flex">
          <h3>Add New Listing</h3>
          <Link to="/">
            <button className="cancel" onClick={() => this.props.clearState()}>Cancel</button>
          </Link>
        </div>

        <div>Image Url</div>
        <input
          className="input"
          type="text"
          placeholder="Image URL"
          onChange={e => updateImage(e.target.value)}
          name="zipcode"
        />

        <div className="two-btns">
          <button
            className="complete-btn"
            onClick={() => this.props.history.push("/wizard1")}
          >
            Previous Step
          </button>
          <button
            className="complete-btn"
            onClick={() => this.props.history.push("/wizard3")}
          >
            Next Step
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { image } = state;

  return {
    image
  };
}

export default connect(mapStateToProps, { updateImage, clearState })(Wizard2);

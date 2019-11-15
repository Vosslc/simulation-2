import React, { Component } from "react";

export default class Wizard2 extends Component {
  constructor() {
    super();

    this.state = {
      imageUrl: ""
    };
  }

  // ******METHODS******//

  handleChangeImageUrl(value) {
    this.setState({ imageUrl: value });
  }

  render() {
    const { imageUrl } = this.state
    return (
      <div>
        <div className="Image_URL">
          <h3>Image URL</h3>
          <input
            className="name__input"
            placeholder="Image URL"
            value={imageUrl}
            onChange={e => this.handleChangeImageUrl(e.target.value)}
          />
        </div>
        <button className="complete-btn" onClick={() => this.props.history.push("/wizard1")}>Back</button>
        <button className="complete-btn" onClick={() => this.props.history.push("/wizard3")}>Next Step</button>
      </div>
    );
  }
}

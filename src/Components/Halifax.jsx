import React, { Component } from "react";

class Halifax extends Component {
  state = {};
  render() {
    return (
      <div className="halifax-main">
        <div>
          <img src="./assets/Halifax@2x.png" alt="Halifax@2x" height="65px" />
        </div>
        <div className="hover-text">
            <div>Banks:</div>
            <div>Standing Instructions:</div>
            <div>Min Balance:</div>
        </div>
        <div className="hover-text">Available Balance</div>
      </div>
    );
  }
}

export default Halifax;

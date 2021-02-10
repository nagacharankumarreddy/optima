import React, { Component } from "react";
import creditdata from "../credit.json";

class Natwest extends Component {
  state = {};
  render() {
    return (
      <div className="hover-card-main">
        <div>
          <img src="./assets/RBS@2x.png" alt="Halifax@2x" height="110px" />
        </div>
        <div className="hover-text-left">
          <div>
            <div className="head">Banks</div>
            <div>{creditdata.banks[1].bankName}</div>
          </div>
          <div>
            <div className="head">Credit limit</div>
            <div> &#8356;{creditdata.banks[1].accounts[0].creditLimit}</div>
          </div>
          <div>
            <div className="head">Available Credit</div>
            <div> &#8356;{creditdata.banks[1].accounts[0].availableCredit}</div>
          </div>
        </div>
        <div className="hover-text-right">
          <div>
            <div className="head">Min Due Balance</div>
            <div>&#8356;{creditdata.banks[1].accounts[0].minBalanceDue}</div>
          </div>
          <div>
            <div className="head">Due Date</div>
            {new Date(eval(creditdata.banks[1].accounts[0].dueDate)).toDateString()}

          </div>
        </div>
      </div>
    );
  }
}

export default Natwest;

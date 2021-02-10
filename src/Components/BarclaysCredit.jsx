import React, { Component } from "react";
import creditdata from "../credit.json";

class BarclaysCredit extends Component {
  state = {};
  render() {
    return (
      <div className="hover-card-main">
        <div>
          <img src="./assets/Barclays2@2x.png" alt="Halifax@2x" height="110px" />
        </div>
        <div className="hover-text-left ">
          <div>
            <div className="head">Banks</div>
            <div>{creditdata.banks[2].bankName}</div>
          </div>
          <div>
            <div className="head">Remaining Full Term</div>
            <div>
              {" "}
              &#8356;{creditdata.banks[2].accounts[0].remainingFullTerm}
            </div>
          </div>
        </div>
        <div className="hover-text-right">
          <div>
            <div className="head">Principle Due </div>
            <div>&#8356;{creditdata.banks[2].accounts[0].totalBalanceDue}</div>
          </div>
          <div>
            <div className="head">Due Date</div>
            {new Date(
              eval(creditdata.banks[2].accounts[0].dueDate)
            ).toDateString()}
          </div>
        </div>
      </div>
    );
  }
}

export default BarclaysCredit;

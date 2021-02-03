import React, { Component } from "react";
import userdata from "../userdata.json";
import { GoGraph } from "react-icons/go";

const udata = userdata;
class Financials extends Component {
  state = {};
  style = { position: "absolute", left: "114px", top: "53px" };
  render() {
    return (
      <div className="main">
        <h2 style={this.style}>My Financials</h2>
        <div className="main-left">
          <div className="main-left-top">
            <div className="mltone">
              <span>Debit accounts</span>
              <br />
              <span className="tdi-digits">{udata.noOfDebitAccounts}</span>
              <br />
              <span>Credit accounts</span>
              <br />
              <span className="tdi-digits">{udata.noOfCreditAccounts} </span>
              <br />
            </div>
            <div class="vertical"></div>
            <div className="mlttwo">
              <span>Debit balance</span>
              <br />
              <span className="tdi-digits">
                &#8356; {udata.totalAvailableDebitBalance}
              </span>
              <br />
              <span>Credit Outstanding</span>
              <br />
              <span className="tdi-digits">
                &#8356; {udata.totalAvailableCreditBalance}
              </span>
              <br />
            </div>
            <div className="mltthree">
              <p id="mltthree-text">
                Looking for best option to maximize your savings and optimise
                your expenses
              </p>
              <button className="btn btn-warning btn-xs">
                {" "}
                &nbsp;&nbsp;Yes&nbsp;&nbsp;
              </button>
            </div>
          </div>
          <div className="main-left-bottom">
            <div className="main-left-bottom-left">
              <div>
                <div style={{ float: "left" }}>
                  <h3>Debit Accounts</h3>
                </div>
                <div
                  style={{
                    float: "right",
                  }}
                >
                  <button className="btn  ">
                    <GoGraph />
                  </button>
                </div>
              </div>
              <div><img src="./assets/card.jpg" alt="" height="100px" /></div>
              <div></div>



            </div>
            <div className="main-left-bottom-right">
              <div>
                <div style={{ float: "left" }}>
                  <h3>Credit Accounts</h3>
                </div>
                <div
                  style={{
                    float: "right",
                  }}
                >
                  <button className="btn">
                    <GoGraph />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-right">
          <img src="./assets/imgone.png" alt="" className="image" />
        </div>
      </div>
    );
  }
}

export default Financials;

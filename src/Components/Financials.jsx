import React, { Component } from "react";
import userdata from "../userdata.json";
import { GoArrowRight } from "react-icons/go";
import creditdata from "../credit.json";
import debitdata from "../debit.json";
import { GoGraph } from "react-icons/go";
import { BsFillInfoCircleFill } from "react-icons/bs";
const udata = userdata;


class Financials extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <div className="main-left">
          <div>
            <h2>My Financials</h2>
          </div>
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
            <div className="vertical"></div>
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
              <button className="btn btn-success btn-xs">
                {" "}
                &nbsp;&nbsp;Yes&nbsp;
                <GoArrowRight className="yesarrow" />
                &nbsp;
              </button>
            </div>
          </div>
          <div className="main-left-bottom">
            <div className="main-left-bottom-left">
              <div className="inner-head">
                <div
                  style={{
                    fontSize: "Larger",
                    fontWeight: "bold",
                    marginLeft: 0,
                  }}
                >
                  <span>Debit Accounts</span>
                </div>
                <div>
                  <button className="btn  ">
                    <GoGraph />
                  </button>
                </div>
              </div>
              <div className="inner">
                <div className="inner-one">
                  <div className="cardimage">
                    <img
                      src="./assets/Halifax@2x.png"
                      alt="Halifax@2x"
                      height="65px"
                    />
                  </div>
                  <div>
                    {debitdata.banks[0].bankName}
                    <br />
                    <span className="intRate">
                      {debitdata.banks[0].accounts[0].interestRate}
                      &#37;&nbsp;AER
                    </span>
                  </div>
                </div>
                <div className="inner-two">
                  {debitdata.banks[0].accounts[0].accountType}
                  &nbsp;|&nbsp;&#8356;{debitdata.banks[0].accounts[0].balance}
                </div>
              </div>
              <div className="inner">
                <div className="inner-one">
                  <div className="cardimage">
                    <img
                      src="./assets/HSBC@2x.png"
                      alt="HSBC@2x"
                      height="65px"
                    />
                  </div>
                  <div>
                    {debitdata.banks[1].bankName}
                    <br />
                    <span className="intRate">
                      {debitdata.banks[1].accounts[0].interestRate}
                      &#37;&nbsp;AER
                    </span>
                  </div>
                </div>
                <div className="inner-two">
                  {debitdata.banks[1].accounts[0].accountType}
                  &nbsp;|&nbsp;&#8356;{debitdata.banks[1].accounts[0].balance}
                </div>
              </div>

              <div className="inner">
                <div className="inner-one">
                  <div className="cardimage">
                    <img
                      src="./assets/Barclays@2x.png"
                      alt="Barclays@2x"
                      height="65px"
                    />
                  </div>
                  <div>
                    {debitdata.banks[2].bankName}
                    <br />
                    <span className="intRate">
                      {debitdata.banks[2].accounts[0].interestRate}
                      &#37;&nbsp;AER
                    </span>
                  </div>
                </div>
                <div className="inner-two">
                  <div>{debitdata.banks[2].accounts[0].accountType}</div>
                  <div>|&#8356;{debitdata.banks[2].accounts[0].balance}</div>
                </div>
              </div>
            </div>

            <div className="main-left-bottom-right">
              <div className="inner-head">
                <div
                  style={{
                    fontSize: "Larger",
                    fontWeight: "bold",
                    marginLeft: 0,
                  }}
                >
                  <span>Credit Accounts</span>
                </div>
                <div>
                  <button className="btn  ">
                    <GoGraph />
                  </button>
                </div>
              </div>
              <div className="inner">
                <div className="inner-one">
                  <div className="cardimage">
                    <img
                      src="./assets/NatWest@2x.png"
                      alt="NatWest@2x"
                      height="65px"
                    />
                  </div>
                  <div>
                    {creditdata.banks[0].bankName}
                    <br />
                    <span className="intRate">
                      {creditdata.banks[0].accounts[0].apr}
                      &#37;&nbsp;APR
                    </span>
                    <br />
                    <span style={{ color: "red" }}>
                      <BsFillInfoCircleFill />
                    </span>
                    {/* <span>
                      {(  new Date().setDate(new Date().getDate())) /
                        86400000}
                    </span> */}
                  </div>
                </div>
                <div className="inner-two">
                  {creditdata.banks[0].accounts[0].accountType}
                  &nbsp;|&nbsp;&#8356;
                  {creditdata.banks[0].accounts[0].totalBalanceDue}
                </div>
              </div>
              <div className="inner">
                <div className="inner-one">
                  <div className="cardimage">
                    <img
                      src="./assets/RBS@2x.png"
                      alt="Halifax@2x"
                      height="65px"
                    />
                  </div>
                  <div>
                    {creditdata.banks[1].bankName}
                    <br />
                    <span className="intRate">
                      {creditdata.banks[1].accounts[0].apr}
                      &#37;&nbsp;APR
                    </span>
                    <br />
                    <span style={{ color: "red" }}>
                      <BsFillInfoCircleFill />
                    </span>
                  </div>
                </div>
                <div className="inner-two">
                  {creditdata.banks[1].accounts[0].accountType}
                  &nbsp;|&nbsp;&#8356;
                  {creditdata.banks[1].accounts[0].totalBalanceDue}
                </div>
              </div>

              <div className="inner">
                <div className="inner-one">
                  <div className="cardimage">
                    <img
                      src="./assets/Barclays2@2x.png"
                      alt="Halifax@2x"
                      height="65px"
                    />
                  </div>
                  <div>
                    {creditdata.banks[2].bankName}
                    <br />
                    <span className="intRate">
                      {creditdata.banks[2].accounts[0].interestRate}
                      &#37;&nbsp;APR
                    </span>
                    <br />
                    <span style={{ color: "red" }}>
                      <BsFillInfoCircleFill />
                    </span>
                  </div>
                </div>
                <div className="inner-two">
                  {creditdata.banks[2].accounts[0].accountType}
                  &nbsp;|&nbsp;&#8356;
                  {creditdata.banks[2].accounts[0].minMonthlyPayment}
                </div>
              </div>
              <div className="inner-opt-button">
                <div>
                  <button className="btn btn-success btn-xs">
                    Optimize&nbsp;
                    <GoArrowRight className="optimizearrow" />{" "}
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

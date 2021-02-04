import React, { Component } from "react";
import userdata from "../userdata.json";
 import image from "../assets/imgone.png";
import { BiArrowFromLeft, BiArrowFromRight, BiArrowFromTop, BiBarChart, BiBarChartAlt, BiBarChartAlt2, BiBarChartSquare, BiChart } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { GiChart, GiStaticWaves } from "react-icons/gi";
import { RiBarChartGroupedFill } from "react-icons/ri";
import { CgChart } from "react-icons/cg";
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
                &#8356; {udata.totalAvailableCreditBalance}{" "}
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
                &nbsp;&nbsp;Yes&nbsp;<GoArrowRight className="yesarrow" />&nbsp;
              </button>
            </div>
          </div>
          <div className="main-left-bottom">

            <div className="main-left-bottom-left">
              <h1 id="debit">Debit accounts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BiBarChartAlt className="graph" /></h1>
            </div>

            <div className="main-left-bottom-right">

             <div className="main-left-bottom-right-top">
               <h1 id="credit">Credit accounts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BiBarChartAlt className="graph" /></h1>
             </div>

              <div className="main-left-bottom-right-middle">

              </div>

              <div className="main-left-bottom-right-bottom">
               <button className="btn btn-success btn-xs" >{" "}
               &nbsp;&nbsp;&nbsp;Optimize&nbsp;<GoArrowRight className="optimizearrow" /> &nbsp;&nbsp;&nbsp;</button>
              </div>

            </div>

          </div>
        </div>

        <div className="main-right">
          <img src="./assets/imgone.png" alt="" className="image" />
          {/* <img src={"image"} alt="cant load" height="140px" width="50px"/> */}
        </div>
      </div>
    );
  }
}

export default Financials;
<span style={{ float: "right", marginRight: 0 }}>
                    <button className="btn  ">
                      <GoGraph />
                    </button>
                  </span>
import { GoGraph } from "react-icons/go";
import React, { Component } from "react";

class Hsbc extends Component {
  constructor(props) {
    super(props);
    this.state = { data: []};
    this.getDebitData = this.getDebitData.bind(this);
  }

  async componentDidMount(){
    var getVal = await this.getDebitData();
    this.setState({ data: getVal });
    console.log(this.state);
  }

  async getDebitData() {
    const response = await fetch('http://localhost:8000/debit');
    const json = await response.json();
    return json;
  }
  render() {
    if(this.state.data[0]){
    return (
      <div className="hover-card-main">
        <div>
          <img src="./assets/HSBC@2x.png" alt="HSBC@2x" height="110px" />
        </div>
        <div className="hover-text-left">
          <div>
            <div className="head">Banks</div>
            <div>{this.state.data[0].banks[1].bankName}</div>
          </div>
          <div>
            <div className="head">Standing Instructions</div>
            <div> &#8356;{this.state.data[0].banks[1].accounts[0].standingInst}</div>
          </div>
          <div>
            <div className="head">Min Balance</div>
            <div> &#8356;{this.state.data[0].banks[1].accounts[0].minBalance}</div>
          </div>
        </div>
        <div className="hover-text-right">
          <div className="head">Available Balance</div>
          <div>&#8356;{this.state.data[0].banks[1].accounts[0].balance}</div>
        </div>

      </div>
    );
    }
    else{
      return (<h1  >
        <div class="spinner-grow text-muted"></div>
        <span style={{
              fontSize: "20px",
              color:"black"
            }}>Loading..</span>
        </h1>  )
    }
  }
}
export default Hsbc;

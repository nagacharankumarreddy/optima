import React, { Component } from "react";

class Natwest extends Component {

  constructor(props) {
    super(props);
    this.state = { data: []};
    this.getCreditData = this.getCreditData.bind(this);
  }

  async componentDidMount(){
    var getVal = await this.getCreditData();
    this.setState({ data: getVal });
    console.log(this.state);
  }

  async getCreditData() {
    const response = await fetch('http://localhost:8000/credit');
    const json = await response.json();
    return json;
  }

  render() {
    if(this.state.data[0]){
      return (
        <div className="hover-card-main">
          <div>
            <img src="./assets/NatWest@2x.png" alt="Halifax@2x" height="110px" />
          </div>
          <div className="hover-text-left">
            <div>
              <div className="head">Banks</div>
              <div>{this.state.data[0].banks[0].bankName}</div>
            </div>
            <div>
              <div className="head">Credit limit</div>
              <div> &#8356;{this.state.data[0].banks[0].accounts[0].creditLimit}</div>
            </div>
            <div>
              <div className="head">Available Credit</div>
              <div> &#8356;{this.state.data[0].banks[0].accounts[0].availableCredit}</div>
            </div>
          </div>
          <div className="hover-text-right">
            <div>
              <div className="head">Min Due Balance</div>
              <div>&#8356;{this.state.data[0].banks[0].accounts[0].minBalanceDue}</div>
            </div>
            <div>
              <div className="head">Due Date</div>
              <div>
                  {new Date(eval(this.state.data[0].banks[0].accounts[0].dueDate)).toDateString()}
              </div>
            </div>
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

export default Natwest;

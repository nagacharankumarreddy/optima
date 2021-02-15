import React, { Component } from "react";


class BarclaysCredit extends Component {
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
    if (this.state.data[0]){
    return (
      <div className="hover-card-main">
        <div>
          <img src="./assets/Barclays2@2x.png" alt="Halifax@2x" height="110px" />
        </div>
        <div className="hover-text-left ">
          <div>
            <div className="head">Banks</div>
            <div>{this.state.data[0].banks[2].bankName}</div>
          </div>
          <div>
            <div className="head">Remaining Full Term</div>
            <div>
              {" "}
              &#8356;{this.state.data[0].banks[2].accounts[0].remainingFullTerm}
            </div>
          </div>
        </div>
        <div className="hover-text-right">
          <div>
            <div className="head">Principle Due </div>
            <div>&#8356;{this.state.data[0].banks[2].accounts[0].totalBalanceDue}</div>
          </div>
          <div>
            <div className="head">Due Date</div>
            {new Date(
              eval(this.state.data[0].banks[2].accounts[0].dueDate)
            ).toDateString()}
          </div>
        </div>
      </div>
    );}
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

export default BarclaysCredit;

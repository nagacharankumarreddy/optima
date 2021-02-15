import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiWalletAlt } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { GiPiggyBank } from "react-icons/gi";
import { CgMail } from "react-icons/cg";
import Financials from "./Components/Financials.jsx";

function App() {
  return (
    <div>
      <div className="Header">
        <div className="header-left">
          <span id="main-head">optima</span>
          <span id="sub">Pay Less,Save More</span>
          <span id="bell">
            <img src="./assets/bell.png" alt="" height="30px" />
          </span>
        </div>
        <div className="header-right">
          <img src="./assets/contact.jpeg" alt="" height="30px" />
          <select name="users" id="users">
            <option value="Alice">Alice</option>
            <option value="Vinod">Vinod</option>
            <option value="Laxmi">Laxmi</option>
            <option value="Megha">Megha</option>
            <option value="Charan">Charan</option>
          </select>
        <div className="btn">
        <img src="./assets/logout.png" alt="" height="29px" /> 
        </div>

        </div>
      </div>
      <div>
        <div className="menu">
          <a href="/home" className="active">
            <AiOutlineHome />
          </a>
          <a href="/test">
            <BiWalletAlt />
          </a>
          <a href="/">
            <RiMoneyDollarCircleLine />
          </a>
          <a href="/">
            <GoGraph />
          </a>
          <a href="/">
            <GiPiggyBank />
          </a>
          <a href="/">
            <CgMail />
          </a>
        </div>
      </div>
      <div>
        <div>
          <Router>
            <Route path="/home" default component={Financials} />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;

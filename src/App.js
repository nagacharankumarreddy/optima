import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {AiOutlineBell} from "react-icons/ai"
import { IoIosContact } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { BiWalletAlt } from "react-icons/bi";
import { RiArrowDropDownFill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { GiPiggyBank } from "react-icons/gi";
import { CgMail } from "react-icons/cg";
import { GrLogout } from "react-icons/gr";
import Financials from "./Components/Financials.jsx";
function App() {
  return (
    <div>
      <div className="Header">
        <div className="header-left">
          <span id="main-head">optima</span>
          <span id="sub">Pay Less,Save More</span>
          <span id="bell">
            <AiOutlineBell/>
          </span>
        </div>
        <div className="header-right">
          <IoIosContact className="contact" /> 
          <span id="alice">Alice</span>
          <RiArrowDropDownFill className="dropdown" />
          <GrLogout className="logout" />
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
            
            <Route path="/home" default  component={Financials} />
            <Route path="/test" default  component={Financials} />

          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { logo } from "./import";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineWallet,
  AiOutlineStock,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  HiOutlineScale,
  HiOutlineCurrencyDollar,
  HiOutlineNewspaper,
} from "react-icons/hi";
import { RiAdvertisementLine } from "react-icons/ri";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar section__margin">
      <Link to="/">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="navbar-content">
        <Link to="/">
          <div className="navbar-content-component">
            <AiOutlineHome size="2em" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/cryptocurrencies">
          <div className="navbar-content-component">
            <HiOutlineCurrencyDollar size="2em" />
            <p>Cryptocurrencies</p>
          </div>
        </Link>
        {/* <Link to="/exchanges">
          <div className="navbar-content-component">
            <HiOutlineScale size="2em" />
            <p>Exchanges</p>
          </div>
        </Link> */}
        {/* <Link to="/markets">
          <div className="navbar-content-component">
            <AiOutlineStock size="2em" />
            <p>Markets</p>
          </div>
        </Link> */}
        <Link to="/news">
          <div className="navbar-content-component">
            <HiOutlineNewspaper size="2em" />
            <p>News</p>
          </div>
        </Link>
        {/* <div className="navbar-content-component">
          <AiOutlineWallet size="2em" />
          <p>Wallets</p>
        </div> */}
        {/* <div className="navbar-content-component">
          <RiAdvertisementLine size="2em" />
          <p>Ad Pages</p>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;

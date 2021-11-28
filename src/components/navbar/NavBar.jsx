import React from "react";
import {
  logo,
  accountIcon,
  homeIcon,
  marketIcon,
  adPageIcon,
  settingIcon,
  tradeIcon,
  walletIcon,
} from "./import";
import {AiOutlineHome, AiOutlineUser, AiOutlineWallet, AiOutlineStock, AiOutlineSetting} from 'react-icons/ai'
import {HiOutlineScale} from 'react-icons/hi'
import {RiAdvertisementLine} from 'react-icons/ri'
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar section__margin">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-content">
        <div className="navbar-content-component">
          <AiOutlineHome size="2em"/>
          <p>Home</p>
        </div>
        <div className="navbar-content-component">
          <AiOutlineUser size="2em"/>
          <p>Account</p>
        </div>
        <div className="navbar-content-component">
          <AiOutlineWallet size="2em"/>
          <p>Wallets</p>
        </div>
        <div className="navbar-content-component">
          <HiOutlineScale size="2em"/>
          <p>Buy/Sell</p>
        </div>
        <div className="navbar-content-component">
          <AiOutlineStock size="2em"/>
          <p>Markets</p>
        </div>
        <div className="navbar-content-component">
          <AiOutlineSetting size="2em"/>
          <p>Settings</p>
        </div>
        <div className="navbar-content-component">
          <RiAdvertisementLine size="2em"/>
          <p>Ad Pages</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

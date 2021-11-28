import React from "react";
import "./userDetail.css";
import user from "../../assets/user.jpg";
import {
  BsMinecartLoaded,
  BsFillBarChartFill,
  BsCashCoin,
} from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";

const totalMinedStyle = {
  color: "black",
  opacity: 1,
};

const UserDetail = () => {
  return (
    <div className="userdetail-container user_detail__padding">
      <div className="userdetail-container-heading">
        <p>Hi, Finnegan</p>
        <div>
          <img src={user} alt="user" />
        </div>
      </div>
      <div className="userdetail-container-content">
        <div className="userdetail-container-content-card">
          <div className="userdetail-container-content-card-icon total-mined">
            <BsMinecartLoaded size="2em" style={totalMinedStyle} />
          </div>
          <div>
            <p>Total mined</p>
            <h4>$5,596</h4>
          </div>
        </div>
        <div className="userdetail-container-content-card">
          <div className="userdetail-container-content-card-icon total-networth">
            <BsFillBarChartFill size="2em" style={totalMinedStyle} />
          </div>
          <div>
            <p>Total Net Worth</p>
            <h4>$51,596</h4>
          </div>
        </div>
        <div className="userdetail-container-content-card">
          <div className="userdetail-container-content-card-icon total-earnings">
            <BsCashCoin size="2em" style={totalMinedStyle} />
          </div>
          <div>
            <p>Total mined</p>
            <h4>$5,596</h4>
          </div>
        </div>
        <div className="userdetail-container-content-card">
          <div className="userdetail-container-content-card-icon harvested-losses">
            <GiPayMoney size="2em" style={totalMinedStyle} />
          </div>
          <div>
            <p>Harvested Losses</p>
            <h4>$0.00</h4>
          </div>
        </div>
      </div>
      <div className="userdetail-container-button">
        <p>Create a Swap</p>
      </div>
      <p className="userdetail-container-message">
        Our high-yield account built to help you earn more on every dollar you
        save
      </p>
    </div>
  );
};

export default UserDetail;

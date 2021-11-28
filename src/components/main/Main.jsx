import React from "react";
import Cards from "../cards/Cards";
import Swaps from "../swaps/Swaps";
import swaps from "../swaps/Swaps";
import TransactionHistory from "../transactionHistory/TransactionHistory";
import "./main.css";


const Main = () => {
  return (
    <div className="main-container section__padding">
      <Cards />
      <div className="main-container-bottom">
          <div className="main-container-bottom-left">
              <TransactionHistory />
          </div>
          <div className="main-container-bottom-right">
              <Swaps />
          </div>
      </div>
    </div>
  );
};

export default Main;

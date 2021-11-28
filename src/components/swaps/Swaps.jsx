import React from "react";
import "./swaps.css";

import Transaction from "../transaction/Transaction";

const Swaps = () => {
  return (
    <div className="swaps-container">
      <div className="swaps-container-heading">
        <h3>Recent Swaps</h3>
        <div className="swaps-container-heading-button">
          <p>View more</p>
        </div>
      </div>
      <div className="swaps-container-content">
        <div className="swaps-container-content-heading">
          <p>Pair</p>
          <p>Value</p>
        </div>
        <div className="swaps-container-content-transactions">
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
        </div>
      </div>
    </div>
  );
};

export default Swaps;

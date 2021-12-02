import React, { useState, useEffect } from "react";
import "./globaldata.css";
import { fetchGlobalStats } from "../../api";
import millify from "millify";

const GlobalData = () => {
  
  const [globalStats, setGlobalStats] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const temp = await fetchGlobalStats();
      setGlobalStats(temp);
    };
    fetchApi();
  }, []);
  if (globalStats.length === 0) return "Loading";

  const {
    total24hVolume,
    totalCoins,
    totalExchanges,
    totalMarketCap,
    totalMarkets,
  } = globalStats;

  return (
    <div className="global-data-container section__padding">
      <div className="global-data-header">
        <h1>Global Data</h1>
      </div>
      <div className="global-data-grid">
        <div className="global-data-grid-card">
          <div className="global-data-grid-card-content">
            <h2>Total 24 Hour Volume</h2>
            <p>{millify(total24hVolume)}</p>
          </div>
        </div>
        <div className="global-data-grid-card">
          <div className="global-data-grid-card-content">
            <h2>Total Market Cap</h2>
            <p>{millify(totalMarketCap)}</p>
          </div>
        </div>
        <div className="global-data-grid-card">
          <div className="global-data-grid-card-content">
            <h2>Total Market</h2>
            <p>
              {totalMarkets.toLocaleString("en", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
          </div>
        </div>
        <div className="global-data-grid-card">
          <div className="global-data-grid-card-content">
            <h2>Total Coins</h2>
            <p>
              {totalCoins.toLocaleString("en", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
          </div>
        </div>
        <div className="global-data-grid-card">
          <div className="global-data-grid-card-content">
            <h2>Total Exchanges</h2>
            <p>
              {totalExchanges.toLocaleString("en", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalData;

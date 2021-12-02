import "./cryptocurrencies.css";
import React, { useState, useEffect } from "react";
import { fetchCoins } from "../../api";
import { Link } from "react-router-dom";

const Cryptocurrencies = ({ simplified }) => {
  const [coins, setCoins] = useState([]);
  const count = simplified ? 10 : 100;
  const headerTitle = simplified
    ? "Top 10 Cryptocurrencies"
    : "Top 100 Cryptocurrencies";

  useEffect(() => {
    const fetchApi = async () => {
      const temp = await fetchCoins(count);
      setCoins(temp);
    };
    fetchApi();
  }, []);
  if (coins.length === 0) return "Loading";
  console.log(coins?.coins);

  return (
    <div className="crypto-container section__padding">
      <div className="crypto-header">
        <h2>{headerTitle}</h2>
        {simplified && <h4>See More</h4>}
      </div>
      <div className="crypto-coin">
        <div className="crypto-coin-row header">
          <div className="crypto-coin-header">
            <p className="coin-header-text">Crytocurrency</p>
          </div>
          <div className="crypto-coin-row-data">
            <p className="coin-header-text">Price</p>
            <p className="coin-header-text">Market Cap</p>
            <p className="coin-header-text">Volume</p>

            <p className="coin-header-text">Change(%)</p>
          </div>
        </div>
        {coins?.coins.map(
          ({id,
            iconUrl,
            name,
            symbol,
            rank,
            price,
            volume,
            change,
            marketCap,
          }) => (
            <div className="crypto-coin-row" key={rank}>
              <Link to={`/crypto/${id}`}>
                <div className="crypto-coin-row-head">
                  <img src={iconUrl} alt="crypto" />
                  <h1>{name}</h1>
                  <p className="crypto-coin-row-head-symbol">({symbol})</p>
                </div>
              </Link>
              <div className="crypto-coin-row-data">
                <p className="crypto-coin-row-data-price">
                  $
                  {Number(price).toLocaleString("en", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <p className="crypto-coin-row-data-marketcap">
                  $
                  {Number(marketCap).toLocaleString("en", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </p>
                <p className="crypto-coin-row-data-volume">
                  {volume.toLocaleString("en", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </p>
                {change < 0 ? (
                  <p className="crypto-coin-row-data-percent red">
                    {change.toFixed(2)}%
                  </p>
                ) : (
                  <p className="crypto-coin-row-data-percent green">
                    {change.toFixed(2)}%
                  </p>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Cryptocurrencies;

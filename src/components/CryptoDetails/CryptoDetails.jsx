import "./cryptodetails.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchCoinDetail } from "../../api";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import LineChart from "../LineChart/LineChart";
import millify from "millify";
import { News } from "..";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [coinDetails, setCoinDetails] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const temp = await fetchCoinDetail(coinId);
      setCoinDetails(temp);
    };
    fetchApi();
  }, []);

  if (coinDetails.length === 0) return "Loading";

  console.log(coinDetails);

  const {
    change,
    description,
    circulatingSupply,
    marketCap,
    totalSupply,

    iconUrl,
    links,
    name,
    numberOfExchanges,
    numberOfMarkets,
    price,
    rank,
    socials,
    symbol,
    type,
    volume,
    websiteUrl,
  } = coinDetails;
  return (
    <div className="crypto-container">
      <div className="crypto-header section__padding">
        <div className="crypto-header-detail">
          <div className="crypto-header-detail-image">
            <img src={iconUrl} alt="icon" />
          </div>
          <h2>{name}</h2>
          <div className="crypto-header-detail-symbol">
            <p>{symbol}</p>
          </div>
        </div>
        <div className="crypto-header-price">
          <div className="crypto-header-price-info">
            <p>{symbol} Price</p>
            <h1>
              $
              {Number(price).toLocaleString("en", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h1>
          </div>
          <div
            className={`crypto-header-price-info-percent ${
              change > 0 ? "green" : "red"
            }`}
          >
            {change > 0 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
            <p>{change}%</p>
          </div>
        </div>
      </div>
            <div className="section__padding"><LineChart id={coinId} coinName={name} /></div>
      

      <div className="crypto-detail-grid section__padding">
        <div className="crypto-detail-grid-card">
          <div className="crypto-detail-grid-card-content">
            <h2>Rank</h2>
            <p>#{rank}</p>
          </div>
        </div>
        <div className="crypto-detail-grid-card">
          <div className="crypto-detail-grid-card-content">
            <h2>Market Cap</h2>
            <p>{millify(marketCap)}</p>
          </div>
        </div>
        <div className="crypto-detail-grid-card">
          <div className="crypto-detail-grid-card-content">
            <h2>volume</h2>
            <p>{millify(volume)}</p>
          </div>
        </div>
        <div className="crypto-detail-grid-card">
          <div className="crypto-detail-grid-card-content">
            <h2>Number Of Exchanges</h2>
            <p>
              {numberOfExchanges.toLocaleString("en", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
          </div>
        </div>
        <div className="crypto-detail-grid-card">
          <div className="crypto-detail-grid-card-content">
            <h2>Number Of Markets</h2>
            <p>
              {numberOfMarkets.toLocaleString("en", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
          </div>
        </div>

        <div className="crypto-detail-grid-card">
          <div className="crypto-detail-grid-card-content">
            <h2>Circulating Supply</h2>
            <p>{millify(circulatingSupply)}</p>
          </div>
        </div>

        <div className="crypto-detail-grid-card">
          <div className="crypto-detail-grid-card-content">
            <h2>Total Supply</h2>
            <p>{millify(totalSupply)}</p>
          </div>
        </div>
      </div>

      <News query={name}/>
    </div>
  );
};

export default CryptoDetails;

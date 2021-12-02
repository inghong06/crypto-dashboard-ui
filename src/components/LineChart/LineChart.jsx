import "./linechart.css";
import React, { useState, useEffect } from "react";
import { fetchCoinHistory } from "../../api";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const LineChart = ({ id, coinName }) => {
  const [coinHistory, setCoinHistory] = useState([]);
  const [timeFrame, setTimeFrame] = useState("1y");
  const coinPrice = [];
  const coinTimestamp = [];

  const handleClick = (data) => {
    setTimeFrame(data);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const temp = await fetchCoinHistory(id, timeFrame);
      setCoinHistory(temp);
    };
    fetchApi();
  }, [timeFrame]);

  if (coinHistory.length === 0) return "Loading";
  for (let i = 0; i < coinHistory.length; i += 1) {
    coinPrice.push(coinHistory[i].price);
  }

  for (let i = 0; i < coinHistory.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory[i].timestamp).toLocaleDateString());
  }
  console.log(coinHistory);

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h4>{coinName} Price Chart</h4>
        <div className="timeframe-container">
          <div
            className={`timeframe-container-button ${
              timeFrame == "7d" ? "focus" : ""
            }`}
            onClick={() => handleClick("7d")}
          >
            <p>7D</p>
          </div>
          <div
            className={`timeframe-container-button ${
              timeFrame == "30d" ? "focus" : ""
            }`}
            onClick={() => handleClick("30d")}
          >
            <p>1M</p>
          </div>
          {/* <div
          className="timeframe-container-button"
          onClick={() => handleClick("3m")}
        >
          <p>3M</p>
        </div> */}
          <div
            className={`timeframe-container-button ${
              timeFrame == "1y" ? "focus" : ""
            }`}
            onClick={() => handleClick("1y")}
          >
            <p>1Y</p>
          </div>
          <div
            className={`timeframe-container-button ${
              timeFrame == "5y" ? "focus" : ""
            }`}
            onClick={() => handleClick("5y")}
          >
            <p>5Y</p>
          </div>
        </div>
      </div>
      <div className="linechart">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;

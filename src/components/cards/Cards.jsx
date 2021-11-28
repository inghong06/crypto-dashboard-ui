import React from 'react'
import './cards.css'
import btc from "../../assets/btc.svg";
import eth from "../../assets/eth.svg";
import ltc from "../../assets/ltc.svg";

const Cards = () => {
    return (
        <div className="main-container-cards">
        <div className="main-container-cards-content btc">
          <div className="main-container-cards-content-detail btc">
            <h3>BTC</h3>
            <div>
              <p>+0.26%</p>
            </div>
          </div>

          <p className="main-container-cards-content-fullname btc">
            Bitcoin to USD
          </p>
          <div className="main-container-cards-content-chart">
            <img src={btc} alt="chart" />
          </div>
          <h3 className="main-container-cards-content-amount">$22,710</h3>
          <p className="main-container-cards-content-portion">
            30% of your portfolio
          </p>
        </div>
        <div className="main-container-cards-content eth">
          <div className="main-container-cards-content-detail eth">
            <h3>ETH</h3>
            <div>
              <p>+0.26%</p>
            </div>
          </div>

          <p className="main-container-cards-content-fullname eth">
            Ethereum to USD
          </p>
          <div className="main-container-cards-content-chart">
            <img src={eth} alt="chart" />
          </div>
          <h3 className="main-container-cards-content-amount">$39,476</h3>
          <p className="main-container-cards-content-portion">
            30% of your portfolio
          </p>
        </div>
        <div className="main-container-cards-content ltc">
          <div className="main-container-cards-content-detail ltc">
            <h3>LTC</h3>
            <div>
              <p>+0.26%</p>
            </div>
          </div>

          <p className="main-container-cards-content-fullname ltc">
            Litecoin to USD
          </p>
          <div className="main-container-cards-content-chart">
            <img src={ltc} alt="chart" />
          </div>
          <h3 className="main-container-cards-content-amount">$29,170</h3>
          <p className="main-container-cards-content-portion">
            30% of your portfolio
          </p>
        </div>
      </div>
    )
}

export default Cards

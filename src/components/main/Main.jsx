import React from "react";
import "./main.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Cryptocurrencies,
  Exchanges,
  Markets,
  News,
  CryptoDetails,
} from "../../components";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
        {/* <Route exact path="/exchanges" element={<Exchanges />} />
        <Route exact path="/markets" element={<Markets />} /> */}
        <Route exact path="/news" element={<News query="cryptocurrency" />} />
        <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
      </Routes>
      <Footer />
    </div>

    // <div className="main-container section__padding">
    //   <Cards />
    //   <div className="main-container-bottom">
    //       <div className="main-container-bottom-left">
    //           <TransactionHistory />
    //       </div>
    //       <div className="main-container-bottom-right">
    //           <Swaps />
    //       </div>
    //   </div>
    // </div>
  );
};

export default Main;

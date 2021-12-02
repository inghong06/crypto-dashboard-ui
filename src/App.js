import React from "react";
import NavBar from "./components/navbar/NavBar";
import Main from "./components/main/Main";
import UserDetail from "./components/userDetail/UserDetail";
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
};

export default App;

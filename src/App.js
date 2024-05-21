import React from "react";
// import NewsLists from "./components/pages/NewsLists";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import logo from "./utils/Headline.png";
import Home from "./components/pages/Home";
import Nigerian from "./components/pages/Nigerian";
import Environment from "./components/pages/Environment";
import Politics from "./components/pages/Politics";
import Business from "./components/pages/Business";
import Entertainment from "./components/pages/Entertainment";

import { SearchProvider } from "./components/SearchContext";

function App() {
  return (
    <Router>
      {/* <div className="bg-white"> */}
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <SearchProvider>
              <Home />
            </SearchProvider>
          }
        ></Route>
        <Route exact path="/Nigerian" element={<Nigerian />}></Route>
        <Route exact path="/Environment" element={<Environment />}></Route>
        <Route exact path="/Politics" element={<Politics />}></Route>
        <Route exact path="/Business" element={<Business />}></Route>{" "}
        <Route exact path="/Entertainment" element={<Entertainment />}></Route>
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;

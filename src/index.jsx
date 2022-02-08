import React from "react";
import ReactDOM from "react-dom";
// on importe le router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// on importe les pages Home, Survey
import Home from "./pages/Home";
import Survey from "./pages/Survey";

// on importe les composants Header
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Survey />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

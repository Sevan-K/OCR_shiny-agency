import React from "react";
import ReactDOM from "react-dom";
// on importe le router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// on importe les pages Home, Survey, Results, Freelances
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";

// on importe les composants Header, Error
import Header from "./components/Header";
import Error from "./components/Error";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

/* -------------------------------------- */
/*          Secrtion des imports          */
/* -------------------------------------- */

import React from "react";
import ReactDOM from "react-dom";
// on importe le router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// on importe les pages Home, Survey, Results, Freelances
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";

// on importe les composants Header, Error, Footer
import Header from "./components/Header";
import Error from "./components/Error";
import Footer from "./components/Footer";

import "./style/dev.css";

// import du theme provider
import { ThemeProvider } from "./utils/context/ThemeProvider";

// import du style global
import GlobalStyle from "./utils/style/GlobalStyle";

/* --------------------------------------------- */
/*          Components creation section          */
/* --------------------------------------------- */
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="/results" element={<Results />} />
          <Route path="/freelances" element={<Freelances />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

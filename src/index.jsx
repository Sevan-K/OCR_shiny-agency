import React from "react";
import ReactDOM from "react-dom";
// on importe le router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// on importe le composant Home
import Home from "./pages/Home";
import Survey from "./pages/Survey";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/survey">
          <Survey />
        </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

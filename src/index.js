import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./main";
import "./stylesheets/main.scss";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>
);

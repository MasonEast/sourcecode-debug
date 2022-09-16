import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AliveScope } from "react-activation";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AliveScope>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AliveScope>
  </React.StrictMode>,
  document.getElementById("root")
);

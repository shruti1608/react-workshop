import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App user='Enter Username' password='Enter Password' style={{"fontSize":100}} />
  </React.StrictMode>,
 // React.createElement('h1',null,'hello!'),
  
  document.getElementById("root")
);


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App user="Enter Username" password="Enter Password"/>
  </React.StrictMode>,
 // React.createElement('h1',null,'hello!'),
  
  document.getElementById("root")
);


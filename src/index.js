import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Manufacturer from "./Manufacturer";
import Distributor from "./Distributor";
import Retailer from "./Retailer";
import ProductStatus from "./ProductStatus";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/manufacturer" element={<Manufacturer />}></Route>
        <Route path="/distributor" element={<Distributor />}></Route>
        <Route path="/retailer" element={<Retailer />}></Route>
        <Route path="/product-status" element={<ProductStatus />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

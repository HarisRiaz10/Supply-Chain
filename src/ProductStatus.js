import React from "react";
import { useState, useEffect } from "react";
import "./Manufacturer.css";
import Web3 from "web3";
import { STORAGE_ADDRESS, STORAGE_ABI } from "./config.js";

function ProductStatus() {
  const [pc, setPc] = useState("");
  const [address, setAddress] = useState("");
  const [isEffect, setEffect] = useState(0);

  const handleSubmit = (event) => {
    console.log("Id is: ", { pc });
    setEffect(1);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "productId") {
      setPc(value);
    }
  };

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      // For Loading Web3
      const ABISimpleStorage = require("./SupplyChain.json");
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        window.alert(
          "Non-Ethereum Browser Detected! You should consider trying MetaMask!"
        );
      }
      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts();
      setAddress(accounts[0]);
      const networkID = await web3.eth.net.getId();
      console.log("network id:", networkID);
      const networkData = ABISimpleStorage.networks[networkID];
      console.log("network data is: ", networkData);
      if (networkData) {
        const instance = new web3.eth.Contract(STORAGE_ABI, STORAGE_ADDRESS);
        console.log("Contract is: ", instance);
        await instance.methods
          .getStatus(1)
          .call()
          .then(console.log("Here is the product staus"));
      } else {
        window.alert("Smart Contract not deployed to detected network!");
      }
    };
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [isEffect]);

  //products[id].productStage

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Product Status</h1>
      <div className="form">
        <div className="form-body">
          <div className="productid">
            <label className="form__label" for="productId">
              Enter Product Id of product you want to find status of{" "}
            </label>
            <input
              className="form__input"
              type="number"
              value={pc}
              onChange={(e) => handleInputChange(e)}
              id="productId"
              placeholder="Product Id"
              style={{ marginLeft: "70px", marginTop: "20px" }}
            />
          </div>
        </div>
        <div class="footer">
          <button onClick={() => handleSubmit()} type="submit" class="btn">
            Search Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductStatus;

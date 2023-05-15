import React from "react";
import { useState, useEffect } from "react";
import "./Manufacturer.css";
import Web3 from "web3";
import { STORAGE_ADDRESS, STORAGE_ABI } from "./config.js";

function Manufacturer() {
  const [pc, setPc] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [manufacturerName, setManufacturerName] = useState("");
  const [address, setAddress] = useState("");
  const [isEffect, setEffect] = useState(0);

  const handleSubmit = (event) => {
    console.log("Id is: ", { pc });
    console.log("Name is: ", { name });
    console.log("Date is: ", { date });
    console.log("Name is: ", { manufacturerName });
    setEffect(1);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "productId") {
      setPc(value);
    }
    if (id === "productName") {
      setName(value);
    }
    if (id === "productDate") {
      setDate(value);
    }
    if (id === "manufacturerName") {
      setManufacturerName(value);
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
        const val = await instance.methods
          .addProduct(4, name, date, manufacturerName, accounts[0])
          .call({ from: "0xC04c91b05509751c8613AFf8B8911D139D4950F5" })
          .then(console.log("Product Added! "));
        const val2 = await instance.methods.packProduct(4).call();
      } else {
        window.alert("Smart Contract not deployed to detected network!");
      }
    };
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [isEffect]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Manufacturer</h2>
      <div className="form">
        <div className="form-body">
          <div className="productid">
            <label className="form__label" for="productId">
              Product Id{" "}
            </label>
            <input
              className="form__input"
              type="number"
              value={pc}
              onChange={(e) => handleInputChange(e)}
              id="productId"
              placeholder="Product Id"
              style={{ marginLeft: "70px" }}
            />
          </div>
          <div className="productname">
            <label className="form__label" for="productName">
              Product Name{" "}
            </label>
            <input
              type="text"
              id="productName"
              value={name}
              className="form__input"
              onChange={(e) => handleInputChange(e)}
              placeholder="Product Name"
              style={{ marginLeft: "40px" }}
            />
          </div>
          <div className="productdate">
            <label className="form__label" for="productDate">
              Product Date{" "}
            </label>
            <input
              type="text"
              id="productDate"
              className="form__input"
              value={date}
              onChange={(e) => handleInputChange(e)}
              placeholder="Product Date"
              style={{ marginLeft: "50px" }}
            />
          </div>
          <div className="manufacturername">
            <label className="form__label" for="manufacturerName">
              Manufacturer Name{" "}
            </label>
            <input
              className="form__input"
              type="text"
              id="manufacturerName"
              value={manufacturerName}
              onChange={(e) => handleInputChange(e)}
              placeholder="Manufacturer Name"
            />
          </div>
        </div>
        <div class="footer">
          <button onClick={() => handleSubmit()} type="submit" class="btn">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default Manufacturer;

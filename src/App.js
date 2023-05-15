import React, { Component } from "react";
import Web3 from "web3";
import { STORAGE_ADDRESS, STORAGE_ABI } from "./config.js";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    account: "",
    simpleContract: "",
  };

  componentDidMount() {
    //this.loadBlockchainData();
  }

  async loadBlockchainData() {
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
    this.setState({ account: accounts[0] });
    console.log("Account is: ", accounts[0]);
    const networkID = await web3.eth.net.getId();
    console.log("network id:", networkID);
    const networkData = ABISimpleStorage.networks[networkID];
    console.log("network data is: ", networkData);
    if (networkData) {
      const instance = new web3.eth.Contract(STORAGE_ABI, STORAGE_ADDRESS);
      this.setState({ simpleContract: instance });
      console.log("Contract is: ", instance);
      const val = await instance.methods
        .addProduct(4, "augmenten", "28-12-2022", "ABC", accounts[0])
        .call({
          from: "0xC04c91b05509751c8613AFf8B8911D139D4950F5",
          gasPrice: "20000000000",
        })
        .then(console.log("Product Added! "));
    } else {
      window.alert("Smart Contract not deployed to detected network!");
    }
    //const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    /*const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();*/
    /*const web3 = new Web3(
      new Web3.providers.HttpProvider("http://localhost:7545")
    );
    const accounts = await web3.eth.getAccounts();
    //console.log("Account are: ", accounts);
    this.setState({ account: accounts[0] });
    const instance = new web3.eth.Contract(STORAGE_ABI, STORAGE_ADDRESS);
    console.log(instance);
    this.setState({ simpleContract: instance });
    const val = await instance.methods
      .addProduct(
        "Insulin",
        "10-10-2022",
        "10-07-2023",
        "Diabetes is a metabolic disorder characterized by high blood sugar levels and is treated by insulin.",
        "+8"
      )
      .send({
        from: "0x5BC9eA08D8D9B06F6D455EE09e9A5CBCd5f41Ca1",
        gasPrice: "20000000000",
      })
      .then(console.log("Product Added!"));
    console.log("Value is: ", val);
    //var productC = await instance.methods.productCount().call();
    //console.log("Value is ", productC);
    //console.log("Value is: ", tempValue);
    /*console.log("Smart contract is: ", this.state.simpleContract);
    let tempValue1 = [];
    tempValue1 = await simpleStorage.methods.getVendingMachineBalance.call();
    let result = await tempValue1.send({ from: accounts[0] });
    console.log("Result is: ", result);
    simpleStorage.methods
      .restock(100)
      .call()
      .then(console.log("Restocked the donuts!"));
    this.setState({ value: tempValue1 });
    console.log("Vending machine balance is: ", this.state.value);
    <h3 style={{ textAlign: "center", marginTop: "100px" }}>
    Current Account connected is: {this.state.account}
    </h3>*/
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", marginTop: "10px" }}>
          Supply Chain Management in Blockchain
        </h1>
        <div className="btn">
          <Link to="/manufacturer">
            <button style={{ margin: "0px 20px" }}>Manufacturer</button>
          </Link>
          <Link to="/distributor">
            <button style={{ margin: "0px 20px" }}>Distributor</button>
          </Link>
          <Link to="/retailer">
            <button style={{ margin: "0px 20px" }}>Retailer</button>
          </Link>
          <Link to="/product-status">
            <button style={{ margin: "0px 20px" }}>Product Status</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default App;

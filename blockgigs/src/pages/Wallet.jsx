// pages/Wallet.js
import React from "react";
const eth = "../config/detect"

const Wallet = () => {
  return <div>
    <h1>Wallet Page</h1> 
    <button class="enableEthereumButton">Connect Ethereum</button>
    <h2>Account: <span class="showAccount"></span></h2>
   </div>;
};

export default Wallet;

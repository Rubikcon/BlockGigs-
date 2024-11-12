// pages/Wallet.js
import React from "react";
// const eth = "../config/detect"
import MetaMaskConnector from "../components/metamask/MetaMaskConnector"


const Wallet = () => {
  return (
    <div>
      <h1>Wallet Page</h1>
      <MetaMaskConnector />
    </div>
  );
};

export default Wallet;
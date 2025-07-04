import { useState, useEffect } from "react";
import { ethers } from "ethers";

const Button = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Meta Mask not detected");
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setWalletAddress(accounts[0]);
      setConnected(true);
    } catch (error) {
      console.error("connected erro", error);
    }
  };
  const disconnectWallet = () => {
    setWalletAddress("");
    setConnected(false);
  };
  useEffect(() => {
    const checkWallet = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          setWalletAddress(accounts[0].address);
          setConnected(true);
        }
      }
    };
    checkWallet();
  }, []);
  return (
    <>
      <div className=" btn  mt-1  rounded-md p-2  bg-blue-950 text-white">
        {connected ? (  
          <div className="">
            <p className="  p-3 ">
              <strong>Connected Wallet:</strong> {walletAddress}
            </p>
            <button className="" onClick={disconnectWallet}>
              Disconnect
            </button>
          </div>
        ) : (
          <button className=" text-center   " onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </>
  );
};

export default Button;

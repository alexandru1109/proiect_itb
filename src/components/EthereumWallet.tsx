import { useState } from "react";
import { ethers, BrowserProvider } from "ethers";

export default function EthereumWallet() {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [chainId, setChainId] = useState<string | null>(null);

  const connectEthereumWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);

        const network = await provider.getNetwork();
        setChainId(network.chainId.toString());

        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        const balanceBigInt = await provider.getBalance(address);
        setBalance(ethers.formatEther(balanceBigInt));
      } catch (error) {
        console.error("MetaMask connection error:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this app.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      {!account ? (
        <button
          onClick={connectEthereumWallet}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Connect MetaMask
        </button>
      ) : (
        <div>
          <p>
            <strong>Ethereum Account:</strong> {account}
          </p>
          <p>
            <strong>Balance:</strong> {balance} ETH
          </p>
          <p>
            <strong>Chain ID:</strong> {chainId}
          </p>
        </div>
      )}
    </div>
  );
}

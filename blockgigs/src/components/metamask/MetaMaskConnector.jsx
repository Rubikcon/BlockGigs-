import React, { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

const MetaMaskConnector = () => {
    const [account, setAccount] = useState(null);
    const [isMetaMaskAvailable, setIsMetaMaskAvailable] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [connecting, setConnecting] = useState(false); // For showing loading state on button

    // Initialize MetaMask and check if it's available
    useEffect(() => {
        const setupMetaMask = async () => {
            try {
                const provider = await detectEthereumProvider();
                if (provider && provider === window.ethereum) {
                    console.log("MetaMask is available!");
                    setIsMetaMaskAvailable(true);
                    await checkExistingAccount();
                } else {
                    console.log("Please install MetaMask!");
                    setError("Please install MetaMask.");
                }
            } catch (err) {
                setError("Failed to detect MetaMask.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        setupMetaMask();

        // Cleanup the event listener when the component is unmounted
        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener("chainChanged", handleChainChanged);
            }
        };
    }, []);

    const handleChainChanged = () => {
        window.location.reload();
    };

    // Check if the user is already connected to MetaMask
    const checkExistingAccount = async () => {
        try {
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            if (accounts.length > 0) {
                setAccount(accounts[0]);
            }
        } catch (err) {
            console.error("Failed to check accounts", err);
        }
    };

    // Connect to the MetaMask wallet
    const connectWallet = async () => {
        setConnecting(true); // Set loading state when connecting
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccount(accounts[0]);
        } catch (err) {
            if (err.code === 4001) {
                console.log("User denied account access");
            } else {
                console.error("Failed to connect wallet", err);
                setError("Failed to connect wallet.");
            }
        } finally {
            setConnecting(false); // Reset the loading state once finished
        }
    };

    // If loading, show loading message
    if (loading) {
        return <div>Loading...</div>;
    }

    // If MetaMask is not available, display the error message
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {isMetaMaskAvailable ? (
                <>
                    {account ? (
                        <div>
                            <h2>Connected Account: {account}</h2>
                            {/* Optionally add a disconnect button */}
                            <button onClick={() => setAccount(null)} className="disconnectButton">
                                Disconnect
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={connectWallet}
                            className="connectButton"
                            disabled={connecting} // Disable the button while connecting
                        >
                            {connecting ? "Connecting..." : "Connect Ethereum"}
                        </button>
                    )}
                </>
            ) : (
                <p>Please install MetaMask to connect your wallet.</p>
            )}
        </div>
    );
};

export default MetaMaskConnector;

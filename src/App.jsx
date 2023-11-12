import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "./constants";
import { Button, ChakraBaseProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Provider from "./pages/Provider";
import Manufacturer from "./pages/Manufacturer";
import Consumer from "./pages/Consumer";
import { Toaster } from "sonner";


function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [contractInstance, setContractInstance] = useState(null);

  useEffect(() => {
    const loadBlockchainData = async () => {
      if (typeof window.ethereum !== "undefined") {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setContractInstance(contract);

          const updateAccounts = async () => {
            const accounts = await provider.listAccounts();
            setCurrentAccount(accounts[0]);
          };

          updateAccounts();

          window.ethereum.on("accountsChanged", updateAccounts);
        } catch (error) {
          console.error("Error loading blockchain data:", error);
        }
      } else {
        window.alert("Please install MetaMask");
      }
    };

    loadBlockchainData();
  }, []);

  const MainPage = () => {
    return <div className="h-[100vh] flex items-center justify-center bg-gray-200">
      <h1 className="text-gray-500 font-bold text-3xl mb-[2rem]">Pharmaceutical supply Chain</h1>
    </div>
  }


  // const getTokens = async() =>{
  //   const res = await contractInstance.getTokens({value:4353})
  //   };

  return (
    <ChakraBaseProvider>
      <Router>
        <Home />
        <Toaster richColors/>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path="/provider" element={<Provider contractInstance={contractInstance} currentAccount={currentAccount} />} />
          <Route path="/manufacturer" element={<Manufacturer contractInstance={contractInstance} currentAccount={currentAccount} />} />
          <Route path="/consumer" element={<Consumer contractInstance={contractInstance} currentAccount={currentAccount} />} />
        </Routes>
      </Router>
    </ChakraBaseProvider>
  );
}

export default App;

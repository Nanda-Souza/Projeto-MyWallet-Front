import {BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import RegisterPage from "./components/pages/RegisterPage";
import HomePage from "./components/pages/HomePage";
import NewEntryPage from "./components/pages/NewEntryPage";
import NewExitPage from "./components/pages/NewExitPage";
import TokenContext from "./contexts/TokenContext";
import { useState } from "react";

export default function App() { 
  const [token, setToken] = useState("")
  const config = {
    headers: {
        Authorization: `Bearer ${token}`,
      },
    };

  
  
  return (
  <TokenContext.Provider value={{token, setToken, config}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/nova-entrada" element={<NewEntryPage />} />
        <Route path="/nova-saida" element={<NewExitPage />} />
      </Routes>    
    </BrowserRouter>
  </TokenContext.Provider>
  );
}

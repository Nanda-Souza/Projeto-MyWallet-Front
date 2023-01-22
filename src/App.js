import {BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import RegisterPage from "./components/pages/RegisterPage";
import HomePage from "./components/pages/HomePage";
//import NewEntryPage from "./components/pages/NewEntryPage";
//import NewExitPage from "./components/pages/NewExitPage";

export default function App() { 

  
  //<Route path="/nova-entrada" element={<NewEntryPage />} />
  //<Route path="/nova-saida" element={<NewExitPage />} />

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cadastro" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>    
  </BrowserRouter>

  );
}

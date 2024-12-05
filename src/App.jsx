import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Cooking from "./components/pages/Cooking";
import About from "./components/About";
import Recipe from "./components/Recipe";
import Footer from "./components/pages/Footer";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Recipe" element={<Recipe />} />
          <Route path="/Cooking" element={<Cooking />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
       <Footer/> 
    </div>
  );
};
export default App;

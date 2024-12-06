import React from "react";
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Herosection />
      <Features />
      <Footer />
      <img src="/im.webp" alt=""/> 
    </div>
  );
}

export default App;

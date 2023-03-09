import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./componets/footer/Footer";
import NavBar from "./componets/Header/NavBar";
import Home from "./componets/pages/home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;

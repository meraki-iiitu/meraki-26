// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>

      <div className="min-h-screen flex flex-col">
        <Navbar />

      
        <div className="flex-grow">
          <Routes>

            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Faq />
                </>
              }
            />

            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

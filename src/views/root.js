import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Welcome from "./Welcome";
import About from "./About";
import ScrollToTop from "../helpers/ScrollToTop";

const root = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route end path="/prototyp" element={<App />} />
        <Route end path="/o-badaniu" element={<About />} />
        <Route end path="/badanie" element={<Welcome />} />
      </Routes>
    </Router>
  );
};

export default root;

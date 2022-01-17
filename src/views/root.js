import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Welcome from "./Welcome";
import About from "./About";
import ScrollToTop from "../helpers/ScrollToTop";

const root = () => {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Routes>
        <Route end path="/" element={<Welcome />} />
        <Route end path="/o-badaniu" element={<About />} />
        <Route end path="/prototyp" element={<App />} />
      </Routes>
    </Router>
  );
};

export default root;

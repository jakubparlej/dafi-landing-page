import React from "react";
import "./App.scss";
import End from "../containers/end/End";
import {
  Navbar,
  Header,
  About,
  Features,
  Slider,
  FilterSwap,
  MyDafi,
  Creator,
  Footer,
} from "../containers/export";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Features />
      <Slider />
      <FilterSwap />
      <MyDafi />
      <Creator />
      <End />
      <Footer />
    </div>
  );
}

export default App;

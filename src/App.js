import "./App.scss";
import {
  Navbar,
  Header,
  About,
  Features,
  Slider,
  FilterSwap,
  MyDafi,
  Creator,
} from "./containers/export";

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
    </div>
  );
}

export default App;

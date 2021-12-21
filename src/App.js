import "./App.scss";
import {
  Navbar,
  Header,
  About,
  Features,
  Slider,
  FilterSwap,
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
    </div>
  );
}

export default App;

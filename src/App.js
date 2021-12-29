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
  Footer,
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
      <Footer />
    </div>
  );
}

export default App;

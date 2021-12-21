import "./App.scss";
import { Navbar, Header, About, Features, Slider } from "./containers/export";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Features />
      <Slider />
    </div>
  );
}

export default App;

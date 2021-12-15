import "./App.scss";
import { Navbar, Header, About, Features } from "./containers/export";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Features />
    </div>
  );
}

export default App;

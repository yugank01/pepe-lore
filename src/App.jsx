import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Horizontal from "./components/Horizontal";
import Navbar from "./components/Navbar";
import PepeLore from "./components/PepeLore";
import Tokenomics from "./components/Tokenomics";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Horizontal />
      <PepeLore />
      <div className="bg-black py-10">
        <Tokenomics />
      </div>
      <Footer />
    </div>
  );
}

export default App;

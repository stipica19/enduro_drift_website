import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import "./utilities.css";
import "./App.css";
import Tour from "./components/Tour";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <div className="">
      <Navbar />
      <Showcase />
      <About />
      <Tour />
    </div>
  );
}

export default App;

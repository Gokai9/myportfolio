import "./App.css";
import Fade from "react-reveal/Fade";
import Footer from "./components/Footer";
import Navbar from "./components/Header";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Fade left>
        <Skill />
      </Fade>
      <Fade left>
        <Contact />
      </Fade>
      <Footer />
    </div>
  );
}

export default App;

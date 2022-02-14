import "./App.css";
import Fade from "react-reveal/Fade";
import Footer from "./components/Footer";
import Navbar from "./components/Header";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Project from "./components/Project";

function App() {
    return (
        <div className="App">
            <Navbar />
            <About />
            <Fade left>
                <Skill />
            </Fade>
            <Project />
            <Fade left>
                <Contact />
            </Fade>
            <Footer />
        </div>
    );
}

export default App;

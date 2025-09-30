import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills  from "./components/Skills";
import Projects  from "./components/Projects";

function App() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />


    </div>
  );
}

export default App;

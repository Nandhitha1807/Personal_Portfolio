import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <contact />
      <Footer />
    </div>
  );
}

export default App;

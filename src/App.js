import React from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";

const App = () => {
  return (
    <div className="bg-background ">
      <div className="bg-cardbg">
        <Navbar />
        <Hero />
      </div>
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

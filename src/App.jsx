import React from 'react';
import Navbar from './assets/Navbar';
import Home from './assets/Home';
import Projects from './assets/Projects';
import Tools from './assets/Tools';
import About from './assets/About';
import Footer from './assets/Footer';
import './App.css'; 

const App = () => {
  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen font-sans">
      <Navbar />
      <section id="home" className="py-20">
        <Home />
      </section>
      <section id="projects" className="py-20">
        <Projects />
      </section>
      <section id="tools" className="py-20">
        <Tools />
      </section>
      <section id="about" className="py-20">
        <About />
      </section>
      <Footer />
    </div>
  );
};

export default App;
import React from 'react';
import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../section/Navbar';
import Home from '../section/Home';
import Projects from '../section/Projects';
import Tools from '../section/Tools';
import About from '../section/About';
import Footer from '../section/Footer';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
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
  )
}
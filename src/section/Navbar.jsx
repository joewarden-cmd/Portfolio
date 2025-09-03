import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 bg-blue-500/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-cyan-400">
          My Portfolio
        </a>
        <div className="flex space-x-6">
          <a href="#home" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
            Home
          </a>
          <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
            Projects
          </a>
          <a href="#tools" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
            Tools
          </a>
          <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
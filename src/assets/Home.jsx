import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 text-center mt-20">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeIn">
          Hello, I'm <span className="text-cyan-400">John Doe</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl animate-fadeIn">
          A passionate Web Developer focused on building beautiful and functional applications.
        </p>
        <img src="your-image.jpg" alt="Profile" className="w-48 h-48 rounded-full mb-8 shadow-2xl ring-4 ring-cyan-500/20" />
      </div>
    </div>
  );
};

export default Home;
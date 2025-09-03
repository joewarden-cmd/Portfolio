import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">About Me</h2>
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-2xl text-center">
        <p className="text-lg text-slate-400 leading-relaxed">
          I mostly do Photo Editing, Graphic Desigining, and Digital Art. I also Code websites and mobile applications
        </p>
        <p className="text-lg text-slate-400 leading-relaxed mt-4">
          In my free time, I enjoy working on personal projects and staying up-to-date with the latest trends in the tech world.
        </p>
      </div>
    </div>
  );
};

export default About;
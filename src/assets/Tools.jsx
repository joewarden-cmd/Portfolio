import React from 'react';

const tools = [
  { name: 'React', description: 'JavaScript library for building user interfaces.', icon: '⚛️' },
  { name: 'Tailwind CSS', description: 'A utility-first CSS framework for rapid UI development.', icon: '💨' },
  { name: 'Node.js', description: 'JavaScript runtime for server-side applications.', icon: '🟢' },
  { name: 'Visual Studio Code', description: 'A lightweight and powerful source code editor.', icon: '💻' },
];

const Tools = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">Tools I Use</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {tools.map((tool, index) => (
          <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center shadow-lg transition-transform transform hover:scale-105">
            <div className="text-5xl text-blue-500 mb-4">{tool.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{tool.name}</h3>
            <p className="text-slate-400">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
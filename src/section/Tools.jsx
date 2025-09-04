import React from 'react';

const tools = [

  { name: 'Photoshop', description: 'Powerful photo editing and graphic design software.', icon: '/phoshop.png' },
  { name: 'Sony Vegas', description: 'A professional video editor known for its intuitive timeline and powerful audio tools..', icon: '/vegas.png' },
  { name: 'Flutter', description: 'A UI toolkit by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.', icon: '/flutter.png' },
  { name: 'Dart', description: 'Its the core language of the Flutter framework for creating cross-platform mobile, web, and desktop apps', icon: '/dart.png' },
  { name: 'Vite', description: 'A modern build tool that makes web development faster by instantly loading your project.', icon: '/vite.png' },
  { name: 'React', description: 'A JavaScript library for building interactive user interfaces with reusable components.', icon: '/react.png' },
  { name: 'Javascript', description: 'The programming language that adds dynamic behavior and interactivity to websites.', icon: '/js.png' },
  { name: 'Tailwind CSS', description: 'A CSS framework that lets you build custom designs by combining simple utility classes directly in your code.', icon: '/tailwind.png' },
  { name: 'Paint Tool Sai', description: 'A lightweight digital art program popular with illustrators for its smooth line work and realistic brushes.', icon: '/paintool.png' },
  { name: 'Python', description: 'A versatile language used for everything from web and data science to machine learning and automation.', icon: '/python.png' },
  { name: 'Xampp', description: 'A free and open-source software package that provides an easy way to set up a local web server environment on your computer.', icon: '/xammp.png' },
  { name: 'Visual Studio', description: 'A powerful Integrated Development Environment (IDE) from Microsoft.', icon: '/vs.png' },
  { name: 'Visual Studio Code', description: 'A highly customizable and powerful code editor with built-in tools for debugging and version control.', icon: '/vscode.png' },
  { name: 'C#', description: 'A modern, object-oriented language developed by Microsoft.', icon: '/sharp.png' },
  
  
];

const Tools = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">Tools I Use</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" >
        {tools.map((tool, index) => (
          <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center shadow-lg transition-transform transform hover:scale-105">
            <div className="text-5xl text-blue-500 mb-4"><img src={tool.icon} width="85" height="85" class="mx-auto block" alt={tool.name} /></div>
            <h3 className="text-xl font-semibold mb-2 text-white">{tool.name}</h3>
            <p className="text-slate-400">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;